import "./style.css";
import { createProject } from "./model/project";
import * as projectRepo from "./model/projectRepo";
import { createTask } from "./model/task";
import { renderProjectSection } from "./view/projectSection";
import { renderAddTaskForm } from "./view/addTaskForm";
import { addUserProjectsToSidebar } from "./view/sidebar";
import { getUserProjectNames } from "./controller/projectController";

// CREATE AND ADD INBOX TO PROJECT REPO
const inbox = createProject("Inbox");
projectRepo.addProjectToRepo(inbox);
projectRepo.addProjectToRepo(createProject("Tomorrow"));
projectRepo.addProjectToRepo(createProject("This Week"));
projectRepo.addProjectToRepo(createProject("Completed"));
projectRepo.addProjectToRepo(createProject("Chores", "Blue"));

//TEST DATA
let washCar = createTask("Wash Car", "", "2023-12-12", "Priority");
inbox.addTask(washCar);
inbox.addTask(
  createTask("Clean House", "Dust House", "2023-28-12", "Priority")
);

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

let sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".header__open-sidebar-btn");

toggle.onclick = (e) => {
  toggleSideBar(sidebar, "open");
  addUserProjectsToSidebar();
};

const closebar = document.querySelector(".sidebar__close-sidebar-btn");

closebar.onclick = (e) => {
  toggleSideBar(sidebar, "close");
};

/**
 * Add form to create task
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Add tomorrow and upcoming (This week) projects
 * Add completed tasks section
 * Add add task form validation (Submit button changes color to darker blue when valid) On larger screens make Cross out cursor appear when form is not valid
 * Add local storage. Default classes only load once aka if projects dont exist create them
 * Make select 2 box (optional)
 */

/**
 * Style nav bar
 * add nav header
 * close sidebar with btn and with click off to side
 */
