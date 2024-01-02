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

/**
 * Returns an array of project names
 */
const getProjectNames = () => {
  let projects = projectRepo.getAllProjects();
  let projectNames = projects.map((project) => project.projectName);
  return projectNames;
};

export { getHTMLTaskElements, getProjectNames };
