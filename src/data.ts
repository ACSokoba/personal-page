import { Project } from "./components/ProjectCard/ProjectCardModel";

export const projects: Project[] = [
  {
    title: "Lekza vtc",
    description: `Lekza is a project I did for a client in the personal VTC sector.
        It's a simple landing page that promotes the VTC services of the client and show his contacts.`,
    technologies: [
      { name: "Angular", color: "blue" },
      { name: "HTML", color: "red" },
      { name: "CSS", color: "red" },
      { name: "Typescript", color: "purple" },
      { name: "Netlify", color: "green" },
    ],
    tasks: [
      "Designed and developed a responsive landing page",
      "Implemented contact form with validation",
      "Set up DNS configuration and domain management",
      "Deployed website to Netlify hosting",
      "Created CI/CD pipeline for automatic deployment",
    ],
    imageUrl: "assets/images/lekza_website_peek.png",
    websiteUrl: "https://vtc.lekza-transexpress.net/",
  },
  {
    title: "Automachines CI",
    description:
      "Implemented and secured a middleware server for mobile payment for the company coffee machines. \n When customers pay with their phone, the payment is done through the middle server.  It also logs and gives insights about the transactions of the machines, each month sending a report to the client.",
    technologies: [
      { name: "NodeJS", color: "purple" },
      { name: "NestJS", color: "purple" },
      { name: "Typescript", color: "purple" },
      { name: "Hosting VPS", color: "green" },
      { name: "Docker", color: "blue" },
      { name: "Github Actions", color: "blue" },
      { name: "Swagger", color: "green" },
    ],
    tasks: [
      "Implemented code in TypeScript and Node.js and NestJS framework  ",
      "Set up the VPS, secured it with a firewall, encryption, and an Nginx reverse proxy  ",
      "Containerized the app with Docker  ",
      "Set up a CI/CD pipeline with GitHub Actions  ",
      "Documented code with Swagger",
    ],
    imageUrl: "assets/images/automachines_CI_peek.png",
    websiteUrl: "https://www.linkedin.com/company/automachinesci/",
  },
  {
    title: "Clair de lune",
    description:
      "Website for the school clair de lune. Promotes the school and its services. used Angular, hosted the build on AWS S3 Buckets, CI updates the files on the bucket.",
    technologies: [
      { name: "Angular", color: "blue" },
      { name: "AWS S3", color: "green" },
      { name: "Github Actions", color: "blue" },
    ],
    tasks: [
      "Designed responsive school website using Angular",
      "Implemented content management system for easy updates",
      "Set up AWS S3 bucket for hosting",
      "Configured CloudFront for content distribution",
      "Created CI/CD pipeline with GitHub Actions for automatic deployment",
    ],
    imageUrl: "assets/images/clair_de_lune_peek.png",
    websiteUrl: "https://clairdeluneci.com/",
  },
];

export interface Talk {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export const talks: Talk[] = [
  {
    title: "MMTT Devoteam Angular",
    description:
      "Presenting Angular. The philosophy of the technology, language syntax, when to use angular etc.",
    imageUrl: "assets/images/talk_placeholder.png",
    url: "https://www.linkedin.com/posts/aboubakar-christian-sokoba-304418146_quel-%C3%A9tait-ton-dernier-d%C3%A9fi-moi-c%C3%A9tait-activity-7057347206986493952-Hg4Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACNNGLQBoXUlGhH5PoWoOGsCscRfypStDx0",
  },
];
