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
