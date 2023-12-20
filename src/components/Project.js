import React, { useState } from 'react';


const Project = ({ title, description, link, imageSrc, techUsed }) => {

  const [expanded, setExpanded] = useState(false);
  const characterLimit = 200;

  const toggleDescription = () => {
    setExpanded(!expanded);
  }

  const renderDescription = () => {
    if (description.length <= characterLimit || expanded) {
      return (
        <>
        {description}
        {expanded && description.length > characterLimit && (
          <span onClick={toggleDescription} className="show-less"> show less</span>
        )}
        </>
      );
    } else {
      const truncatedText = description.slice(0, characterLimit);
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');
      return (
        <>
          {`${truncatedText.slice(0, lastSpaceIndex)}`}
          <span onClick={toggleDescription}> ...</span>
        </>
      );
    }
  }


  const techIcons = {
    php: <i className="fab fa-php"></i>,
    javascript: <i className="fab fa-js"></i>,
    react: <i className="fab fa-react"></i>,
    nodejs: <i className="fab fa-node"></i>,
    mongodb: <span style={{ fontSize: '12px'}}>mongoDB</span>
  }

  return (
    <div className="project">
      <div>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{renderDescription()}</p>
        {techUsed && techUsed.length > 0 && ( //If techUsed is not null or empty array
          <div>
            <strong>Technologies used:</strong>
            <ul className="tech-used">
              {techUsed.map((tech, index) => ( //map through array and compare to techIcons map for output of icons.
                <li key={index}>
                  {techIcons[tech] ? (
                    <span>
                      {techIcons[tech]}
                    </span>
                  ) : (
                    tech
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <a href={link} className="button" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;