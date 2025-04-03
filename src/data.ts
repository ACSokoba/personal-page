import { Project } from "./components/ProjectCard/ProjectCardModel";

export const projects: Project[] = [
    {
        title: "Lekza vtc",
        description: `Lekza is a project I did for a client in the personal VTC sector.
        It's a simple landing page that promotes the VTC services of the client and show his contacts.
        The website is built with Angular and hosted on netlify, setup a domain name for the client.

        `,
        technologies: [
            { name: "Angular", color: "blue" },
            { name: "HTML", color: "red" },
            { name: "CSS", color: "red" },
            { name: "Typescript", color: "purple" },
            { name: "Netlify", color: "green" }
        ],
        imageUrl: "src/assets/images/lekza_website_peek.png",
        websiteUrl: "https://vtc.lekza-transexpress.net/"
    },
    {
        title: "Automachines CI",
        description: `Had to implement a middle server for mobile payment for the company coffee machines.
        When customers pay with their phone, the payment is done through the middle server.
        It also logs and give insights about the transactions of the machines, each month sending a report to the client.
        - Implemented code in typescript and NodeJS
        - Setup the VPS, secured it with a firewall, encryption and a nginx reverse proxy
        - Containerized the app with docker
        - Setup a CI pipeline with Github Actions
        - Documented code with Swagger
        `,
        technologies: [
            { name: "NodeJS", color: "purple" },
            { name: "Typescript", color: "purple" },
            { name: "Hosting VPS", color: "green" },
            { name: "Docker", color: "blue" },
            { name: "Github Actions", color: "blue" },
            { name: "Swagger", color: "green" }
        ],
        imageUrl: "src/assets/images/automachines_CI_peek.png"
    },
    {
        title: "Clair de lune",
        description: "Website for the school clair de lune. Promotes the school and its services. used Angular, hosted the build on AWS S3 Buckets, CI updates the files on the bucket.",
        technologies: [
            { name: "Angular", color: "blue" },
            { name: "AWS S3", color: "green" },
            { name: "Github Actions", color: "blue" }
        ],
        imageUrl: "src/assets/images/clair_de_lune_peek.png",
        websiteUrl: "https://clairdeluneci.com/"
    },

];