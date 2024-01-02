import { format } from "date-fns";
import * as projectController from "../controller/projectController";
import cancelButtonImg from "../assets/cancel-icon.svg";
import submitButtonImg from "../assets/submit-icon.svg";

export const renderAddTaskForm = () => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // CREATE FORM ELEMENTS
  const addTaskForm = document.createElement("form");
  const formTopSection = createTopSection();
  const formMiddleSection = createMiddleSection();
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

  // APPEND FORM TO MAIN ELEMENT
  main.append(addTaskForm);
};

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

const createMiddleSection = () => {
  // CREATE SECTION CONTAINER
  const formMiddleSection = document.createElement("div");
  formMiddleSection.classList.add("add-task-form__middle-section");

  // CREATE DUE DATE INPUT
  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.classList.add("add-task-form__input--due-date");
  taskDueDateInput.id = "due-date-input";

  // DEFAULT DUE DATE VALUE TO CURRENT DATE
  let currDateFormatted = format(new Date(), "yyyy-MM-dd");
  taskDueDateInput.value = currDateFormatted;

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

  // APPEND PROJECTS TO PROJECT SELECTOR
  let projectNames = projectController.getProjectNames();
  projectNames.forEach((projectName) => {
    let projectOption = createProjectSelectorOption(projectName);
    projectSelector.append(projectOption);
  });

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

  // CREATE SUBMIT BUTTON
  const submitButton = document.createElement("button");
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

const createProjectSelectorOption = (projectName) => {
  const projectOption = document.createElement("option");
  projectOption.value = projectName;
  projectOption.innerHTML = projectName;
  return projectOption;
};
