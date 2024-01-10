import {
  createProjectListElement,
  getUserProjects,
} from "../controller/projectController";
import { reloadProjectSection, renderProjectSection } from "./projectSection";
import { renderTodaySection } from "./todaySection";
import { renderUpcomingSection } from "./upcomingSection";
import { renderCompletedSection } from "./completedSection";
import { renderAddProjectForm } from "./addProjectForm";

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

  // DISPLAY INBOX LISTENER
  inboxNavBtn.onclick = (e) => {
    renderClickedSection(e, sidebar);
  };

  // DISPLAY TODAY SECTION LISTENER
  const todayNavBtn = document.querySelector(".nav-list-item__today");
  todayNavBtn.onclick = (e) => {
    renderTodaySection();
    toggleSideBar(sidebar, "close");
  };

  // DISPLAY UPCOMING LISTENER
  const upcomingNavBtn = document.querySelector(".nav-list-item__upcoming");
  upcomingNavBtn.onclick = (e) => {
    renderUpcomingSection();
    toggleSideBar(sidebar, "close");
  };

  //DISPLAY COMPLETED SECTION LISTENER
  const completedNavBtn = document.querySelector(".nav-list-item__completed");
  completedNavBtn.onclick = (e) => {
    renderCompletedSection();
    toggleSideBar(sidebar, "close");
  };

  // DISPLAY PROJECT SECTIONS LISTENER
  let projectBtns = document.querySelectorAll(".project-list__item");
  console.log(projectBtns);
  projectBtns.forEach((projectBtn) => {
    projectBtn.onclick = (e) => {
      renderClickedSection(e, sidebar);
    };
  });

  // PROJECT LIST DROPDOWN

  // DISPLAY ADD PROJECT MODAL
  const addProjectNavBtn = document.querySelector(
    ".project-menu__btn-icon--add-project"
  );

  addProjectNavBtn.onclick = (e) => {
    renderAddProjectForm();
  };

  // CLOSE SIDEBAR LISTENERS
  closeSideBarBtn.onclick = (e) => {
    toggleSideBar(sidebar, "close");
  };
  /* Added a short timeout before attaching the click event listener to avoid immediate placement during the sidebar opening.
  Without this delay, the listener could inadvertently trigger the sidebar closure, as it's initially triggered by the same button click that opens the sidebar. */
  setTimeout(() => {
    document.addEventListener("click", hideSidebarOnOutsideClick);
  }, 0);
};

/*
  ----- HELPER FUNCTIONS -----
*/
export const toggleSideBar = (sidebar, state) => {
  if (state === "open") {
    sidebar.classList.add("active");
    return;
  }

  if (state === "close") {
    sidebar.classList.remove("active");
    // Event listener needs to be removed to allow sidebar to be opened again
    document.removeEventListener("click", hideSidebarOnOutsideClick);
    return;
  }
};

const renderClickedSection = (e, sidebar) => {
  let projectListBtn = e.currentTarget;
  let projectName = projectListBtn.children[1].textContent;
  reloadProjectSection(projectName);
  toggleSideBar(sidebar, "close");
};

export const hideSidebarOnOutsideClick = (e) => {
  const sidebar = document.querySelector(".sidebar");
  const isClickInsideSidebar = sidebar.contains(e.target);
  if (!isClickInsideSidebar) {
    toggleSideBar(sidebar, "close");
  }
};
