import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const list = projects.map((el)=>{
    return <ProjectItem key={el.id} name = {el.name} technologies = {el.technologies} />
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{list}</div>
    </div>
  );
}

export default ProjectList;
