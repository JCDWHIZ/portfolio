export interface Archive {
  createdAt: string;
  description: string;
  githubLink: string;
  technologies: string;
  title: string;
  updatedAt: string;
  _id: string;
}

export interface About {
  createdAt: string;
  description: string;
  githubLink: string;
  gmailLink: string;
  gravatarLink: string;
  header: string;
  image: string;
  linkedInLink: string;
  technologies: string;
  story: string;
  updatedAt: string;
  _id: string;
}

export interface Project {
  createdAt: string;
  description: string;
  githubLink: string;
  demoLink: string;
  image: string;
  technologies: string;
  title: string;
  updatedAt: string;
  _id: string;
}
