import "./style.css";
import { Project } from "./model/project";
import * as projectRepo from "./model/projectRepo";
import { Task } from "./model/task";
import { renderProjectSection } from "./view/projectSection";
import { renderAddTaskForm } from "./view/addTaskForm";
import {
  addNavListButtonEvents,
  addUserProjectsToSidebar,
} from "./view/sidebar";
import { getAllTasks } from "./controller/taskController";

// UPDATE PROJECTS IF LOCAL STORAGE IS NOT EMPTY
if (localStorage.getItem("projects") !== null) {
  projectRepo.updateProjectRepoFromLocalStorage();
} else {
  // CREATE AND ADD DEFAULT PROJECTS
  const inbox = new Project("Inbox", "");
  projectRepo.addProjectToRepo(inbox);
  projectRepo.addProjectToRepo(new Project("Today", ""));
  projectRepo.addProjectToRepo(new Project("Upcoming", ""));
  projectRepo.addProjectToRepo(new Project("Completed", ""));
  // ADD TEST DATA
  let washCar = new Task("Wash Car", "", "2023-12-13", "Priority", "Inbox");
  inbox.addTask(washCar);
  inbox.addTask(
    new Task("Clean House", "Dust House", "2023-12-28", "Priority", "Inbox")
  );
  inbox.addTask(new Task("Test", "", "2024-01-05", "Priority", "Inbox"));

  // UPDATE LOCAL STORAGE
  projectRepo.updateLocalStorage();
}

// projectRepo.addProjectToRepo(new Project("Chores", "Blue"));

console.log(projectRepo.getAllProjects());
renderProjectSection("Inbox");

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
 * Add add task form validation (Submit button changes color to darker blue when valid) On larger screens make Cross out cursor appear when form is not valid
 * Add local storage. Default classes only load once aka if projects dont exist create them
 * Make select 2 box (optional)
 * Add all hover effects
 * Make the add task form automatically choose dates when creating tasks on today and upcoming
 * Add way to update tasks
 * Add way to complete tasks
 * sort tasks by priority
 */

/**
 * Add completed task section
 * Finish adding listeners to display pages when nav btn is clicked
 */

/**
 * To complete a task the task must be removed from the html as well as from the project task list
 * The first step should be to remove it from the project repo task list. This will stop it from populating on the today section.
 * The next step should be to remove the html element from the current section as all other sections should be updated on the reload.
 */
