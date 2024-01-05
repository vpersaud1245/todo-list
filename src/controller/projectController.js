import * as projectRepo from "../model/projectRepo";
import { convertTaskToHTML } from "./taskController";

// RETURNS LIST OF TASKS CONVERTED TO HTML ELEMENTS
const getHTMLTaskElements = (projectName) => {
  let project = projectRepo.getProjectFromName(projectName);
  let projectTaskList = project.getTaskList();
  if (projectTaskList.length > 0) {
    let htmlTaskList = convertTaskListToHtml(projectTaskList);
    return htmlTaskList;
  }
};

const convertTaskListToHtml = (taskList) => {
  let htmlTaskList = [];

  taskList.forEach((task) => {
    let taskElement = convertTaskToHTML(task);
    htmlTaskList.push(taskElement);
  });

  return htmlTaskList;
};

const addTaskToProject = (task, projectName) => {
  let selectedProject = projectRepo.getProjectFromName(projectName);
  selectedProject.addTask(task);
};

/**
 * Returns an array of project names
 */
const getProjectNames = () => {
  let projects = projectRepo.getAllProjects();
  let projectNames = projects.map((project) => project.projectName);
  return projectNames;
};

const getAllProjects = () => {
  return projectRepo.getAllProjects();
};

const getUserProjects = () => {
  let projects = getAllProjects();
  const userProjects = [];
  for (let i = 0; i < projects.length; i++) {
    if (i > 3) {
      console.log(projects[i]);
      userProjects.push(projects[i]);
    }
  }
  return userProjects;
};

const isUserProject = (projectName) => {
  let isUserProject = false;
  let userProjects = getUserProjects();
  let userProjectNames = userProjects.map((project) => project.projectName);
  userProjectNames.forEach((userProjectName) => {
    console.log(`User poroject name: ${userProjectName}`);
    console.log(`project name: ${projectName}`);
    if (userProjectName === projectName) {
      isUserProject = true;
    }
  });
  return isUserProject;
};

const createProjectListElement = (project) => {
  let projectName = project.projectName;
  let projectColor = project.projectColor;

  const listItem = document.createElement("li");
  listItem.classList.add("project-list__item");

  const listIcon = document.createElement("span");
  listIcon.classList.add("project-list-item__icon");
  listIcon.textContent = "#";
  listIcon.style.color = projectColor;
  listItem.append(listIcon);

  const projectNameElement = document.createElement("span");
  projectNameElement.classList.add("project-list-item__project-name");
  projectNameElement.textContent = projectName;

  listItem.append(projectNameElement);

  return listItem;
};

const clearProjectTaskList = (projectName) => {
  let project = projectRepo.getProjectFromName(projectName);
  console.log(project);
  project.clearTaskList();
};

export {
  getHTMLTaskElements,
  getProjectNames,
  addTaskToProject,
  getAllProjects,
  getUserProjects,
  createProjectListElement,
  clearProjectTaskList,
  isUserProject,
};
