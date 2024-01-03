import calendarIcon from "../assets/calendar-icon.svg";

// CONVERT TASK OBJECT TO HTML ELEMENT
export const convertTaskToHTML = (task) => {
  // CREATE ELEMENTS
  const taskElement = document.createElement("li");
  const toggleCompleteBtn = document.createElement("button");
  const taskInfoElement = document.createElement("div");

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

  // APPEND ELEMENTS
  taskElement.append(toggleCompleteBtn, taskInfoElement);
  return taskElement;
};

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

const setToggleCompleteBtnColor = (
  backgroundColor,
  borderColor,
  toggleCompleteBtn
) => {
  toggleCompleteBtn.style.border = "2px solid " + borderColor;
  toggleCompleteBtn.style.backgroundColor = backgroundColor;
};
