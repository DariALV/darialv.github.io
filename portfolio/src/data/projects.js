// Cada proyecto: title, description, tech, media (ruta en public/), href (repo; vacío = sin link).
// `align` no va acá: el index lo alterna según la posición.
export const projects = [
  {
    title: "4-Core RISC-V Processor",
    description:
      "Group project that consists of the development of a 4-core processor, using the RISC-V architecture in Logisim Evolution. The pipeline consists of 5 modularized stages. The cores share a RAM, and they access it through an arbiter. My contributions focused on the redesign and modularization of the processor components, keeping a readable design to debug the circuit, and simplifying the integration of other cores, reusing the same processor component. I connected the CPU and the RAM. I implemented branches, jumps, and hazard mitigation through forwarding and stalls. I also programmed a compiler in Python that takes a small expression language and outputs RISC-V assembly code. I also made an assembler. The generated machine code runs properly in the processor. We tested the circuit with a Fibonacci program that stores the results in RAM.",
    tech: ["Logisim Evolution", "RISC-V", "Python"],
    href: "",
    media: "/assets/processor.png",
  },
  {
    title: "Overthrown",
    description:
      "Vampire Survivors-style game, programmed as a research artifact for a team study on camera feedback in video games. My contributions focused on the development of the artifact, the database, and exporting the data as CSV for later statistical analysis. The artifact's purpose in the study was to log player telemetry data, with different camera configurations. Configurations are assigned through Supabase, and the data is stored in the same database. Godot 4 was used as the game engine, and GDScript as the programming language. The telemetry data collected consisted of periodic snapshots every 100ms, covering over 30 variables, such as health, nearby enemies, position and experience.",
    tech: ["Godot 4", "GDScript", "Supabase"],
    href: "",
    media: "/assets/overthrown.mp4",
  },
];
