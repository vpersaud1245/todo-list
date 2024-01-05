import {
  createProjectListElement,
  getUserProjects,
} from "../controller/projectController";
import { reloadProjectSection, renderProjectSection } from "./projectSection";

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

// ADD EVENT LISTENERS TO SIDEBAR
export const addNavListButtonEvents = () => {
  const sidebar = document.querySelector(".sidebar");
  const inboxNavBtn = document.querySelector(".nav-list-item__inbox");
  const closeSideBarBtn = document.querySelector(".sidebar__close-sidebar-btn");

  // LISTENER TO DISPLAY INBOX WHEN INBOX BTN IS CLICKED
  inboxNavBtn.onclick = (e) => {
    renderClickedSection(e, sidebar);
  };

  // DISPLAY TODAY SECTION LISTENER
  const todayNavBtn = document.querySelector("nav-list-item__today");
  // LISTENER TO DISPLAY PROJECT SECTIONS WHEN PROJECT IS CLICKED
  let projectBtns = document.querySelectorAll(".project-list__item");
  console.log(projectBtns);
  projectBtns.forEach((projectBtn) => {
    projectBtn.onclick = (e) => {
      renderClickedSection(e, sidebar);
    };
  });
  // LISTENER TO CLOSE SIDEBAR WHEN BTN IS CLICKED
  closeSideBarBtn.onclick = (e) => {
    toggleSideBar(sidebar, "close");
  };
};

const toggleSideBar = (sidebar, state) => {
  if (state === "open") {
    sidebar.classList.add("active");
    return;
  }

  if (state === "close") {
    sidebar.classList.remove("active");
    return;
  }
};

const renderClickedSection = (e, sidebar) => {
  let projectListBtn = e.currentTarget;
  let projectName = projectListBtn.children[1].textContent;
  reloadProjectSection(projectName);
  toggleSideBar(sidebar, "close");
};
