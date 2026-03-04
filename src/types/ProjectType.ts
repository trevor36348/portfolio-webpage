export interface ProjectCardData {
    _id: string;
    slug: string;
    image: string;
    title: string;
    introduction: string;
    technologies: string[];
    projectURL: string;
    isCompleted: boolean;
    order: Number;
}
