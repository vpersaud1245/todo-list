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
import { format, sub } from "date-fns";

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
  let todayFormatted = format(new Date(), "yyyy-MM-dd");
  let yesterdayFormatted = format(sub(new Date(), { days: 1 }), "yyyy-MM-dd");
  let twoDaysAgoFormatted = format(sub(new Date(), { days: 2 }), "yyyy-MM-dd");
  let fourDaysAgoFormatted = format(sub(new Date(), { days: 4 }), "yyyy-MM-dd");
  let washCar = new Task(
    "I hope you don't mind",
    "",
    todayFormatted,
    "Priority",
    "Inbox"
  );
  inbox.addTask(washCar);
  inbox.addTask(
    new Task(
      "I have added some tasks",
      "For you to use as examples",
      todayFormatted,
      "Priority 1",
      "Inbox"
    )
  );
  inbox.addTask(new Task("Enjoy!", "", todayFormatted, "Priority 2", "Inbox"));

  //COMPLETED SECTION TESTING
  setTimeout(() => {
    completed.addTask(
      new Task("Scrub", "", "", "Priority", "Completed", yesterdayFormatted)
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Wash", "", "", "Priority", "Completed", twoDaysAgoFormatted)
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Rub", "", "", "Priority", "Completed", twoDaysAgoFormatted)
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new Task("Soap", "", "", "Priority", "Completed", fourDaysAgoFormatted)
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
