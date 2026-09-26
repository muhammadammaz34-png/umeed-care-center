import lowerLimbProsthetic from "@/assets/images/service-lower-limb-prosthetic.png";
import customFootOrthotics from "@/assets/images/service-custom-foot-orthotics.png";
import pediatricOrthotics from "@/assets/images/service-pediatric-orthotics.png";
import diabeticFootwear from "@/assets/images/service-diabetic-footwear.png";

export interface BlogBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-prosthetic-limb-karachi",
    title: "Choosing the Right Prosthetic Limb: A Guide for Patients in Karachi",
    excerpt:
      "What actually determines whether a prosthetic limb works well for you — from the level of amputation to the type of foot or knee component. A practical guide before your first consultation.",
    metaDescription:
      "A practical guide to choosing a prosthetic limb in Karachi — amputation level, socket fit, knee and foot components, and what to expect from your first consultation.",
    date: "2026-08-12",
    readTime: "6 min read",
    category: "Prosthetics",
    coverImage: lowerLimbProsthetic,
    content: [
      {
        type: "paragraph",
        text: "Most patients who come to us after an amputation have the same first question: which prosthetic should I get? The honest answer is that there isn't one \"best\" prosthetic limb — there's the right one for your specific amputation level, activity level, and daily routine. Here's what actually goes into that decision.",
      },
      {
        type: "heading",
        text: "1. Amputation level comes first",
      },
      {
        type: "paragraph",
        text: "A below-knee (transtibial) amputation and an above-knee (transfemoral) amputation are treated very differently. Below-knee prosthetics preserve your own knee joint, which makes walking mechanics closer to normal and rehabilitation faster. Above-knee prosthetics need a prosthetic knee joint as well as a foot, which means more components have to work together and gait training takes longer. Your prosthetist will assess your residual limb length, skin condition, and muscle strength before recommending a design.",
      },
      {
        type: "heading",
        text: "2. Socket fit matters more than the brand of components",
      },
      {
        type: "paragraph",
        text: "Patients often focus on the foot or knee component, but the socket — the part that actually touches your residual limb — is what determines comfort day to day. A poorly fitted socket causes skin breakdown, pain, and eventually patients simply stop wearing the device. This is why we take multiple measurements and often do a test socket fitting before finalizing the final prosthetic, adjusting for any changes in limb volume.",
      },
      {
        type: "heading",
        text: "3. Match the foot and knee components to your actual lifestyle",
      },
      {
        type: "list",
        items: [
          "Basic mechanical feet — reliable, lower cost, suited to indoor mobility and level ground",
          "Dynamic energy-return feet — better for patients who walk longer distances or on uneven ground",
          "Single-axis or polycentric knees — added stability for above-knee amputees, especially useful on stairs",
        ],
      },
      {
        type: "paragraph",
        text: "There's no benefit to choosing a more advanced component than you'll actually use. We'd rather fit you with the right device for your real daily routine — work, prayer, household tasks, walking distance — than the most expensive option on paper.",
      },
      {
        type: "heading",
        text: "4. Budget for follow-up adjustments, not just the initial fitting",
      },
      {
        type: "paragraph",
        text: "Residual limb volume changes in the weeks and months after amputation, especially for new amputees. Expect at least two to three follow-up visits in the first few months for socket adjustments. This is normal and part of getting a prosthetic that actually fits well long-term, not a sign that something went wrong with the initial fitting.",
      },
      {
        type: "heading",
        text: "What to bring to your first consultation",
      },
      {
        type: "list",
        items: [
          "Any medical records or discharge summary from your amputation surgery",
          "A list of your daily activities and work requirements",
          "Comfortable, loose clothing that allows access to the residual limb",
          "Someone to accompany you, especially for your first few visits",
        ],
      },
      {
        type: "paragraph",
        text: "If you or a family member is facing this decision, message us on WhatsApp with your situation. We'll walk you through what's realistic for your case before you come in, so your first visit is focused on assessment rather than starting from zero.",
      },
    ],
  },
  {
    slug: "signs-you-need-custom-foot-orthotics",
    title: "5 Signs You Need Custom Foot Orthotics, Not Store-Bought Insoles",
    excerpt:
      "Generic insoles help some people. But certain foot and leg symptoms mean a custom orthotic — molded to your own foot — is what will actually fix the problem.",
    metaDescription:
      "Persistent foot pain, uneven shoe wear, or flat feet? Here are 5 signs that generic insoles won't fix your problem and you need custom foot orthotics instead.",
    date: "2026-07-22",
    readTime: "5 min read",
    category: "Orthotics",
    coverImage: customFootOrthotics,
    content: [
      {
        type: "paragraph",
        text: "Pharmacies and shoe shops in Karachi sell generic insoles for a few hundred rupees, and for mild, temporary discomfort they can help. But we regularly see patients who tried three or four different store-bought insoles before coming to us — and the reason those didn't work is usually that their problem needed a device molded to their own foot, not a generic shape.",
      },
      {
        type: "heading",
        text: "1. Pain that keeps coming back in the same spot",
      },
      {
        type: "paragraph",
        text: "If heel pain, arch pain, or ball-of-foot pain returns within days of switching insoles, it usually means the underlying structural issue — like plantar fasciitis, a high arch, or flat feet — isn't being corrected, only cushioned temporarily.",
      },
      {
        type: "heading",
        text: "2. Uneven wear pattern on your shoes",
      },
      {
        type: "paragraph",
        text: "Check the sole of an older pair of shoes. If one side wears down noticeably faster than the other, or the wear is concentrated on the outer or inner edge rather than spread evenly, it's a sign of how your foot is actually striking the ground — something a custom orthotic is built to correct.",
      },
      {
        type: "heading",
        text: "3. Visibly flat feet or very high arches",
      },
      {
        type: "paragraph",
        text: "Both extremes change how weight travels through your foot and up into your knees and lower back. Generic insoles offer a single arch height that fits an \"average\" foot — which by definition doesn't fit feet at either extreme.",
      },
      {
        type: "heading",
        text: "4. Diabetes with any loss of sensation in the feet",
      },
      {
        type: "paragraph",
        text: "This is not a case where cost-saving with a generic insole is worth the risk. Reduced sensation means you may not feel a pressure point developing until it's already become a wound. Custom orthotics for diabetic patients are built specifically to redistribute pressure away from vulnerable areas.",
      },
      {
        type: "heading",
        text: "5. Pain in your knees or lower back with no clear cause",
      },
      {
        type: "paragraph",
        text: "Foot mechanics affect the entire leg. Patients are sometimes surprised that a foot orthotic is recommended for knee or back pain — but if your gait assessment shows the pain originates from how your foot loads during walking, correcting that is often more effective than treating the knee or back directly.",
      },
      {
        type: "heading",
        text: "How the custom fitting process works at Umeed Care Center",
      },
      {
        type: "list",
        items: [
          "A gait and posture assessment to see how you actually walk",
          "A mold or scan taken of your specific foot shape",
          "Fabrication of the orthotic to correct your specific issue, not a generic shape",
          "A fitting appointment with adjustments if anything feels off",
        ],
      },
      {
        type: "paragraph",
        text: "If you've been cycling through pharmacy insoles without lasting relief, that's usually the clearest sign it's time for a proper assessment. Message us on WhatsApp to book one.",
      },
    ],
  },
  {
    slug: "caring-for-your-childs-orthotic-device",
    title: "Caring for Your Child's Orthotic Device: A Parent's Guide",
    excerpt:
      "Ankle-foot orthoses and other pediatric orthotic devices need different care than adult devices — because children grow, are more active, and can't always describe discomfort clearly.",
    metaDescription:
      "Practical guidance for parents on caring for a child's ankle-foot orthosis or other pediatric orthotic device — daily checks, growth monitoring, and when to call your specialist.",
    date: "2026-06-30",
    readTime: "5 min read",
    category: "Pediatric Care",
    coverImage: pediatricOrthotics,
    content: [
      {
        type: "paragraph",
        text: "Parents of children with ankle-foot orthoses (AFOs) or other orthotic devices often ask the same practical questions in the first few weeks: how do I know if it still fits, how do I clean it, and how do I tell if my child is in pain versus just adjusting to something new. Here's what we tell every parent at Umeed Care Center.",
      },
      {
        type: "heading",
        text: "Check skin daily, especially in the first two weeks",
      },
      {
        type: "paragraph",
        text: "After removing the device, look at your child's skin for red marks. A light pink mark that fades within 15-20 minutes is normal — it means the device is doing its job of applying gentle, corrective pressure. A red mark that doesn't fade, or any blistering or broken skin, means the fit needs to be checked by your specialist before continuing daily wear.",
      },
      {
        type: "heading",
        text: "Watch for growth, not just symptoms",
      },
      {
        type: "paragraph",
        text: "Children's feet and legs grow quickly, and an orthotic that fit well three months ago may now be too tight without any obvious sign except your child resisting wearing it. As a general rule, schedule a fit check every 3 to 4 months for younger children, and immediately if you notice new red marks, difficulty putting the device on, or your child suddenly refusing to wear something they were previously fine with.",
      },
      {
        type: "heading",
        text: "Daily care routine",
      },
      {
        type: "list",
        items: [
          "Wipe the inside of the orthotic with a damp cloth daily — sweat and skin oils build up quickly",
          "Let it air dry fully before the next use; never use a heater or direct sunlight, which can warp the plastic",
          "Check velcro straps for wear and replace before they stop holding fit properly",
          "Always have your child wear proper socks (usually seamless, moisture-wicking) underneath — no bare skin against the device",
        ],
      },
      {
        type: "heading",
        text: "Building wear-time gradually",
      },
      {
        type: "paragraph",
        text: "Don't jump straight to full-day wear on day one, even if that's the eventual goal. We usually recommend starting with 1-2 hours, checking skin afterward, and increasing gradually over 1-2 weeks. This lets you catch any fit issues early, while the exposure is still small.",
      },
      {
        type: "heading",
        text: "When it's more than just \"getting used to it\"",
      },
      {
        type: "paragraph",
        text: "Some resistance in the first few days is normal — new sensations, especially for younger children, take adjustment. But persistent crying specifically when the device is put on, refusal to bear weight, or new limping should not be treated as normal adjustment. Contact your specialist rather than waiting it out.",
      },
      {
        type: "paragraph",
        text: "Our pediatric orthotics program includes scheduled follow-ups precisely because growth and adjustment are expected, not exceptions. If you're unsure whether what you're seeing is normal, message us on WhatsApp with a description or photo — we'd rather answer a quick question than have a child go without a properly fitted device.",
      },
    ],
  },
  {
    slug: "diabetic-foot-care-why-footwear-matters",
    title: "Diabetic Foot Care: Why the Right Footwear Isn't Optional",
    excerpt:
      "For diabetic patients, the wrong shoes don't just cause discomfort — they can lead to ulcers, infections, and in serious cases, amputation. Here's what proper diabetic footwear actually protects against.",
    metaDescription:
      "Why diabetic patients need proper pressure-relief footwear, how diabetic foot complications develop, and what to look for in diabetic shoes and orthotics in Karachi.",
    date: "2026-05-18",
    readTime: "5 min read",
    category: "Diabetic Care",
    coverImage: diabeticFootwear,
    content: [
      {
        type: "paragraph",
        text: "Diabetic foot complications are one of the most preventable causes of amputation — and footwear is one of the most overlooked parts of preventing them. We see patients in Karachi regularly who developed a foot ulcer from something as simple as an ill-fitting shoe they didn't realize was causing damage, because they couldn't feel it happening.",
      },
      {
        type: "heading",
        text: "Why diabetes changes how your feet need to be protected",
      },
      {
        type: "paragraph",
        text: "Long-term high blood sugar can damage nerves in the feet (diabetic peripheral neuropathy), reducing your ability to feel pain, pressure, or temperature. It also affects blood circulation, slowing healing. The combination is dangerous: a blister or pressure point can develop into a wound without you feeling it, and once it becomes a wound, it heals slowly and is prone to infection.",
      },
      {
        type: "heading",
        text: "What ordinary shoes get wrong for diabetic feet",
      },
      {
        type: "list",
        items: [
          "Seams and stitching on the inside that rub against the skin repeatedly",
          "Narrow toe boxes that compress toes together",
          "Insufficient depth to accommodate any swelling or an orthotic insert",
          "Stiff soles that don't redistribute pressure away from vulnerable points like the ball of the foot",
        ],
      },
      {
        type: "heading",
        text: "What proper diabetic footwear actually does",
      },
      {
        type: "list",
        items: [
          "Seamless interior construction to eliminate friction points",
          "Extra depth and width to fit custom orthotic inserts without cramming the foot",
          "Cushioned, pressure-redistributing soles designed around your specific foot shape",
          "Breathable materials that reduce moisture buildup, which contributes to skin breakdown",
        ],
      },
      {
        type: "heading",
        text: "Daily foot checks matter as much as the shoes",
      },
      {
        type: "paragraph",
        text: "Even with proper footwear, we recommend diabetic patients check their own feet daily — or have a family member check if vision or flexibility makes this difficult. Look for redness, cuts, blisters, or areas of unusual warmth. Catching a problem on day one, before it becomes an open wound, is the difference between a minor treatment and a serious complication.",
      },
      {
        type: "heading",
        text: "Who should get assessed for diabetic footwear",
      },
      {
        type: "paragraph",
        text: "If you have diabetes and notice any numbness, tingling, or reduced sensation in your feet, that alone is reason enough for an assessment — you don't need to already have a wound. We fit diabetic patients with custom footwear and pressure-relief insoles based on an assessment of their specific foot shape and risk areas.",
      },
      {
        type: "paragraph",
        text: "Message us on WhatsApp to book a diabetic foot assessment. It's a straightforward visit, and for diabetic patients it's one of the most effective things you can do to protect your mobility long-term.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
