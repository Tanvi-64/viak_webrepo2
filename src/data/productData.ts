// ── SPM images
import spm01 from "@/assets/spm/spm_01.jpg";
import spm02 from "@/assets/spm/spm_02.jpeg";
import spm03 from "@/assets/spm/spm_03.jpeg";
import spm04 from "@/assets/spm/spm_04.jpeg";
import spm05 from "@/assets/spm/spm_05.jpg";
import spm06 from "@/assets/spm/spm_06.jpeg";
import spm07 from "@/assets/spm/spm_07.jpeg";
import spm08 from "@/assets/spm/spm_08.jpg";
import spm09 from "@/assets/spm/spm_09.jpg";
import spm10 from "@/assets/spm/spm_10.jpeg";
import spm11 from "@/assets/spm/spm_11.jpeg";
import spm12 from "@/assets/spm/spm_12.jpeg";
import spm13 from "@/assets/spm/spm_13.png";
import spm14 from "@/assets/spm/spm_14.png";

// ── Hydraulics images
import hy1 from "@/assets/hydraulics/hy1.png";
import hy2 from "@/assets/hydraulics/hy2.png";
import hy3 from "@/assets/hydraulics/hy3.jpeg";
import hy5 from "@/assets/hydraulics/hy5.png";

// ── Tyre images
import ty1  from "@/assets/tyre/ty1.jpeg";
import ty2  from "@/assets/tyre/ty2.png";
import ty3  from "@/assets/tyre/ty3.png";
import ty4  from "@/assets/tyre/ty4.png";
import ty5  from "@/assets/tyre/ty5.jpeg";
import ty6  from "@/assets/tyre/ty6.png";
import ty7  from "@/assets/tyre/ty7.png";
import ty8  from "@/assets/tyre/ty8.png";
import ty9  from "@/assets/tyre/ty9.png";
import ty10 from "@/assets/tyre/ty10.png";
import ty11 from "@/assets/tyre/ty11.png";
import ty12 from "@/assets/tyre/ty12.png";

// ── MHE images
import mhe1  from "@/assets/MHE/mhe1.jpeg";
import mhe2  from "@/assets/MHE/mhe2.jpeg";
import mhe3  from "@/assets/MHE/mhe3.png";
import mhe4  from "@/assets/MHE/mhe4.png";
import mhe5  from "@/assets/MHE/mhe5.png";
import mhe6  from "@/assets/MHE/mhe6.png";
import mhe7  from "@/assets/MHE/mhe7.jpg";
import mhe8  from "@/assets/MHE/mhe8.png";
import mhe9  from "@/assets/MHE/mhe9.png";
import mhe10 from "@/assets/MHE/mhe10.png";
import mhe11 from "@/assets/MHE/mhe11.png";
import mhe12 from "@/assets/MHE/mhe12.png";
import mh13  from "@/assets/MHE/mh13.jpg";

export interface GalleryItem {
  src: string;
  name: string;
  desc?: string;
}

export interface ProductItem {
  title: string;
  image: string;
  desc: string;
  items: string[];
  gallery?: GalleryItem[];
}

