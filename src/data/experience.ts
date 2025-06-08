export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2025 - Aug. 2025",
    title: "Software Engineer Intern",
    company: "Datadog",
    description:
      "Worked on the Applied AI - Batch Engineering team, building a new backend service for deployment analysis of anomaly detection in Datadog’s Application Performance Monitoring product. Technologies included Python, Golang, and gRPC.",
    companyUrl: "https://datadoghq.com",
  },
  {
    date: "Jan. 2025 - May 2025",
    title: "Teaching Assistant",
    company: "University of Pennsylvania",
    description:
      "TAed CIS 5480, Penn's Operating Systems class. The course was primarily project-based, so office hours were heavily focused on debugging C code and guiding students through systems level implementations.",
    companyUrl: "https://www.seas.upenn.edu/~cis5480/25sp/",
  },
  {
    date: "May 2024 - Aug. 2024",
    title: "Software Engineer Intern",
    company: "Gusto",
    description:
      "Full stack developer on the Security - Identity team, building a new feature to enhance suspicious activity detection. Primary technologies were Ruby, GraphQL, and React.",
    companyUrl: "https://gusto.com/",
  },
  {
    date: "May 2023 - Aug. 2023",
    title: "Research Assistant",
    company: "University of Pennsylvania",
    description:
      "Studied Neural Radiance Fields under Prof. Pratik Chaudhari",
  },
  {
    date: "June 2022 - Aug. 2022",
    title: "Burger Flipper",
    company: "D & J Snack Bar and Grill",
    description:
      "Flipped burgers, made coffee, and sold snacks to kids and old people at local recreation center.",
  },
];
