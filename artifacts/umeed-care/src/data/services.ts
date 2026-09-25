import lowerLimbProsthetic from "@/assets/images/service-lower-limb-prosthetic.png";
import upperLimbProsthetic from "@/assets/images/service-upper-limb-prosthetic.png";
import pediatricOrthotics from "@/assets/images/service-pediatric-orthotics.png";
import spinalOrthotics from "@/assets/images/service-spinal-orthotics.png";
import lowerLimbOrthotics from "@/assets/images/service-lower-limb-orthotics.png";
import upperLimbOrthotics from "@/assets/images/service-upper-limb-orthotics.png";
import customFootOrthotics from "@/assets/images/service-custom-foot-orthotics.png";
import diabeticFootwear from "@/assets/images/service-diabetic-footwear.png";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  whoItHelps: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "lower-limb-prosthetics",
    title: "Lower Limb Prosthetics",
    tagline: "Walk again with confidence",
    shortDescription: "Advanced artificial legs and feet designed for natural movement, stability, and comfort.",
    description: "Our lower limb prosthetics program provides custom-fabricated artificial legs, feet, and knee systems designed to match each patient's lifestyle, activity level, and body mechanics. Whether you are recovering from an amputation or seeking a replacement device, our certified prosthetists use the latest materials and techniques to ensure the best possible fit, comfort, and mobility.",
    benefits: [
      "Custom-fitted to your exact measurements",
      "Lightweight, durable materials",
      "Solutions for below-knee, above-knee, and hip disarticulation",
      "Dynamic and energy-return foot options",
      "Gait training support and follow-up care",
    ],
    whoItHelps: "Patients with lower limb amputations due to injury, diabetes, vascular disease, or congenital conditions.",
    image: lowerLimbProsthetic,
  },
  {
    id: "upper-limb-prosthetics",
    title: "Upper Limb Prosthetics",
    tagline: "Restore function and independence",
    shortDescription: "Custom-fitted artificial arms and hands that restore functionality and independence.",
    description: "Regaining the use of your hands and arms changes everything. Our upper limb prosthetics range from passive cosmetic devices to body-powered and myoelectric systems, all precisely fabricated to restore your independence for daily tasks, work, and personal care. Each device is designed with both function and appearance in mind.",
    benefits: [
      "Cosmetic, body-powered, and functional options",
      "Solutions for partial hand, wrist, below-elbow, and above-elbow",
      "Lightweight and ergonomic designs",
      "Training provided for comfortable daily use",
      "Durable silicone and carbon components",
    ],
    whoItHelps: "Patients with upper limb amputations or limb differences at any level from finger to shoulder.",
    image: upperLimbProsthetic,
  },
  {
    id: "pediatric-orthotics-prosthetics",
    title: "Pediatric Orthotics & Prosthetics",
    tagline: "Growing with your child, step by step",
    shortDescription: "Gentle, compassionate fitting of supportive devices for children as they grow and develop.",
    description: "Children's bodies grow and change rapidly, and their orthotic and prosthetic needs are unique. Our specialists have dedicated experience working with infants, toddlers, and teenagers, providing gentle assessments and devices that support healthy development. We work closely with families and referring physicians to ensure the best outcomes.",
    benefits: [
      "Experienced pediatric specialists",
      "Regular sizing reviews as your child grows",
      "Comfortable, child-friendly materials and colours",
      "Full range from AFOs to prosthetic limbs",
      "Family-centred approach and education",
    ],
    whoItHelps: "Infants, children, and adolescents with congenital conditions, cerebral palsy, limb differences, or developmental issues requiring orthotic or prosthetic support.",
    image: pediatricOrthotics,
  },
  {
    id: "spinal-orthotics",
    title: "Spinal Orthotics",
    tagline: "Supporting your spine, protecting your future",
    shortDescription: "Supportive braces to stabilize the spine, relieve pain, and aid in recovery.",
    description: "Spinal orthotics — including lumbar supports, thoracolumbosacral orthoses (TLSO), and scoliosis braces — are precisely fitted to immobilise, correct, or support the spine. Our clinicians conduct thorough assessments and work with your medical team to prescribe and fabricate the appropriate spinal device for your condition and recovery goals.",
    benefits: [
      "Conditions treated: scoliosis, kyphosis, fractures, post-surgical support",
      "Custom-moulded for maximum contact and effectiveness",
      "Breathable, low-profile designs for daily wear",
      "Coordination with your physiotherapist and surgeon",
      "Regular follow-up and adjustments",
    ],
    whoItHelps: "Patients with scoliosis, spinal fractures, disc conditions, post-surgical needs, or chronic back pain requiring external support.",
    image: spinalOrthotics,
  },
  {
    id: "lower-limb-orthotics",
    title: "Lower Limb Orthotics",
    tagline: "Walk better, live better",
    shortDescription: "Custom leg braces to support weakened joints, improve alignment, and enhance mobility.",
    description: "Lower limb orthotics improve alignment, stability, and movement for patients with neurological or musculoskeletal conditions affecting the legs, knees, or ankles. From ankle-foot orthoses (AFOs) and hinged knee braces to full hip-knee-ankle-foot orthoses (HKAFOs), we fabricate and fit devices that enable our patients to stand, walk, and move with greater ease.",
    benefits: [
      "AFOs, KAFOs, HKAFOs, and knee braces",
      "Custom-fabricated and off-the-shelf options",
      "Conditions: drop foot, cerebral palsy, post-stroke, knee instability",
      "Dynamic and articulated designs for improved gait",
      "Lightweight thermoplastic and carbon fibre options",
    ],
    whoItHelps: "Patients with drop foot, stroke, cerebral palsy, muscular dystrophy, ligament instability, or post-surgical rehabilitation needs.",
    image: lowerLimbOrthotics,
  },
  {
    id: "upper-limb-orthotics",
    title: "Upper Limb Orthotics",
    tagline: "Precision support for hands, wrists, and arms",
    shortDescription: "Precision splints and braces for the arm, wrist, and hand to support healing and function.",
    description: "Our upper limb orthotic services cover a comprehensive range of splints and braces for the hand, wrist, elbow, and shoulder. Whether you need a resting hand splint for nerve injury, a dynamic extension splint for tendon repair, or an elbow brace for post-fracture recovery, our team fabricates devices that protect healing tissues while maintaining as much function as possible.",
    benefits: [
      "Static and dynamic splints",
      "Conditions: carpal tunnel, tendon injuries, fractures, nerve palsy",
      "Wrist, elbow, shoulder, and full-arm solutions",
      "Thermoplastic and fabric-based options",
      "Occupational therapy coordination available",
    ],
    whoItHelps: "Patients with carpal tunnel syndrome, wrist fractures, tendon or nerve injuries, rheumatoid arthritis, or post-surgical arm conditions.",
    image: upperLimbOrthotics,
  },
  {
    id: "custom-foot-orthotics",
    title: "Custom Foot Orthotics",
    tagline: "Every step, perfectly supported",
    shortDescription: "Personalized insoles crafted to correct foot mechanics, reduce pain, and improve posture.",
    description: "Foot pain, flat feet, heel spurs, and poor arch support affect the entire body. Our custom foot orthotics are individually cast and fabricated from detailed measurements of your foot structure and gait. They fit inside your regular footwear and correct biomechanical imbalances to reduce pain and prevent long-term complications.",
    benefits: [
      "Full gait analysis and foot assessment",
      "Conditions: plantar fasciitis, flat feet, heel spurs, overpronation",
      "Slim-profile designs that fit standard shoes",
      "Rigid, semi-rigid, and soft shell options",
      "Durable and long-lasting materials",
    ],
    whoItHelps: "Anyone experiencing foot, ankle, knee, hip, or lower back pain related to abnormal foot mechanics or gait irregularities.",
    image: customFootOrthotics,
  },
  {
    id: "diabetic-footwear",
    title: "Diabetic & Pressure-Relief Footwear",
    tagline: "Protecting sensitive feet every day",
    shortDescription: "Specialized shoes and inserts to protect sensitive feet and prevent complications.",
    description: "Diabetic neuropathy and poor circulation put feet at serious risk of ulcers, infections, and even amputation. Our specialist diabetic footwear — including custom therapeutic sandals, extra-depth shoes, and pressure-relief insoles — redistributes pressure away from high-risk areas, reduces friction, and keeps feet protected during daily life.",
    benefits: [
      "Pressure-mapping for ulcer-risk assessment",
      "Custom sandals, shoes, and insoles",
      "Seamless interiors to prevent irritation",
      "Extra-depth designs for swollen or deformed feet",
      "Prevention of diabetic foot complications",
    ],
    whoItHelps: "Patients with diabetes, peripheral neuropathy, foot ulcers, Charcot foot, or any condition requiring pressure relief and protective footwear.",
    image: diabeticFootwear,
  },
];

export function getServiceById(id: string | undefined): Service | undefined {
  return services.find((s) => s.id === id);
}
