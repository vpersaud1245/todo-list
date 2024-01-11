import { compareAsc, format } from "date-fns";
import calendarIcon from "../assets/calendar-icon.svg";
import * as projectRepo from "../model/projectRepo";
import {
  addTaskToProject,
  clearProjectTaskList,
  removeTaskFromProject,
} from "./projectController";
import { renderEditTaskForm } from "../view/editTask";

// CONVERT TASK OBJECT TO HTML ELEMENT
export const convertTaskToHTML = (task) => {
  // CREATE ELEMENTS
  const taskElement = document.createElement("li");
  const toggleCompleteBtn = document.createElement("button");
  const taskInfoElement = document.createElement("div");

  // ADD TASK ID TO ELEMENT
  taskElement.id = task.taskID;

  // ADD ELEMENT CLASSES
  taskElement.classList.add("section-list__task");
  toggleCompleteBtn.classList.add("task__toggle-task-complete-btn");
  taskInfoElement.classList.add("task__info");

  // CREATE & APPEND TASK INFO ELEMENTS

  // TASK NAME ELEMENT
  if (task.taskName !== undefined) {
    const taskNameElement = document.createElement("p");
    taskNameElement.classList.add("task__name");
    taskNameElement.textContent = task.taskName;
    taskInfoElement.append(taskNameElement);
  }

  // TASK DESCRIPTION ELEMENT
  if (task.taskDescription !== "") {
    const taskDescriptionElement = document.createElement("p");
    taskDescriptionElement.classList.add("task__description");
    taskDescriptionElement.textContent = task.taskDescription;
    taskInfoElement.append(taskDescriptionElement);
  }

  // TASK DUE DATE ELEMENT
  if (task.taskDueDate !== "") {
    const taskDueDateElement = document.createElement("div");
    taskDueDateElement.classList.add("task__due-date");

    // Due date icon
    const dueDateIcon = document.createElement("img");
    dueDateIcon.classList.add("due-date__icon");
    dueDateIcon.src = calendarIcon;
    dueDateIcon.alt = "calendar-icon";

    // Due date text
    const dueDateText = document.createElement("span");
    dueDateText.classList.add("due-date__text");
    dueDateText.textContent = task.taskDueDate;
    taskDueDateElement.append(dueDateIcon, dueDateText);
    taskInfoElement.append(taskDueDateElement);
  }

  // TASK PRIORITY
  if (task.taskPriority !== "Priority") {
    setToggleCompelteBtnPriorityStyle(task.taskPriority, toggleCompleteBtn);
  }

  // APPEND TOGGLE COMPLETE BTN HANDLER
  toggleCompleteBtn.onclick = (e) => {
    handleToggleCompleteBtnClick(e);
  };

  // APPEND EVENT LISTENER TO EDIT TASKS
  taskElement.onclick = (e) => {
    renderEditTaskForm(e);
  };

  // APPEND ELEMENTS
  taskElement.append(toggleCompleteBtn, taskInfoElement);
  return taskElement;
};

/*
  ----- PRIORITY CLR SELECTOR HELPER FUNCTIONS -----
*/
/**
 * Sets task complete button style based on priority
 * @param priority
 * @param toggleCompleteBtn
 */
const setToggleCompelteBtnPriorityStyle = (priority, toggleCompleteBtn) => {
  if (priority === "Priority 1") {
    setToggleCompleteBtnColor(
      "#f6dad8",
      "var(--complete-task-btn-priority-1-clr)",
      toggleCompleteBtn
    );
    return;
  }

  if (priority === "Priority 2") {
    setToggleCompleteBtnColor(
      "#fbe7ce",
      "var(--complete-task-btn-priority-2-clr)",
      toggleCompleteBtn
    );
    return;
  }

  if (priority === "Priority 3") {
    setToggleCompleteBtnColor(
      "#d3e2f9",
      "var(--complete-task-btn-priority-3-clr)",
      toggleCompleteBtn
    );
    return;
  }
};

/**
 * Sets the color of the task complete button
 * @param backgroundColor
 * @param borderColor
 * @param toggleCompleteBtn
 */
