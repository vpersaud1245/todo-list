import "./style.css";
import { Project } from "./model/project";
import * as projectRepo from "./model/projectRepo";
import { Task } from "./model/task";
import { renderProjectSection } from "./view/projectSection";
import { renderAddTaskForm } from "./view/addTaskForm";
import {
  addNavListButtonEvents,
  addUserProjectsToSidebar,
  toggleSideBar,
} from "./view/sidebar";
import { getAllTasks } from "./controller/taskController";
import { addHeaderEventListeners } from "./view/header";

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

// Show All Projects
console.log(projectRepo.getAllProjects());

// RENDER STARTING PAGES
renderProjectSection("Inbox");
addHeaderEventListeners();

// TOGGLE SIDEBAR ON WINDOW RESIZE
let oldWindowWidth = window.innerWidth;
window.onresize = () => {
  let newWindowWidth = window.innerWidth;
  const sidebar = document.querySelector(".sidebar");
  if (
    newWindowWidth >= 768 &&
    newWindowWidth > oldWindowWidth &&
    oldWindowWidth < 768
  ) {
    toggleSideBar(sidebar, "open");
    oldWindowWidth = newWindowWidth;
    return;
  }
  if (
    newWindowWidth < 768 &&
    oldWindowWidth > newWindowWidth &&
    oldWindowWidth > 768
  ) {
    toggleSideBar(sidebar, "close");
    oldWindowWidth = newWindowWidth;
    return;
  }
};

const editTaskModal = document.querySelector(".edit-task-modal");

/**
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Make select 2 box (optional)
 * Add task hover effects
 * Make the add task form automatically choose dates when creating tasks on today and upcoming
 * Add way to update tasks
 */

/**
 * BASIC FEATURES
 * Add way to edit Tasks
 */
