export interface ProductItem {
  title: string;
  image: string;
  desc: string;
  items: string[];
  gallery?: { src: string; name: string; desc?: string }[];
}

export const productData: Record<string, ProductItem> = {
  "jigs-fixtures": {
    title: "Jigs & Fixtures",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
    desc: "High precision fixtures for machining, inspection and assembly operations.",
    items: [
      "Bush Locating Fixture",
      "Clamp Assembly & Inspection Fixture",
      "Gear Cutting & Profile Checking Fixture",
      "Leak Testing, Welding, Assembly Fixtures",
    ],
  },
  "spm": {
    title: "Special Purpose Machines (SPM)",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=1200&h=600&fit=crop",
    desc: "Custom built hydraulic, welding and automation SPMs.",
    items: [
      "Rotary Welding Machine",
      "Leak Testing Machine",
      "Cured Hose Cutting & Buffing Machine",
      "Welding Manipulator, Paint Booth",
    ],
    gallery: [
      { src: "/spm/spm_01.jpg",  name: "100 Ton Hydraulic",                   desc: "Heavy-duty 100-ton hydraulic press machine designed for high-force pressing, forming and assembly operations in automotive and industrial manufacturing." },
      { src: "/spm/spm_02.jpeg", name: "20 Ton Hydraulic",                    desc: "Compact 20-ton hydraulic press for precision pressing, fitting and stamping tasks. Ideal for medium-load production lines requiring consistent force control." },
      { src: "/spm/spm_03.jpeg", name: "Cow Turn Table",                      desc: "Rotary turn table machine enabling continuous multi-station processing. Increases throughput by allowing simultaneous loading, machining and unloading." },
      { src: "/spm/spm_04.jpeg", name: "Curd Hose Cutting SPM",               desc: "Special purpose machine for accurate cutting of cured rubber hoses to precise lengths. Ensures clean cuts with minimal material waste in hose manufacturing." },
      { src: "/spm/spm_05.jpg",  name: "Cut-Off Wheel Turn Table",            desc: "Automated turn table integrated with cut-off wheel mechanism for high-speed, repeatable cutting of circular and tubular components." },
      { src: "/spm/spm_06.jpeg", name: "Cutting Wheel Pressing Auto Machine", desc: "Fully automated machine combining cutting wheel operation with pressing action. Designed for high-volume production with servo-controlled precision." },
      { src: "/spm/spm_07.jpeg", name: "Hydraulic Press Machine",             desc: "Versatile hydraulic press machine suitable for deep drawing, punching, blanking and assembly. Built for durability with programmable pressure control." },
      { src: "/spm/spm_08.jpg",  name: "Proofload Testing 1",                 desc: "Proofload testing machine for verifying structural integrity and load-bearing capacity of components. Ensures compliance with safety and quality standards." },
      { src: "/spm/spm_09.jpg",  name: "Proofload Testing 2",                 desc: "Advanced proofload testing setup with digital load monitoring for accurate force measurement and traceability in quality assurance processes." },
      { src: "/spm/spm_10.jpeg", name: "S201",                                desc: "S201 special purpose machine engineered for a specific client process requirement. Features custom tooling, pneumatic actuation and PLC-based control." },
      { src: "/spm/spm_11.jpeg", name: "SPM Unit 1",                          desc: "Custom-built SPM unit designed for automated part handling and processing. Integrates sensors and actuators for reliable, repeatable cycle performance." },
      { src: "/spm/spm_12.jpeg", name: "SPM Unit 2",                          desc: "Multi-function SPM unit combining material feeding, processing and ejection in a single automated cycle for improved production efficiency." },
      { src: "/spm/spm_13.png",  name: "Wheel Stacking Machine",              desc: "Automated wheel stacking machine for organised stacking and transfer of wheel components. Reduces manual handling and improves line flow in tire plants." },
      { src: "/spm/spm_14.png",  name: "Wire Guiding Machine",                desc: "Precision wire guiding machine ensuring accurate wire placement and tension control during winding or assembly operations in electrical and automotive applications." },
    ],
  },
  "pick-place": {
    title: "Pick and Place Units",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731f7f8b?w=1200&h=600&fit=crop",
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
  "washing-machine-parts": {
    title: "Industrial Washing Machine Parts",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900c0e6?w=1200&h=600&fit=crop",
    desc: "Precision-engineered SS304/SS316 components for industrial washing systems with sub-1mm runout accuracy.",
    items: [
      "Rotation Frame & Auto Clamping Frame",
      "Sliding Doors (Manual & Pneumatic)",
      "Work Tank, Gantry Dipping Station",
      "Pallets, Fencing, Automatic Conveyor",
    ],
    gallery: [
      { src: "/washing/washing_01.jpeg", name: "Rotation Frame",              desc: "Heavy-duty rotation frame fabricated in SS304 with precision-balanced design achieving sub-1mm runout accuracy. Supports continuous rotation of component baskets during washing cycles." },
      { src: "/washing/washing_02.jpeg", name: "Auto Clamping Rotation Frame",desc: "Pneumatically actuated auto-clamping rotation frame for hands-free basket loading. Ensures secure clamping during high-speed rotation in automated washing lines." },
      { src: "/washing/washing_03.jpeg", name: "Sliding Door — Pneumatic",    desc: "Pneumatic sliding door for washing machine enclosures with soft-close damping and proximity sensing. Provides reliable sealing and fast cycle times in automated systems." },
      { src: "/washing/washing_04.jpeg", name: "Work Tank 500L",              desc: "500-litre SS316 work tank with reinforced welded construction, drain valve and level sensor ports. Engineered for chemical resistance in aqueous and solvent-based washing processes." },
      { src: "/washing/washing_05.jpeg", name: "Gantry Dipping Station",      desc: "Motorised gantry with basket dipping station for controlled immersion of components into wash, rinse and passivation tanks. Programmable dip depth and dwell time via PLC." },
      { src: "/washing/washing_06.jpeg", name: "Oil Dipping Station",         desc: "Dedicated oil dipping station with controlled immersion depth, drip-return tray and oil level monitoring. Ensures uniform oil coating on components post-washing." },
      { src: "/washing/washing_07.jpeg", name: "Pallet for Baskets",          desc: "Custom-engineered SS304 pallets designed to hold and transport washing baskets accurately through conveyor-based washing lines. Modular design for easy changeover." },
      { src: "/washing/washing_08.jpeg", name: "Sliding Door — Manual",       desc: "Manually operated sliding door with stainless steel frame and UHMW guide rails. Provides easy access for loading/unloading while maintaining enclosure integrity." },
      { src: "/washing/washing_09.jpeg", name: "Washing System Assembly",     desc: "Complete washing system assembly integrating rotation frame, work tank, gantry station and conveyor. Designed for turnkey installation in automotive component cleaning lines." },
    ],
  },
  "tire-industry": {
    title: "Tire Industry Equipment",
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=1200&h=600&fit=crop",
    desc: "Tooling and automation for tire manufacturing.",
    items: [
      "Rubber Sheet Edge Gum Folding Unit",
      "Press Roll, Comb Roll & Guide Plate",
      "Chaffer Slitter, Carbon Trolley",
      "Wire Detection System, Conveyors",
    ],
  },
  "robotics-automation": {
    title: "Robotics & Automation Cells",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&h=600&fit=crop",
    desc: "Robotic welding, gluing and material handling cells.",
    items: [
      "Arc & Spot Welding Cells",
      "Robotic Lines for Frame, Muffler, Fuel Tank",
      "Sensor Based Material Handling",
    ],
  },
};
