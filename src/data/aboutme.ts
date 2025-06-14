export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Alicia Sun",
  title: "Student",
  institution: "University of Pennsylvania",
  // Note that links work in the description
  description:
    `Hi and welcome to my page :) <br />
    I'm currently a <strong>final-year</strong> 
    BSE and MSE student studying CS at <strong>UPenn</strong>.<br /><br />

    I'm currently interning at <strong>Datadog</strong> on the Applied AI - 
    Batch Engineering team where I am developing APIs for anomaly detection. Previously, 
    I've interned as a Software Engineer intern at <strong>Gusto</strong>, and 
    have also TAed CIS 5480, Penn's <strong>Operating Systems</strong> course. At the 
    moment, I'm interested in large scale distributed systems and low level programming.  <br /><br />

    Some fun facts about me: I have both a Mini Golden Doodle and an American Shorthair, 
    I love making matcha and have tried a variety of blends, I boulder and play tennis, and
    my favorite pieces of media are The Handmaiden, The Poppy War trilogy, Frieren, One Piece, 
    Rick and Morty, Arcane, and The Shining.<br /><br />
    
    This summer, I'm trying to become more proficient in C++ and I'm following "Discovering Modern C++: 
    An Intensive Course for Scientists, Engineers, and Programmers". I've also joined a systems reading group 
    (<a href="https://notes.ekzhang.com/events/nysrg" target="_blank" rel="noopener noreferrer">NYSRG</a>).`,
  email: "aliciasun01234@gmail.com",
  imageUrl:
    "/images/me-lulu-pfp.jpeg",
  githubUsername: "Alicia-Sun",
  linkedinUsername: "alicia-sun-a1118a1b3",
  cvUrl: "AliciaSunResume.pdf",
  institutionUrl: "https://www.upenn.edu",
  // altName: "",
  secretDescription: "I'm Diamond in League and TFT :)",
};
