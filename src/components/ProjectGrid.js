import React from 'react';
import Project from './Project';

import '../styles/ProjectGrid.css';

const ProjectGrid = () => {
  const projects = [
    {
      title: 'Data Logging Extension',
      description: 'Extension for the WSAL plugin to pull data into Azure Sentinel through the Microsoft Data Collector API.',
      link: 'https://github.com/CarterClackson/wsal-data-collector',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      link: 'https://example.com/project2',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 2.',
      link: 'https://example.com/project2',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    },
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      link: 'https://example.com/project1',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      link: 'https://example.com/project2',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 2.',
      link: 'https://example.com/project2',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    }
    // Add more projects as needed
  ];

  return (
    <React.Fragment>
    <h2 className="subheader">Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
    </React.Fragment>
  );
};

export default ProjectGrid;