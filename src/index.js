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
  const inbox = new Project("Inbox", "", "1");
  projectRepo.addProjectToRepo(inbox);
  projectRepo.addProjectToRepo(new Project("Today", "", "2"));
  projectRepo.addProjectToRepo(new Project("Upcoming", "", "3"));
  let completed = new Project("Completed", "", "4");
  projectRepo.addProjectToRepo(completed);
  // ADD TEST DATA
  let washCar = new Task("Wash Car", "", "2023-12-13", "Priority", "Inbox");
  inbox.addTask(washCar);
  inbox.addTask(
    new Task("Clean House", "Dust House", "2023-12-28", "Priority", "Inbox")
  );
  inbox.addTask(new Task("Test", "", "2024-01-05", "Priority", "Inbox"));

  //COMPLETED SECTION TESTING
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-06")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-05")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-05")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-04")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-03")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-02")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-02")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2024-01-01")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2023-12-31")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2023-12-30")
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", "2023-10-11")
    );
  }, 10);

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

/**
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Add add task form validation (Submit button changes color to darker blue when valid) On larger screens make Cross out cursor appear when form is not valid
 * Add local storage. Default classes only load once aka if projects dont exist create them
 * Make select 2 box (optional)
 * Add all hover effects
 * Make the add task form automatically choose dates when creating tasks on today and upcoming
 * Add way to update tasks
 * sort tasks by priority
 */

/**
 * BASIC FEATURES
 * Add way to add projects
 * Add way to edit/delete projects on project section add 3 dots
 * Add way to edit Tasks
 */

/**
 * Add add project form
 * When project name is not empty change color of button
 * Add event listener to dropdown project list
 */
