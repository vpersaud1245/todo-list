import { Project } from "./project";
let projects = [];

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
  console.log(`preprocessed project array from storage: ${storedProjects}`);
  for (let i = 0; i < projectsArray.length; i++) {
    let project = Project.createFromObject(projectsArray[i]);
    projects.push(project);
  }
  console.log`updated projects from local storage ${projects}`;
};

export {
  addProjectToRepo,
  removeProjectFromRepo,
  getProjectFromName,
  getAllProjects,
  updateProjectRepoFromLocalStorage,
  updateLocalStorage,
};
