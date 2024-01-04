import { getUserProjects } from "../controller/projectController";
export const addUserProjectsToSidebar = () => {
  let userProjects = getUserProjects();
  const sidebarProjectList = document.querySelector(".sidebar__list--project");
  sidebarProjectList.innerHTML = "";

  console.log(userProjects); //testing

  userProjects.forEach((project) => {
    let projectListElement = createListItem(project);
    sidebarProjectList.append(projectListElement);
  });
};

const createListItem = (project) => {
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
