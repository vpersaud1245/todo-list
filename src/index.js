import "./style.css";
import { createProject } from "./model/project";
import * as projectRepo from "./model/projectRepo";
import { createTask } from "./model/task";
import { renderProjectSection } from "./view/projectSection";

// CREATE AND ADD INBOX TO PROJECT REPO
const inbox = createProject("Inbox");
projectRepo.addProjectToRepo(inbox);

//TEST DATA
// let washCar = createTask("Wash Car", undefined, "2023-12-12");
// inbox.addTask(washCar);
// inbox.addTask(createTask("Clean House", "Dust House", "2023-28-12"));

renderProjectSection("Inbox");

/**
 * Add form to create task
 * Make check btn color change with priority
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Add tomorrow and upcoming (This week) projects
 * Add completed section
 */
