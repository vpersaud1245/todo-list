import { add, format } from "date-fns";
import * as projectController from "../controller/projectController";
import { updateLocalStorage } from "../model/projectRepo";
import cancelButtonImg from "../assets/cancel-icon.svg";
import submitButtonImg from "../assets/submit-icon.svg";
import { createAddTaskBtn, reloadProjectSection } from "./projectSection";
import { Task } from "../model/task";
import { getAllTasks } from "../controller/taskController";
import { renderTodaySection } from "./todaySection";
import { renderUpcomingSection } from "./upcomingSection";
import { renderCompletedSection } from "./completedSection";

export const renderAddTaskForm = (e) => {
  // CREATE FORM ELEMENTS
  const addTaskForm = document.createElement("form");
  const formTopSection = createTopSection();
  const formMiddleSection = createMiddleSection(e);
  const formDivider = document.createElement("hr");
  const formBottomSection = createBottomSection();

  // ADD ELEMENT CLASSES
  addTaskForm.classList.add("add-task-form");
  formDivider.classList.add("add-task-form__divider");

  // SET FORM ACTION
  addTaskForm.action = "javascript:void(0);";

  // APPEND ELEMENTS TO FORM
  addTaskForm.append(
    formTopSection,
    formMiddleSection,
    formDivider,
    formBottomSection
  );

  // ADD FORM SUBMIT HANDLER
  addTaskForm.onsubmit = (e) => {
    formSubmitBtnOnClickHandler();
  };

  return addTaskForm;
};

/*
  ------ CREATE FORM SECTIONS ------
*/

/*
  ----- TOP SECTION -----=
*/
const createTopSection = () => {
  // CREATE SECTION CONTAINER
  const formTopSection = document.createElement("div");
  formTopSection.classList.add("add-task-form__top-section");

  // CREATE TASK NAME INPUT
  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.classList.add(
    "add-task-form__input",
    "add-task-form__input--name"
  );
  taskNameInput.placeholder = "Task Name";

  // ADD TASK NAME INPUT HANDLERS
  taskNameInput.oninput = (e) => {
    taskNameOnInputHandler(e);
  };
  // CREATE TASK DESCRIPTION INPUT
  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.classList.add(
    "add-task-form__input",
    "add-task-form__input--description"
  );
  taskDescriptionInput.placeholder = "Description";

  // APPEND INPUT ELEMENTS TO CONTAINER
  formTopSection.append(taskNameInput, taskDescriptionInput);

  return formTopSection;
};

// FORM VALIDATION UTLITIY FUNCTION
/**
 * Update submit btn background color when name is entered
 * to show form validation
 */
const taskNameOnInputHandler = (e) => {
  const taskNameInput = e.currentTarget;
  const formSubmitBtn = document.querySelector(
    ".submit-buttons__button--submit"
  );
  if (taskNameInput.value != "") {
    formSubmitBtn.style.backgroundColor =
      "var(--form-submit-btn-validation-clr)";
    return;
  }
  formSubmitBtn.style.backgroundColor = "var(--form-submit-btn-clr)";
  return;
};

/*
  ------ MIDDLE SECTION -----
*/
const createMiddleSection = (e) => {
  const sectionName = document.querySelector(".section__title").textContent;
  // CREATE SECTION CONTAINER
  const formMiddleSection = document.createElement("div");
  formMiddleSection.classList.add("add-task-form__middle-section");

  // CREATE DUE DATE INPUT
  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.classList.add("add-task-form__input--due-date");
  taskDueDateInput.id = "due-date-input";

  // DEFAULT DUE DATE VALUE TO CURRENT DATE ON TODAY SECTION
  let currDateFormatted = format(new Date(), "yyyy-MM-dd");
  if (sectionName === "Today") {
    taskDueDateInput.value = currDateFormatted;
  }

  //DEFAULT DUE DATE TO UPCOMING DATE ON UPCOMING SECTION
  let addTaskBtn = e.currentTarget;
  if (sectionName === "Upcoming") {
    let upcomingSectionSplit =
      addTaskBtn.previousSibling.previousSibling.textContent.split(" ");
    let upcomingSectionMonth = upcomingSectionSplit[0];
    let upcomingSectionDay = upcomingSectionSplit[1];
    let upcomingSectionYear = format(new Date(), "yyyy");
    let upcomingSectionDate = new Date(
      `${upcomingSectionMonth} ${upcomingSectionDay} ${upcomingSectionYear}`
    );
    let upcomingDateFormatted = format(upcomingSectionDate, "yyyy-MM-dd");
    taskDueDateInput.value = upcomingDateFormatted;
  }

  // ONLY ALLOW SELECTION FROM CURRENT DATE AND ON
  taskDueDateInput.min = currDateFormatted;

  // CREATE PRIORITY SELECTOR
  const taskPrioritySelector = document.createElement("select");
  taskPrioritySelector.classList.add("add-task-form__input--priority-selector");
  taskPrioritySelector.name = "add-form-input__priority-selector";
  const priorityPlaceholder = document.createElement("option");
  priorityPlaceholder.innerHTML = "Priority";
  taskPrioritySelector.append(priorityPlaceholder);

  // ADD PRIORITY SELECTOR OPTIONS
  const NUMOFPRIORITIES = 4;
  for (let i = 1; i <= NUMOFPRIORITIES; i++) {
    const priorityOption = document.createElement("option");
    priorityOption.value = `Priority ${i}`;
    priorityOption.innerHTML = `Priority ${i}`;
    taskPrioritySelector.append(priorityOption);
  }

  // APPEND ELEMENTS TO CONTAINER
  formMiddleSection.append(taskDueDateInput, taskPrioritySelector);
  return formMiddleSection;
};