const setToggleCompleteBtnColor = (
  backgroundColor,
  borderColor,
  toggleCompleteBtn
) => {
  toggleCompleteBtn.style.border = "2px solid " + borderColor;
  toggleCompleteBtn.style.backgroundColor = backgroundColor;
};

// ----- END PRIORITY CLR SELECTOR HELPER FUNCTIONS ----- //

/*
  ----- REMOVE TASK BTN EVENT HANDLERS -----
*/

/**
 * Removes task from current project, updates task completion date and
 * adds project to completed projects
 */
const handleToggleCompleteBtnClick = (e) => {
  // GET TASK ELEMENT AND DIVIDER TO BE REMOVED
  let taskElement = e.currentTarget.parentElement;
  let taskDivider = taskElement.nextSibling;

  // GET TASK OBJECT
  let taskID = taskElement.id;
  let task = getTaskByID(taskID);

  // REMOVE TASK FROM ASSIGNED PROJECT
  let assignedProject = task.assignedProject;
  removeTaskFromProject(task, assignedProject);

  // SET TASK COMPLETION DATE
  let completionDate = new Date();
  let completionDateFormatted = format(completionDate, "yyyy-MM-dd");
  console.log(completionDateFormatted);
  task.setCompletionDate(completionDateFormatted);

  // ADD TASK TO COMPLETED PROJECTS
  task.setAssignedProject("Completed");
  console.log(`completed task ${JSON.stringify(task)}`);
  addTaskToProject(task, "Completed");

  // REMOVE TASK ELEMENTS
  taskElement.remove();
  taskDivider.remove();

  // UPDATE LOCAL STORAGE
  projectRepo.updateLocalStorage();
};

/*
  ----- UTILITY FUNCTIONS -----
 */
/**
 * Gets all tasks excluding those in Tomorrow, Upcoming and Completed
 * @returns {Array} An array of all tasks
 */
export const getAllTasks = () => {
  let taskList = [];
  let projectList = projectRepo.getAllProjects();
  for (let i = 0; i < projectList.length; i++) {
    // If statement skips default projects (Tomorrow/Upcoming/Completed)
    if (i < 1 || i > 3) {
      let project = projectList[i];
      let projectTaskList = project.getTaskList();
      if (projectTaskList.length > 0) {
        projectTaskList.forEach((task) => {
          taskList.push(task);
        });
      }
    }
  }
  return taskList;
};

/**
 * Compares task duedate/completion date to another date
 * @param {String} taskDate task duedate/completion date string in format YYYY-MM-DD
 * @param {Date} dateToCompare date type object of date to compare to
 * @returns  (-1) if task due date is before date
 * @returns (0) if task due date and date are the same
 * @returns (1) if task due date is after date
 */
export const compareTaskDate = (taskDate, dateToCompare) => {
  let taskDateSplit = taskDate.split("-");
  let dueDateYear = taskDateSplit[0];
  let dueDateMonth = taskDateSplit[1] - 1; //Subtract month by one as month is indexed from zero
  let dueDateDay = taskDateSplit[2];
  let taskDateObject = new Date(dueDateYear, dueDateMonth, dueDateDay);
  let dateToCompareYear = dateToCompare.getFullYear();
  let dateToCompareMonth = dateToCompare.getMonth();
  let dateToCompareDay = dateToCompare.getDate();
  let dateToCompareNoTime = new Date(
    dateToCompareYear,
    dateToCompareMonth,
    dateToCompareDay
  );
  // console.log(`Date Compare Function:
  // TaskDate: ${format(taskDateObject, "MM-dd-yyyy")}
  // CompareDate: ${format(dateToCompareNoTime, "MM-dd-yyyy")}
  // result: ${compareAsc(taskDateObject, dateToCompareNoTime)}`);

  return compareAsc(taskDateObject, dateToCompareNoTime);
};

/**
 * Returns the task object that matches the id passed in
 * @param {String} taskID
 * @returns {taskObject}
 */
export const getTaskByID = (taskID) => {
  let allTasks = getAllTasks();
  for (let i = 0; i < allTasks.length; i++) {
    let task = allTasks[i];
    if (task.taskID === taskID) {
      return task;
    }
  }
};
