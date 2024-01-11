import { format } from "date-fns";
import {
  addTaskToProject,
  getProjectNames,
  isUserProject,
} from "../controller/projectController";
import { getTaskByID } from "../controller/taskController";
import {
  createProjectSelectorOption,
  reloadSectionDisplay,
  validateForm,
} from "./addTaskForm";
import { getProjectFromName, updateLocalStorage } from "../model/projectRepo";

export const renderEditTaskForm = (e) => {
  // DISPLAY EDIT TASK MODAL
  const editTaskModal = document.querySelector(".edit-task-modal");
  editTaskModal.style.display = "block";

  // CACHE DOM
  const taskNameInput = document.querySelector(".edit-task__task-name");
  const taskDescriptionInput = document.querySelector(
    ".edit-task__task-description"
  );
  const taskProjectSelector = document.querySelector(
    ".edit-task__select-project"
  );
  const taskDueDateSelector = document.querySelector(
    ".edit-task__select-due-date"
  );
  const taskPrioritySelector = document.querySelector(
    ".edit-task__select-priority"
  );

  // GET TASK OBJECT
  let taskID = e.currentTarget.id;
  let task = getTaskByID(taskID);

  // SET TASK NAME AND DESCRIPTION VALUES TO TASK VALUES
  taskNameInput.value = task.taskName;
  taskDescriptionInput.value = task.taskDescription;

  // SET DUE DATE TO TASK DUE DATE VALUE
  taskDueDateSelector.value = task.taskDueDate;
  // ONLY ALLOW SELECTION FROM CURRENT DATE AND ON
  let currDateFormatted = format(new Date(), "yyyy-MM-dd");
  taskDueDateSelector.min = currDateFormatted;

  // SET PRIORITY TO TASK PRIORITY VALUE
  taskPrioritySelector.value = task.taskPriority;

  // APPEND PROJECT SELECTOR OPTIONS
  taskProjectSelector.innerHTML = "";
  let projectSectionName =
    document.querySelector(".section__title").textContent;
  let userProjectOptionAdded = false;
  if (projectSectionName !== "Inbox" && isUserProject(projectSectionName)) {
    let firstOption = createProjectSelectorOption(projectSectionName);
    taskProjectSelector.append(firstOption);
    userProjectOptionAdded = true;
  }
  let projectNames = getProjectNames();
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
      taskProjectSelector.append(projectOption);
    }
  }

  // APPEND CLOSE AND UPDATE FORM LISTENER
  const closeButton = document.querySelector(
    ".edit-task-modal__close-modal-btn"
  );

  closeButton.onclick = (e) => {
    handleExitSubmit(task);
  };
};

const handleExitSubmit = (task) => {
  // CACHE DOM
  const form = document.querySelector(".edit-task-form");
  const taskNameInput = document.querySelector(".edit-task__task-name");
  const taskDescriptionInput = document.querySelector(
    ".edit-task__task-description"
  );
  const taskProjectSelector = document.querySelector(
    ".edit-task__select-project"
  );
  const taskDueDateSelector = document.querySelector(
    ".edit-task__select-due-date"
  );
  const taskPrioritySelector = document.querySelector(
    ".edit-task__select-priority"
  );
  let oldTaskProject = task.assignedProject;

  if (validateForm(taskNameInput)) {
    task.taskName = taskNameInput.value;
    task.taskDescription = taskDescriptionInput.value;
    task.taskDueDate = taskDueDateSelector.value;
    task.taskPriority = taskPrioritySelector.value;
    if (taskProjectSelector.value !== oldTaskProject) {
      let oldProject = getProjectFromName(oldTaskProject);
      oldProject.removeTask(task.taskID);
      addTaskToProject(task, taskProjectSelector.value);
      task.assignedProject = taskProjectSelector.value;
    }

    form.reset();
    const editTaskModal = document.querySelector(".edit-task-modal");
    editTaskModal.style.display = "none";
    // RELOAD SECTION DISPLAY
    let displayedSectionName =
      document.querySelector(".section__title").textContent;
    reloadSectionDisplay(displayedSectionName);
    updateLocalStorage;
  }
};
