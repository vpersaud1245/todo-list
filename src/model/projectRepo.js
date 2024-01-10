import { Project } from "./project";
let projects = [];

const addProjectToRepo = (projectToAdd) => {
  projects.push(projectToAdd);
};

const removeProjectFromRepo = (projectID) => {
  let projectIndex = getProjectIndexfromID(projectID);
  if (projectIndex > -1) {
    projects.splice(projectIndex, 1);
  }
};

const getProjectFromID = (projectID) => {
  let projectIndex = getProjectIndexfromID(projectID);
  return projects[projectIndex];
};

const getProjectIndexfromID = (projectID) => {
  return projects.map((project) => project.projectID).indexOf(projectID);
};

const getProjectIndexfromName = (projectName) => {
  return projects.map((project) => project.projectName).indexOf(projectName);
};

const getProjectFromName = (projectName) => {
  let projectIndex = getProjectIndexfromName(projectName);
  if (projectIndex > -1) {
    return projects[projectIndex];
  }
};

const getAllProjects = () => {
  return projects;
};

const updateLocalStorage = () => {
  const allProjects = projects;

  let projectsString = JSON.stringify(allProjects);
  console.log(`projects stringified: ${projectsString}`);

  localStorage.setItem("projects", projectsString);
};

const updateProjectRepoFromLocalStorage = () => {
  let storedProjects = localStorage.getItem("projects");
  const projectsArray = JSON.parse(storedProjects);
  for (let i = 0; i < projectsArray.length; i++) {
    let project = Project.createFromObject(projectsArray[i]);
    projects.push(project);
  }
};

export {
  addProjectToRepo,
  removeProjectFromRepo,
  getProjectFromName,
  getAllProjects,
  updateProjectRepoFromLocalStorage,
  updateLocalStorage,
  getProjectFromID,
};
