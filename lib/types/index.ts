export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    email: string;
  };
  nav: {
    title: string;
    href: string;
  }[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags: string[];
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
};