/*
  ----- BOTTOM SECTION -----
*/
const createBottomSection = () => {
  // CREATE SECTION ELEMENT
  const formBottomSection = document.createElement("div");
  formBottomSection.classList.add("add-task-form__bottom-section");

  // CREATE PROJECT SELECTOR
  const projectSelector = document.createElement("select");
  projectSelector.classList.add(
    "add-task-form__input",
    "add-task-form__input--project-selector"
  );
  let projectSectionName =
    document.querySelector(".section__title").textContent;
  console.log(projectSectionName);
  console.log(projectController.isUserProject(projectSectionName));
  let userProjectOptionAdded = false;
  // Makes the first project option the same as the project section if it is a user added project
  if (
    projectSectionName !== "Inbox" &&
    projectController.isUserProject(projectSectionName)
  ) {
    let firstOption = createProjectSelectorOption(projectSectionName);
    projectSelector.append(firstOption);
    userProjectOptionAdded = true;
  }

  // APPEND PROJECTS TO PROJECT SELECTOR
  let projectNames = projectController.getProjectNames();
  let numOfProjects = projectNames.length;
  for (let i = 0; i < numOfProjects; i++) {
    /* If statement skips over default projects 'Tomorrow','Upcoming','Completed'
    They are created at index 1-3 of the project array */
    if (i !== 1 && i !== 2 && i !== 3) {
      let projectName = projectNames[i];
      // If statement ensures the project section is not added twice if it is added as first option
      if (
        projectName === projectSectionName &&
        userProjectOptionAdded === true
      ) {
        continue;
      }
      let projectOption = createProjectSelectorOption(projectName);
      projectSelector.append(projectOption);
    }
  }

  // CREATE SUBMIT BUTTONS
  const submitButtons = createSubmitButtons();

  // APPEND ELEMENTS TO SECTION
  formBottomSection.append(projectSelector, submitButtons);
  return formBottomSection;
};

const createSubmitButtons = () => {
  // CREATE SECTION ELEMENT
  const submitButtons = document.createElement("div");
  submitButtons.classList.add("add-task-form__submit-buttons");

  // CREATE CANCEL BUTTON
  const cancelButton = document.createElement("button");
  cancelButton.classList.add(
    "submit-buttons__button",
    "submit-buttons__button--cancel"
  );
  const cancelButtonIcon = document.createElement("img");
  cancelButtonIcon.classList.add("cancel-button__icon");
  cancelButtonIcon.src = cancelButtonImg;
  cancelButtonIcon.alt = "cancel_icon";
  cancelButton.append(cancelButtonIcon);

  // ADD CANCEL BUTTON CLICK HANDLER
  cancelButton.onclick = (e) => {
    cancelBtnOnClickHandler();
  };

  // CREATE SUBMIT BUTTON
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add(
    "submit-buttons__button",
    "submit-buttons__button--submit"
  );
  const submitButtonIcon = document.createElement("img");
  submitButtonIcon.classList.add("submit-button__icon");
  submitButtonIcon.alt = "submit-icon";
  submitButtonIcon.src = submitButtonImg;
  submitButton.append(submitButtonIcon);

  // APPEND BUTTONS TO SECTION
  submitButtons.append(cancelButton, submitButton);
  return submitButtons;
};

export const createProjectSelectorOption = (projectName) => {
  const projectOption = document.createElement("option");
  projectOption.value = projectName;
  projectOption.innerHTML = projectName;
  return projectOption;
};

// ----- FORM CANCEL BTN HANDLER -----

const cancelBtnOnClickHandler = () => {
  // const addTaskForm = document.querySelector(".add-task-form");
  // addTaskForm.remove();
  // const addTaskBtn = createAddTaskBtn();
  // RELOAD SECTION DISPLAY
  let displayedSectionName =
    document.querySelector(".section__title").textContent;
  reloadSectionDisplay(displayedSectionName);
};

// ----- FORM SUBMIT BTN HANDLER -----
const formSubmitBtnOnClickHandler = () => {
  //CACHE DOM
  let taskName = document.querySelector(".add-task-form__input--name").value;
  let taskDescription = document.querySelector(
    ".add-task-form__input--description"
  ).value;
  let taskDueDate = document.querySelector(
    ".add-task-form__input--due-date"
  ).value;
  let taskPriority = document.querySelector(
    ".add-task-form__input--priority-selector"
  ).value;
  let selectedProject = document.querySelector(
    ".add-task-form__input--project-selector"
  ).value;

  if (validateForm(taskName)) {
    // CREATE TASK OBJECT
    let task = new Task(
      taskName,
      taskDescription,
      taskDueDate,
      taskPriority,
      selectedProject
    );
    console.log(task); //LOG TASK OBJ *****

    // ADD TASK TO SELECTED PROJECT
    projectController.addTaskToProject(task, selectedProject);

    // UPDATE LOCAL STORAGE
    updateLocalStorage();

    // RELOAD SECTION DISPLAY
    let displayedSectionName =
      document.querySelector(".section__title").textContent;
    reloadSectionDisplay(displayedSectionName);
    // Log all tasks for testing *****
    console.log(getAllTasks());
  } else {
    console.log("Form not valid");
  }
};

export const validateForm = (requriedFieldValue) => {
  if (requriedFieldValue !== "") {
    return true;
  }
  return false;
};

export const reloadSectionDisplay = (displayedSectionName) => {
  if (displayedSectionName === "Today") {
    renderTodaySection();
    return;
  }
  if (displayedSectionName === "Upcoming") {
    renderUpcomingSection();
    return;
  }
  if (displayedSectionName === "Completed") {
    renderCompletedSection();
    return;
  }
  reloadProjectSection(displayedSectionName);
};
