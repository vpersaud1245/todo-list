const projects = [];

const addProjectToRepo = (projectToAdd) => {
  projects.push(projectToAdd);
};

const removeProjectFromRepo = (projectName) => {
  let projectIndex = getProjectIndexfromName(projectName);
  if (projectIndex > -1) {
    projects.splice(projectIndex, 1);
  }
};

const getProjectIndexfromName = (projectName) => {
  return projects.map((project) => project.projectName).indexOf(projectName);
};

const viewProjectRepo = () => {
  console.log(projects);
};

export { addProjectToRepo, removeProjectFromRepo, viewProjectRepo };
