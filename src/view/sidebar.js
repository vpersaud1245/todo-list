import {
  createProjectListElement,
  getUserProjects,
} from "../controller/projectController";

export const addUserProjectsToSidebar = () => {
  let userProjects = getUserProjects();
  const sidebarProjectList = document.querySelector(".sidebar__list--project");
  sidebarProjectList.innerHTML = "";

  console.log(userProjects); //testing

  userProjects.forEach((project) => {
    let projectListElement = createProjectListElement(project);
    sidebarProjectList.append(projectListElement);
  });
};
