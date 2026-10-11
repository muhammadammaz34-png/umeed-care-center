export type ServiceCategory = "prosthetics" | "orthotics" | "footwear";

export function categoryOf(id: string): ServiceCategory {
  if (id.includes("footwear")) return "footwear";
  if (id.includes("prosthetic") && !id.includes("orthotic")) return "prosthetics";
  return "orthotics";
}

export const categoryLabels: Record<ServiceCategory, { en: string; ur: string; noteEn: string; noteUr: string }> = {
  prosthetics: {
    en: "Prosthetics",
    ur: "مصنوعی اعضاء",
    noteEn: "Artificial limbs for adults and children",
    noteUr: "بڑوں اور بچوں کے لیے مصنوعی اعضاء",
  },
  orthotics: {
    en: "Orthotics",
    ur: "آرتھوٹکس",
    noteEn: "Braces and supports for the spine, arms, legs and feet",
    noteUr: "ریڑھ، بازو، ٹانگ اور پاؤں کے لیے بریسز اور سپورٹس",
  },
  footwear: {
    en: "Footwear",
    ur: "جوتے",
    noteEn: "Protective shoes and inserts for sensitive feet",
    noteUr: "حساس پاؤں کے لیے حفاظتی جوتے اور انسرٹس",
  },
};
