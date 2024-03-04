import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';

import '../styles/ProjectGrid.css';

const ProjectGrid = () => {
	const projects = [
		{
			title: 'jobWrangler.io',
			description:
				'This project was designed to suit a very specific need, keeping track of job applications in a time where people have to apply to hundreds of jobs to land one. jobWrangler.io uses machine learning and artificial intelligence to classify and sort users incoming emails into threads. It also allows users to analyze their own data and make decisions based on it as well as provides automated follow up tasking to keep you on top of applications with loose ends.',
			link: 'https://jobwrangler.io/demo',
			imageSrc: 'assets/images/jobWrangler.PNG',
			techUsed: ['python', 'mongodb', 'javascript', 'react', 'nodejs'],
		},
		{
			title: 'Data Logging Extension',
			description:
				'The Data Logging Extension is a powerful tool designed to enhance the capabilities of another plugin. This extension seamlessly collects access data and efficiently pushes it to the Azure Monitor HTTP Data Collector API. The collected data is then transmitted to a Log Analytics Workspace, from there it is ingested into Azure Sentinel. This streamlined process ensures comprehensive monitoring and analysis, enhancing security insights and ensuring near realtime monitoring.',
			link: 'https://github.com/CarterClackson/wsal-data-collector',
			imageSrc: 'assets/images/wsal.png',
			techUsed: ['php', 'javascript'],
		},
		{
			title: 'Portfolio',
			description:
				'This project serves as my personal portfolio, showcasing a collection of my work, skills, and experiences. It provides an interactive and visually appealing platform to highlight various projects, technologies, and achievements. The source code for this portfolio is available on GitHub, accessible through the link below.',
			link: 'https://github.com/CarterClackson/portfolio',
			imageSrc: 'assets/images/portfolio.PNG',
			techUsed: ['mongodb', 'javascript', 'react', 'nodejs'],
		},
		{
			title: 'equityEyes',
			description:
				'This project is a dynamic stock management application that allows users to search, save, and analyze stocks within their own personalized accounts. This platform offers daily updates, personalized data analysis, and a user-friendly interface for informed investment decisions. The source code for this project is available on Github, accessible through the link below.',
			link: 'https://github.com/CarterClackson/equityEyes',
			imageSrc: 'assets/images/equityEyes-portfolio.png',
			techUsed: ['mongodb', 'javascript', 'react', 'nodejs'],
		},
		// Add more projects as needed
	];

	return (
		<React.Fragment>
			<h2 className='subheader'>Projects</h2>
			<div
				className='project-grid'
				style={projects.length <= 3 ? { paddingBottom: '4em' } : {}}
			>
				{projects.map((project, index) => (
					<Project
						key={index}
						{...project}
					/>
				))}
			</div>
			{projects.length > 3 && (
				<div id='more-projects'>
					<Link
						to='/projects'
						className='button'
					>
						View more
					</Link>
				</div>
			)}
		</React.Fragment>
	);
};

export default ProjectGrid;