export const productData: Record<string, ProductItem> = {

  // ── SPM ──────────────────────────────────────────────────────────────
  "spm": {
    title: "Special Purpose Machines (SPM)",
    image: spm01,
    desc: "Custom-built special purpose machines tailored for specific production needs such as welding, drilling, assembly, tapping, and multi-station automation.",
    items: [],
    gallery: [
      { src: spm01, name: "100 Ton Hydraulic Press",           desc: "Heavy-duty 100-ton hydraulic press designed for high-force pressing, forming and assembly operations in automotive and industrial manufacturing." },
      { src: spm02, name: "20 Ton Hydraulic Press",            desc: "Compact 20-ton hydraulic press for precision pressing, fitting and stamping tasks. Ideal for medium-load production lines requiring consistent force control." },
      { src: spm03, name: "Cow Turn Table",                    desc: "Rotary turn table machine enabling continuous multi-station processing. Increases throughput by allowing simultaneous loading, machining and unloading." },
      { src: spm04, name: "Cured Hose Cutting SPM",            desc: "Special purpose machine for accurate cutting of cured rubber hoses to precise lengths. Ensures clean cuts with minimal material waste." },
      { src: spm05, name: "Cut-Off Wheel Turn Table",          desc: "Automated turn table integrated with cut-off wheel mechanism for high-speed, repeatable cutting of circular and tubular components." },
      { src: spm06, name: "Cutting Wheel Pressing Auto Machine", desc: "Fully automated machine combining cutting wheel operation with pressing action. Designed for high-volume production with servo-controlled precision." },
      { src: spm07, name: "Hydraulic Press Machine",           desc: "Versatile hydraulic press suitable for deep drawing, punching, blanking and assembly. Built for durability with programmable pressure control." },
      { src: spm08, name: "Proofload Testing Machine 1",       desc: "Proofload testing machine for verifying structural integrity and load-bearing capacity of components. Ensures compliance with safety and quality standards." },
      { src: spm09, name: "Proofload Testing Machine 2",       desc: "Advanced proofload testing setup with digital load monitoring for accurate force measurement and traceability in quality assurance processes." },
      { src: spm10, name: "S201 Assembly Machine",             desc: "S201 special purpose machine engineered for a specific client process. Features custom tooling, pneumatic actuation and PLC-based control." },
      { src: spm11, name: "SPM Unit 1",                        desc: "Custom-built SPM unit designed for automated part handling and processing. Integrates sensors and actuators for reliable, repeatable cycle performance." },
      { src: spm12, name: "SPM Unit 2",                        desc: "Multi-function SPM unit combining material feeding, processing and ejection in a single automated cycle for improved production efficiency." },
      { src: spm13, name: "Wheel Stacking Machine",            desc: "Automated wheel stacking machine for organised stacking and transfer of wheel components. Reduces manual handling and improves line flow in tire plants." },
      { src: spm14, name: "Wire Guiding Machine",              desc: "Precision wire guiding machine ensuring accurate wire placement and tension control during winding or assembly operations." },
    ],
  },

  // ── HYDRAULICS ───────────────────────────────────────────────────────
  "hydraulics": {
    title: "Hydraulics, Pneumatics & Servo Presses",
    image: hy1,
    desc: "Design and manufacturing of hydraulic, pneumatic, and servo presses for precision forming, pressing, clamping, and automated industrial operations.",
    items: [],
   gallery: [
    {
      src: hy1,
      name: "100 Ton Hydraulic-02",
      desc: "Heavy-duty 100 ton hydraulic press designed for deep drawing, metal forming, and high-force assembly operations. Provides adjustable pressure, stroke length, and dwell time for accurate and repeatable performance."
    },
    {
      src: hy2,
      name: "20 Ton Hydraulic-01",
      desc: "Compact 20 ton hydraulic press suitable for light forming, punching, and assembly tasks. Engineered for smooth pressure application with precise control in low to medium force operations."
    },
    {
      src: hy3,
      name: "Hydraulic Press MC-04",
      desc: "Multi-column hydraulic press built for stable load distribution during precision forming and pressing applications. Rigid frame construction ensures alignment accuracy and consistent pressing results."
    },
    {
      src: hy5,
      name: "Servo Based MPLM-03",
      desc: "Servo-driven press system offering precise control over force, speed, and position throughout the stroke. Ideal for applications requiring programmable motion profiles and real-time process monitoring."
    },
  ],
  },

  // ── TYRE INDUSTRIES ──────────────────────────────────────────────────
  "tyre": {
    title: "Tyre Industries",
    image: ty1,
    desc: "Dedicated machinery and fabricated equipment for tyre manufacturing processes including dipping stations, rotation frames, work tanks, sliding doors, and pallets.",
    items: [],
 gallery: [
    {
      src: ty1,
      name: "GC Cather-1",
      desc: "Automated tyre component catching and positioning unit designed to receive, align, and transfer green tyre components safely between stations. Ensures precise handling and reduces manual intervention in high-cycle operations."
    },
    {
      src: ty2,
      name: "Bead_Set Ring",
      desc: "Precision-engineered bead set ring fixture used for accurate positioning and holding of bead rings during tyre building. Ensures concentric alignment and dimensional stability in bead assembly operations."
    },
    {
      src: ty3,
      name: "Belt Rewinding Machine",
      desc: "Motorized belt rewinding system for controlled rewinding of rubberized belts and fabrics. Maintains uniform tension and alignment to prevent material wrinkles and edge damage during processing."
    },
    {
      src: ty4,
      name: "Rubber Edge Gum Folding Unit",
      desc: "Specialized unit for folding rubber gum edges with consistent geometry during tyre component preparation. Ensures proper adhesion and uniform edge quality before assembly."
    },
    {
      src: ty5,
      name: "Rubber Edge Gum Folding Unit-2",
      desc: "Enhanced gum folding mechanism with adjustable guides and pressure control for handling different rubber sheet thicknesses. Improves repeatability and reduces material wastage."
    },
    {
      src: ty6,
      name: "Zipper Roller Unit",
      desc: "Zipper roller assembly designed to apply uniform pressure for bonding layered rubber components. Ensures air removal and consistent lamination quality across the sheet width."
    },
    {
      src: ty7,
      name: "Pneumatic Rewinding Machine",
      desc: "Pneumatically driven rewinding machine for smooth and controlled rolling of rubber sheets and belts. Provides adjustable tension control for precision material handling."
    },
    {
      src: ty8,
      name: "BT Segment Trolley",
      desc: "Heavy-duty segment trolley for safe handling and movement of bead and tread segments within tyre manufacturing areas. Ergonomic design ensures stability and operator safety."
    },
    {
      src: ty9,
      name: "Drawing Trolley",
      desc: "Custom-fabricated drawing trolley for transporting tyre building drums and components across workstations. Designed for balanced load distribution and easy maneuverability."
    },
    {
      src: ty10,
      name: "Former & Frame Work Handling Trolley",
      desc: "Robust handling trolley engineered for safe movement of formers and frames used in tyre building machines. Ensures secure support and prevents structural deformation during transfer."
    },
    {
      src: ty11,
      name: "NCH Area Cart",
      desc: "Industrial-grade cart designed for material transfer within the NCH area of tyre plants. Built for durability, smooth movement, and efficient intra-plant logistics."
    },
    {
      src: ty12,
      name: "PSR Inner Liner Carts",
      desc: "Dedicated carts for handling and transporting inner liner materials in PSR sections. Designed to prevent contamination and maintain material integrity during movement."
    },
  ],
  },

  // ── MATERIAL HANDLING EQUIPMENT ──────────────────────────────────────
  "material-handling": {
    title: "Material Handling Equipment",
    image: mhe1,
    desc: "Engineered material handling solutions such as conveyors, rollers, guide plates, gum folding units, and press rolls for smooth workflow across industrial setups.",
    items: [],
gallery: [
  {
    src: mhe1,
    name: "Gravity Roller Conveyor With Oil Dipping Station",
    desc: "Gravity roller conveyor integrated with an oil dipping station for smooth component transfer and controlled lubrication during movement across workstations."
  },
  {
    src: mhe2,
    name: "Belt Conveyor",
    desc: "Powered belt conveyor designed for continuous and stable transport of components and materials across production lines with minimal manual intervention."
  },
  {
    src: mhe3,
    name: "Roller Conveyor",
    desc: "Heavy-duty roller conveyor system for effortless pallet and component movement, ensuring reliable transfer between different processing stations."
  },
  {
    src: mhe4,
    name: "Modular Belt Conveyor",
    desc: "Flexible modular belt conveyor suitable for complex layouts, enabling smooth material flow in assembly and manufacturing environments."
  },
  {
    src: mhe5,
    name: "Scissor Lift",
    desc: "Hydraulic scissor lift platform for safe vertical lifting and positioning of heavy materials between different height levels in production areas."
  },
  {
    src: mhe6,
    name: "Scissor Lift – 2",
    desc: "Compact scissor lift unit designed for precise elevation control and ergonomic material handling in confined industrial spaces."
  },
  {
    src: mhe7,
    name: "Belt Reel Cart",
    desc: "Mobile cart engineered for safe handling and transportation of heavy belt reels and coiled materials within plant premises."
  },
  {
    src: mhe8,
    name: "BT Segment Trolley",
    desc: "Industrial trolley designed for carrying BT segments and heavy components with stability, ease of movement, and operator safety."
  },
  {
    src: mhe9,
    name: "Drawing Trolley",
    desc: "Special-purpose trolley for transporting drawing dies and tooling components securely across manufacturing and maintenance areas."
  },
  {
    src: mhe10,
    name: "Former & Frame Handling Trolley",
    desc: "Robust trolley system for safe movement and positioning of formers and frames during tyre and rubber product manufacturing processes."
  },
  {
    src: mhe11,
    name: "NCH Area Cart",
    desc: "Ergonomically designed cart for manual material handling within NCH areas, improving mobility and reducing operator effort."
  },
  {
    src: mhe12,
    name: "PSR Inner Liner Carts",
    desc: "Dedicated carts for safe storage and transfer of PSR inner liners, ensuring material protection and organised workflow."
  },
  {
    src: mh13,
    name: "Trolleys",
    desc: "Custom-built industrial trolleys for efficient intra-plant material movement, adaptable to various load types and shop-floor requirements."
  }
]
  },

  // ── PICK & PLACE ─────────────────────────────────────────────────────
  "pick-place": {
    title: "Pick and Place Units",
    image: "/pick_place/pickplace gantry.JPG",
    desc: "Gantry, vacuum and robotic pick & place systems with servo and pneumatic control for precise, high-speed material handling.",
    items: [
      "Gantry Pick & Place",
      "Vacuum Rubber Sheet Pick & Place",
      "Robotic Pick & Place with Sensors",
      "Oil Dipping Station Integration",
    ],
    gallery: [
      { src: "/pick_place/pickplace gantry.JPG", name: "Gantry Pick & Place Unit", desc: "Heavy-duty gantry-type pick & place unit with servo-driven X-Y-Z axes for precise component transfer across long travel distances. Designed for high-cycle automotive and tire industry applications with pneumatic gripper end-effectors." },
    ],
  },

  // ── WASHING MACHINE PARTS ────────────────────────────────────────────
  "washing-machine-parts": {
    title: "Industrial Washing Machine Parts",
    image: "/washing/washing_01.jpeg",
    desc: "Precision-engineered SS304/SS316 components for industrial washing systems with sub-1mm runout accuracy.",
    items: [
      "Rotation Frame & Auto Clamping Frame",
      "Sliding Doors (Manual & Pneumatic)",
      "Work Tank, Gantry Dipping Station",
      "Pallets, Fencing, Automatic Conveyor",
    ],
    gallery: [
      { src: "/washing/washing_01.jpeg", name: "Rotation Frame",               desc: "Heavy-duty rotation frame fabricated in SS304 with precision-balanced design achieving sub-1mm runout accuracy." },
      { src: "/washing/washing_02.jpeg", name: "Auto Clamping Rotation Frame", desc: "Pneumatically actuated auto-clamping rotation frame for hands-free basket loading during high-speed rotation." },
      { src: "/washing/washing_03.jpeg", name: "Sliding Door — Pneumatic",     desc: "Pneumatic sliding door for washing machine enclosures with soft-close damping and proximity sensing." },
      { src: "/washing/washing_04.jpeg", name: "Work Tank 500L",               desc: "500-litre SS316 work tank with reinforced welded construction, drain valve and level sensor ports." },
      { src: "/washing/washing_05.jpeg", name: "Gantry Dipping Station",       desc: "Motorised gantry with basket dipping station for controlled immersion of components into wash, rinse and passivation tanks." },
      { src: "/washing/washing_06.jpeg", name: "Oil Dipping Station",          desc: "Dedicated oil dipping station with controlled immersion depth, drip-return tray and oil level monitoring." },
      { src: "/washing/washing_07.jpeg", name: "Pallet for Baskets",           desc: "Custom-engineered SS304 pallets designed to hold and transport washing baskets accurately through conveyor-based lines." },
      { src: "/washing/washing_08.jpeg", name: "Sliding Door — Manual",        desc: "Manually operated sliding door with stainless steel frame and UHMW guide rails." },
      { src: "/washing/washing_09.jpeg", name: "Washing System Assembly",      desc: "Complete washing system assembly integrating rotation frame, work tank, gantry station and conveyor." },
    ],
  },
};
