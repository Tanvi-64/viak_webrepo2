// ── SPM images
import spm01 from "@/assets/spm/spm1.png";
import spm02 from "@/assets/spm/spm2.png";
import spm03 from "@/assets/spm/spm3.png";
import spm04 from "@/assets/spm/spm4.jpeg";
import spm05 from "@/assets/spm/spm5.png";
import spm06 from "@/assets/spm/spm6.png";


// ── Hydraulics images
import hy_1 from "@/assets/hydraulics/hy_1.png";
import hy_2 from "@/assets/hydraulics/hy_2.png";
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
  {
    src: spm01,
    name: "Cow Turn Table",
    desc: "A uniquely engineered solution for abrasive wheel manufacturers, this servo-integrated machine delivers unmatched precision for wheels ranging from 720mm to 450mm in diameter. Using a finely machined rotary turntable, granule mixing and molding are completed with a single click."
  },
  {
    src: spm02,
    name: "S201",
    desc: "This fully automated hydraulic press machine (10 TON capacity) is designed for precision assembly and testing operations. It features a 6-station rotary system for inspection, proof loading, pressing, crimping, bolt fitting, and laser marking. Equipped with Siemens HMI & PLC along with LVDTs and load cells, the system ensures accurate, reliable, and efficient production."
  },
  {
    src: spm03,
    name: "Wheel Stacking Machine",
    desc: "The Wheel Stacking Machine is a semi-automated solution designed to improve efficiency, accuracy, and consistency in stacking grinding wheels. It minimizes operator dependency and manual effort by integrating advanced automation technologies for reliable and high-quality output."
  },
  {
    src: spm04,
    name: "Corrugated Tube Cutting Machine",
    desc: "A Corrugated Tube Cutting Machine is a specialized piece of equipment designed for the precise and efficient cutting of corrugated tubing, commonly used in wiring harnesses, cable management systems, and protective conduits"
  },
  {
    src: spm05,
    name: "Cured Hose Cutting Machine",
    desc: "Boost productivity in rubber hose manufacturing with smart automation. The Cured Hose Rubber Cutting Machine is designed to streamline post-curing operations, delivering precise cutting while reducing manual effort and improving overall efficiency."
  },
  {
    src: spm06,
    name: "ProofLoad Testing Machine",
    desc: "This fully automated 2 TON to 100 Ton hydraulic press/Bervo Based system is designed for precise and efficient component processing. With Siemens HMI & PLC and integrated sensors, it performs automated pick & place, pressing, marking, and sorting, ensuring consistent quality with minimal manual effort."
  },
],
  },

  // ── HYDRAULICS ───────────────────────────────────────────────────────
  "hydraulics": {
    title: "Hydraulics, Pneumatics & Servo Presses",
    image: hy_1,
    desc: "Design and manufacturing of hydraulic, pneumatic, and servo presses for precision forming, pressing, clamping, and automated industrial operations.",
    items: [],
   gallery: [
    {
      src: hy_1,
      name: "100 Ton Hydraulic",
      desc: "Heavy-duty 100 ton hydraulic press designed for deep drawing, metal forming, and high-force assembly operations. Provides adjustable pressure, stroke length, and dwell time for accurate and repeatable performance."
    },
    {
      src: hy_2,
      name: "20 Ton Hydraulic",
      desc: "Compact 20 ton hydraulic press suitable for light forming, punching, and assembly tasks. Engineered for smooth pressure application with precise control in low to medium force operations."
    },
    {
      src: hy3,
      name: "Hydraulic Press MC",
      desc: "Multi-column hydraulic press built for stable load distribution during precision forming and pressing applications. Rigid frame construction ensures alignment accuracy and consistent pressing results."
    },
    {
      src: hy5,
      name: "Servo Based MPLM",
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
      name: "GC Cather",
      desc: "Automated tyre component catching and positioning unit designed to receive, align, and transfer green tyre components safely between stations. Ensures precise handling and reduces manual intervention in high-cycle operations."
    },
    {
      src: ty2,
      name: "Bead Set Ring",
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
      name: "Rubber Edge Gum Folding Unit",
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
    name: "Scissor Lift",
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

};
