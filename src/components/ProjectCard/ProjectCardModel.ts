export type Project = {
    title: string;
    description: string;
    technologies: Technology[];
    imageUrl: string;
    websiteUrl?: string;
}
export type JobId = 'sfr' | 'carrefour' | 'orange';
export type TechnologyColor = string;

export interface Technology {
    name: string;
    color: TechnologyColor;
}

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
    imageUrl: string;
    websiteUrl?: string;
}