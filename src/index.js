import "./style.css";
import { createProject } from "./model/project";
import * as projectRepo from "./model/projectRepo";
import { createTask } from "./model/task";
import { renderProjectSection } from "./view/projectSection";
import { renderAddTaskForm } from "./view/addTaskForm";
import {
  addNavListButtonEvents,
  addUserProjectsToSidebar,
} from "./view/sidebar";
import { getUserProjectNames } from "./controller/projectController";
import { getAllTasks } from "./controller/taskController";

// CREATE AND ADD INBOX TO PROJECT REPO
const inbox = createProject("Inbox");
projectRepo.addProjectToRepo(inbox);
projectRepo.addProjectToRepo(createProject("Today"));
projectRepo.addProjectToRepo(createProject("Upcoming"));
projectRepo.addProjectToRepo(createProject("Completed"));
projectRepo.addProjectToRepo(createProject("Chores", "Blue"));

//TEST DATA
let washCar = createTask("Wash Car", "", "2023-12-13", "Priority");
inbox.addTask(washCar);
inbox.addTask(
  createTask("Clean House", "Dust House", "2023-12-28", "Priority")
);
inbox.addTask(createTask("Test", "", "2024-01-05", "Priority"));

renderProjectSection("Inbox");
// renderAddTaskForm();
console.log(projectRepo.getAllProjects());
// Add toggle to sidebar btns
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

// SIDEBAR FUNCTIONS
let sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".header__open-sidebar-btn");

toggle.onclick = (e) => {
  toggleSideBar(sidebar, "open");
  addUserProjectsToSidebar();
  addNavListButtonEvents();
};

console.log(getAllTasks());

/**
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Add tomorrow and upcoming (This week) projects
 * Add completed tasks section
 * Add add task form validation (Submit button changes color to darker blue when valid) On larger screens make Cross out cursor appear when form is not valid
 * Add local storage. Default classes only load once aka if projects dont exist create them
 * Make select 2 box (optional)
 * Add all hover effects
 * Make the add task form automatically choose dates when creating tasks on today and upcoming
 */

/**
 * Finish adding listeners to display pages when nav btn is clicked
 */
