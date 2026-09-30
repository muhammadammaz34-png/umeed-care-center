import type { ReactNode } from "react";
import type { RichTextNode } from "./contentful";

// Minimal renderer for Contentful's rich text JSON — covers the node types
// editors actually use in blog body content (paragraphs, headings, lists,
// bold/italic text, and links). No external rich-text package needed.

function renderMarks(text: string, marks: { type: string }[] = []): ReactNode {
  return marks.reduce<ReactNode>((acc, mark) => {
    if (mark.type === "bold") return <strong>{acc}</strong>;
    if (mark.type === "italic") return <em>{acc}</em>;
    if (mark.type === "underline") return <u>{acc}</u>;
    if (mark.type === "code") return <code className="bg-muted px-1 py-0.5 rounded text-sm">{acc}</code>;
    return acc;
  }, text);
}

function renderNode(node: RichTextNode, key: number): ReactNode {
  const children = (node.content ?? []).map((child, i) => renderNode(child, i));

  switch (node.nodeType) {
    case "text":
      return <span key={key}>{renderMarks(node.value ?? "", node.marks)}</span>;

    case "paragraph":
      return (
        <p key={key} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
          {children}
        </p>
      );

    case "heading-1":
    case "heading-2":
      return (
        <h2 key={key} className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">
          {children}
        </h2>
      );

    case "heading-3":
    case "heading-4":
    case "heading-5":
    case "heading-6":
      return (
        <h3 key={key} className="text-lg font-bold text-foreground mt-6 mb-2">
          {children}
        </h3>
      );

    case "unordered-list":
      return (
        <ul key={key} className="space-y-2 my-4 list-disc pl-5">
          {children}
        </ul>
      );

    case "ordered-list":
      return (
        <ol key={key} className="space-y-2 my-4 list-decimal pl-5">
          {children}
        </ol>
      );

    case "list-item":
      return (
        <li key={key} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {children}
        </li>
      );

    case "hyperlink":
      return (
        <a
          key={key}
          href={(node.data?.uri as string) ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          {children}
        </a>
      );

    case "hr":
      return <hr key={key} className="my-8 border-border/50" />;

    case "blockquote":
      return (
        <blockquote key={key} className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
          {children}
        </blockquote>
      );

    case "document":
      return <>{children}</>;

    default:
      return children.length ? <span key={key}>{children}</span> : null;
  }
}

export function renderRichText(document: RichTextNode | null): ReactNode {
  if (!document) return null;
  return renderNode(document, 0);
}

// --- FAQ extraction for structured data ---
// Looks for a "Frequently Asked Questions" heading in the article body, then
// reads the Q&A pairs that follow (question as a bold-only paragraph,
// answer as the plain paragraph right after it) so FAQPage schema can be
// generated automatically from whatever editors write in Contentful,
// without a separate FAQ field or manual JSON-LD per post.

function getPlainText(node: RichTextNode): string {
  if (node.nodeType === "text") return node.value ?? "";
  return (node.content ?? []).map(getPlainText).join("");
}

function isHeading(node: RichTextNode): boolean {
  return node.nodeType === "heading-1" || node.nodeType === "heading-2";
}

function isBold(node: RichTextNode): boolean {
  return (node.marks ?? []).some((m) => m.type === "bold");
}

function isBoldOnlyParagraph(node: RichTextNode): boolean {
  if (node.nodeType !== "paragraph") return false;
  const textNodes = (node.content ?? []).filter((c) => c.nodeType === "text" && (c.value ?? "").trim());
  if (!textNodes.length) return false;
  return textNodes.every(isBold);
}

// Handles "**Question?** Answer text." written as a single paragraph, where
// the leading run of text nodes is bold (the question) and the rest isn't
// (the answer) — the pattern Contentful's editor produces for inline bold.
function extractInlineQA(node: RichTextNode): ExtractedFaq | null {
  if (node.nodeType !== "paragraph") return null;
  const textNodes = (node.content ?? []).filter((c) => c.nodeType === "text");
  if (!textNodes.length || !isBold(textNodes[0])) return null;

  let i = 0;
  let question = "";
  while (i < textNodes.length && isBold(textNodes[i])) {
    question += textNodes[i].value ?? "";
    i++;
  }
  let answer = "";
  for (; i < textNodes.length; i++) answer += textNodes[i].value ?? "";

  question = question.trim();
  answer = answer.trim();
  return question && answer ? { question, answer } : null;
}

export interface ExtractedFaq {
  question: string;
  answer: string;
}

export function extractFaqsFromRichText(document: RichTextNode | null): ExtractedFaq[] {
  if (!document?.content) return [];

  const faqHeadingIndex = document.content.findIndex(
    (n) => isHeading(n) && getPlainText(n).trim().toLowerCase().includes("frequently asked questions")
  );
  if (faqHeadingIndex === -1) return [];

  const faqs: ExtractedFaq[] = [];
  const nodes = document.content;
  for (let i = faqHeadingIndex + 1; i < nodes.length; i++) {
    const node = nodes[i];
    if (isHeading(node)) break;

    // Pattern 1: question and answer share one paragraph (bold lead-in).
    const inline = extractInlineQA(node);
    if (inline) {
      faqs.push(inline);
      continue;
    }

    // Pattern 2: question is its own bold-only paragraph, answer follows.
    if (isBoldOnlyParagraph(node)) {
      const question = getPlainText(node).trim();
      const answerNode = nodes[i + 1];
      if (answerNode?.nodeType === "paragraph") {
        const answer = getPlainText(answerNode).trim();
        if (question && answer) {
          faqs.push({ question, answer });
          i++;
        }
      }
    }
  }
  return faqs;
}
