import React from "react";

function ProjectItem({ name, about, technologies }) {
  const items = technologies.map((el)=>{
    return <span key = {el} >{el}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {items}
      </div>
    </div>
  );
}

export default ProjectItem;
