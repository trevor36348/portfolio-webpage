'use client';
import { useState, useMemo } from 'react';
import { ProjectCardData } from '@/src/types/ProjectType';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

type ProjectCardDataProps = {
    carddata: ProjectCardData[];
};

export default function ProjectsClient({ carddata }: ProjectCardDataProps) {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animationTrigger, setAnimationTrigger] = useState(0);

    /* 
        For specifically /projects, changing animationTrigger ensures that all cards on the page refresh 
        upon a new filter selection allowing the fade in animation to play for all cards, not just newly filtered cards
    */
    
    const filteredProjects = useMemo(() => {
        setAnimationTrigger((prev) => prev + 1);
        if (activeFilter === 'All') return carddata;
        return carddata.filter((p) => p.technologies.includes(activeFilter));
    }, [activeFilter, carddata]);

    return (
        <>
            <ProjectFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <ProjectCard carddata={filteredProjects} animationTrigger={animationTrigger} />
        </>
    );
}
