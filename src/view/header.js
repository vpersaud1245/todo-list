import {
  addNavListButtonEvents,
  addUserProjectsToSidebar,
  toggleSideBar,
} from "./sidebar";

export const addHeaderEventListeners = () => {
  let sidebar = document.querySelector(".sidebar");
  const toggleSideBarBtn = document.querySelector(".header__open-sidebar-btn");

  toggleSideBarBtn.onclick = (e) => {
    toggleSideBar(sidebar, "open");
    addUserProjectsToSidebar();
    addNavListButtonEvents();
  };
};
