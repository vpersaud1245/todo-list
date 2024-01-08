import {
  createAddTaskBtn,
  createProjectSection,
  createSectionTitle,
} from "./projectSection";
import { sub } from "date-fns";
import { createDaySectionTitle } from "./upcomingSection";
import {
  getProjectTasks,
  removeTaskFromProject,
} from "../controller/projectController";
import { compareTaskDate } from "../controller/taskController";
import { convertTaskToHTML } from "../controller/taskController";
import completedTaskImg from "../assets/completed-task-icon.svg";
import { updateLocalStorage } from "../model/projectRepo";

export const renderCompletedSection = () => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // CLEAR MAIN ELEMENTS TO RESET
  main.innerHTML = "";

  // CREATE SECTION ELEMENT
  const section = createProjectSection("Completed");

  // CREATE SECTION TITLE
  const sectionTitle = createSectionTitle("Completed");

  const DAYSPERWEEK = 7;
  let thisWeek = [];
  let day1 = new Date();
  thisWeek.push(day1);
  for (let i = 1; i < DAYSPERWEEK; i++) {
    let day = sub(day1, { days: i });
    thisWeek.push(day);
  }

  // CREATE ELEMENT WRAPPER FOR DAY SECTIONS
  const daySections = document.createElement("div");
  daySections.classList.add("section__day-sections--completed");

  // DISPLAY DEFAULT MESSAGE IF NO COMPLETED TASKS EXIST
  let completedTasks = getProjectTasks("Completed");
  if (completedTasks.length === 0) {
    const defaultMessage = document.createElement("h2");
    defaultMessage.classList.add("completed-section__empty-message");
    defaultMessage.textContent = "No completed tasks";
    const divider = document.createElement("hr");
    divider.classList.add("completed-task-section__default-message-divider");
    let addTaskBtn = createAddTaskBtn();
    section.append(sectionTitle, defaultMessage, divider, addTaskBtn);
    main.append(section);
    return;
  }

  // CREATE DAY SECTION FOR EACH DAY
  thisWeek.forEach((day) => {
    let daySection = createDaySection(day);
    if (daySection !== undefined) {
      daySections.append(daySection);
    }
  });

  //REMOVE TASKS COMPLETED MORE THAN 7 DAYS AGO
  removeOldCompletedTasks(day1);

  // APPEND HTML ELEMENTS
  section.append(sectionTitle, daySections);
  main.append(section);
};

const createDaySection = (day) => {
  // CREATE DAY SECTION
  let daySection = document.createElement("div");
  daySection.classList.add("section__day-section");

  // CREATE DAY SECTION TITLE AND APPEND TO SECTION
  let daySectionTitle = createDaySectionTitle(day);
  daySection.append(daySectionTitle);

  // CREATE AND APPEND TITLE DIVIDER
  const titleDivider = document.createElement("hr");
  titleDivider.classList.add("section-list__title-divider");
  daySection.append(titleDivider);

  // GET COMPLETED TASKS
  let completedTasks = getProjectTasks("Completed");
  let taskAdded = false;
  completedTasks.forEach((task) => {
    console.log(compareTaskDate(task.completionDate, day));
    if (compareTaskDate(task.completionDate, day) === 0) {
      // CREATE COMPLETED TASK ELEMENT
      let taskElement = createCompletedTaskElement(task);
      const taskDivider = document.createElement("hr");
      taskDivider.classList.add(
        "section-list__task-divider",
        "section-list_task-divider--completed"
      );
      daySection.append(taskElement, taskDivider);
      taskAdded = true;
    }
  });

  // Only return day section if tasks were added
  if (taskAdded === true) {
    return daySection;
  }
};

/**
 * Creates a completed task element
 * @param {*} task
 * @returns HTML element
 */
const createCompletedTaskElement = (task) => {
  // CREATE TASK ELEMENT
  const taskElement = document.createElement("li");
  taskElement.classList.add("section-list__completed-task");

  // CREATE TASK ICON
  const completedTaskIcon = document.createElement("img");
  completedTaskIcon.classList.add("completed-task__icon");
  completedTaskIcon.src = completedTaskImg;

  // CREATE TASK INFO WRAPPER
  const completedTaskInfo = document.createElement("div");
  completedTaskInfo.classList.add("completed-task__info");
  completedTaskInfo.classLi;

  // CREATE USER SPAN
  const completedTaskUser = document.createElement("span");
  completedTaskUser.classList.add("completed-task-info__user");
  completedTaskUser.textContent = "You ";

  // CREATE COMPLETED MESSAGE SPAN
  const completedTaskMessage = document.createElement("span");
  completedTaskMessage.classList.add("completed-task-info__message");
  completedTaskMessage.textContent = "completed a task: ";

  // CREATE TASK NAME SPAN AND ADD TASK NAME
  const completedTaskName = document.createElement("span");
  completedTaskName.classList.add("completed-task-info__task-name");
  let taskName = task.taskName;
  completedTaskName.textContent = taskName;

  // APPEND HTML ELEMENTS
  completedTaskInfo.append(
    completedTaskUser,
    completedTaskMessage,
    completedTaskName
  );

  taskElement.append(completedTaskIcon, completedTaskInfo);

  return taskElement;
};

/**
 * Removes tasks that have been completed more than a week ago from the completed project
 * task list
 * @param {Date} currentDay
 */
const removeOldCompletedTasks = (currentDay) => {
  const DAYSTOKEEP = 6;
  // GET ALL COMPLETED TASKS
  let completedTasks = getProjectTasks("Completed");
  let oldestDay = sub(currentDay, { days: DAYSTOKEEP });
  // REMOVE TASKS COMPLETED MORE THAN ONE WEEK AGO
  for (let i = 0; i < completedTasks.length; i++) {
    let task = completedTasks[i];
    if (compareTaskDate(task.completionDate, oldestDay) === -1) {
      removeTaskFromProject(task, "Completed");
      // Subtracts i by one because when a task is removed the indices shift by one
      i--;
    }
  }
  // UPDATE LOCAL STORAGE
  updateLocalStorage();
};
