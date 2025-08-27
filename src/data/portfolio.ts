export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "PennCloud - Distributed Storage and Webmail",
    description:
      "PennCloud is a fault resilient distributed and multithreaded storage system with frontend services built on top of this storage. I worked primarily on the backend storage system. The number of replicas and their addresses as well as coordinator must be provided by a config file. The system utilizes dynamic tablet partitioning (alphabetical range based tablets), LRU-based memory eviciton of tablets, and inter-server communication via TCP sockets. The system is fault tolerant through intermittent checkpoint and logging, as well as a slave-master replication architecture. A coordinator node redirects frontend servers to available backend nodes via Round Robin, and continuously receives heartbeat pulses for liveliness. Recovery protocol is also implemented.",
    technologies: ["C++", "Makefile", "Sockets"],
    projectUrl: "https://drive.google.com/file/d/1hGlp7sncdqZJ_q0_NwtNLmnIvAfpjMTZ/view?usp=drive_link",
    imageUrl:
      "/images/penncloud-thumbnail.png",
    codeUrl: "https://drive.google.com/file/d/1F5Msgrd41HxqwwncM57T8Hr4dLFWTpWA/view?usp=sharing",
  },
  {
    title: "VEDETTE - LiDAR Drone",
    description:
      "Low cost lidar drone for indoor mapping. Designed for search and rescue operations and navigating adversarial/ambiguous environments. LiDAR packet capture data is integrated with SLAM algorithms for real time mapping. Won 'Best Overall Project' among the CIS Senior Design 2025 Competition.",
    technologies: ["Python", "LidarView", "LiDAR", "Raspberry Pi", "React"],
    projectUrl: "https://drive.google.com/drive/folders/1FRpioycQS8urTq08D_Azs2rkbub-F4CM?usp=sharing",
    imageUrl:
      "/images/vedette_thumbnail.png",
  },
  {
    title: "Distributed Chat System",
    description:
      "A chat client and replicated chat server which multicasts chat messages to replicas. Servers support multiple group communication protocols including uUnordered, FIFO, and Total Ordered multicast.",
    technologies: ["C++", "Makefile", "UDP Sockets"],
    projectUrl: "https://drive.google.com/file/d/1jso5CgimrKn6utgjvfuQM2yWI6PtTjM2/view?usp=sharing",
    imageUrl:
      "/images/distributed-chat-thumbnail.png",
    codeUrl: "https://drive.google.com/file/d/1jso5CgimrKn6utgjvfuQM2yWI6PtTjM2/view?usp=sharing",
  },
  {
    title: "Multithreaded Email (SMTP & POP3) Servers",
    description:
      "My implementation of an SMTP server, which is used to send emails, and a POP3 server, which is used to retrieve emails.",
    technologies: ["C++", "Makefile", "TCP Sockets"],
    projectUrl: "https://drive.google.com/file/d/1czF27f8nRwS4JBm-vrRalA-muuRS01oZ/view?usp=sharing",
    imageUrl:
      "/images/email-servers-thumbnail.jpg",
    codeUrl: "https://drive.google.com/file/d/1czF27f8nRwS4JBm-vrRalA-muuRS01oZ/view?usp=sharing",
  },
  {
    title: "Mini Minecraft",
    description:
      "Minecraft replica with core functionalities such as exploration, inventory/crafting, and world generation. I worked on player/camera physics and movement, multithreaded terrain expansion, and NPCs",
    technologies: ["Qt", "C++", "glsl"],
    projectUrl: "https://www.youtube.com/watch?v=GsikJ2Nzz0I",
    imageUrl:
      "/images/mini-minecraft-thumbnail.png",
    codeUrl: "https://drive.google.com/file/d/1F5Msgrd41HxqwwncM57T8Hr4dLFWTpWA/view?usp=sharing",
  },
  {
    title: "Fork & Finder",
    description:
      "A full stack web application that transforms a Yelp Open Dataset into a smooth, intuitive, and analytics-driven restaurant search experiences.",
    technologies: ["Postgres", "Material-UI", "React", "SQL", "JavaScript", "Python"],
    projectUrl: "https://drive.google.com/file/d/1__OBkd_U6RH658ucb3kkcjF-zPcJZCbI/view?usp=sharing",
    imageUrl:
      "/images/yelp's-picks-thumbnail.png",
    codeUrl: "https://drive.google.com/file/d/1__OBkd_U6RH658ucb3kkcjF-zPcJZCbI/view?usp=sharing",
  },
  {
    title: "piplog",
    description:
      "A lightweight version control CLI for your Python packages built at UofTHacks 25.",
    technologies: ["Python", "React"],
    projectUrl: "https://www.piplog.wiki",
    imageUrl:
      "/images/piplog-thumbnail.png",
    codeUrl: "https://github.com/Alicia-Sun/piplog",
  },
  {
    title: "PennOS",
    description:
      "PennOS is a UNIX-like OS simulator including a priority scheduler, FAT-based file system, and user shell builtins. I worked primarily on the FAT file system and builtins. More detailed description can be found in the ./doc/ subdirectory",
    technologies: ["C", "Makefile"],
    projectUrl: "https://drive.google.com/file/d/1pIhF6rteH9ewMXML5x2mwdItTOb6OEIf/view?usp=sharing",
    imageUrl:
      "/images/hexdump-thumbnail.png",
    codeUrl: "https://drive.google.com/file/d/1pIhF6rteH9ewMXML5x2mwdItTOb6OEIf/view?usp=sharing",
  },
  {
    title: "Moggerstram",
    description:
      "An Instagram spinoff utilizing a diverse variety of modern technologies. Features include login/authentication, profile pages, dynamic feeds, federated post sharing, adsorption based recommendation system, facial recognition (selfie embeddings), profile management, friends, socketted chat rooms, and NLP search.",
    technologies: ["JavaScript", "Java", "React", "Node", "SQL", "EC2", "RDS", "S3", "ChromaDB", "OpenAI", "Kafka", "Socket IO", "Spark"],
    projectUrl: "https://github.com/upenn-nets-2120/project-moggers",
    imageUrl:
      "/images/na-thumbnail.png",
    codeUrl: "https://github.com/upenn-nets-2120/project-moggers",
  },
  {
    title: "skilltree",
    description:
      "Generates personalized learning roadmap w/ OpenAI and Exa's AI powered search. Built by a team of 3 during PennApps 2023 Hackathon.",
    technologies: ["Python", "Exa AI", "OpenAI", "React"],
    projectUrl: "https://skilltree.one/",
    imageUrl:
      "/images/skilltree-thumbnail.png",
    codeUrl: "https://github.com/Alicia-Sun/skilltree",
  },
];
