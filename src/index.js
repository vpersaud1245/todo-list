import "./style.css";
import { createProject } from "./model/project";
import * as projectRepo from "./model/projectRepo";
import { createTask } from "./model/task";
import { renderProjectSection } from "./view/projectSection";
import { renderAddTaskForm } from "./view/addTaskForm";

// CREATE AND ADD INBOX TO PROJECT REPO
const inbox = createProject("Inbox");
projectRepo.addProjectToRepo(inbox);
projectRepo.addProjectToRepo(createProject("Chores"));

//TEST DATA
let washCar = createTask("Wash Car", undefined, "2023-12-12");
inbox.addTask(washCar);
inbox.addTask(createTask("Clean House", "Dust House", "2023-28-12"));

renderProjectSection("Inbox");
// renderAddTaskForm();

/**
 * Add form to create task
 * Make check btn color change with priority
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Add tomorrow and upcoming (This week) projects
 * Add completed tasks section
 * Add add task form validation (Submit button changes color to darker blue when valid) On larger screens make Cross out cursor appear when form is not valid
 * Add local storage. Default classes only load once aka if projects dont exist create them
 */

/**
 * Add add task form validation (Submit button changes color to darker blue when valid)
 * add submit and cancel button events
 * make form add task to project, inbox default
 * project selector should not load default utility projects (tomorrow/upcoming)
 */
