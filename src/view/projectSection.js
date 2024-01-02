import addBtnSVG from "../assets/add-btn-icon.svg";
import addBtnSVGWhite from "../assets/add-btn-icon--white.svg";
import { getHTMLTaskElements } from "../controller/projectController";
import { renderAddTaskForm } from "./addTaskForm";

export const renderProjectSection = (projectName) => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // CREATE PROJECT SECTION
  const section = document.createElement("div");
  section.classList.add("section");
  section.id = projectName;

  // CREATE SECTION TITLE
  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section__title");
  sectionTitle.textContent = projectName;

  // CREATE SECTION LIST
  const sectionList = document.createElement("ul");
  sectionList.classList.add("section-list");
  // APPEND TASK ELEMENTS TO LIST
  let taskElements = getHTMLTaskElements(projectName);
  if (taskElements !== undefined) {
    taskElements.forEach((taskElement) => {
      sectionList.append(taskElement);
      const taskDivider = document.createElement("hr");
      taskDivider.classList.add("section-list__task-divider");
      sectionList.append(taskDivider);
    });
  }

  // CREATE ADD TASK BUTTON
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("section-list__add-task-btn");
  const addTaskBtnImg = document.createElement("img");
  addTaskBtnImg.classList.add("add-task-btn__img");
  addTaskBtnImg.src = addBtnSVG;
  addTaskBtnImg.alt = "plus-sign";
  const addTaskBtnText = document.createElement("span");
  addTaskBtnText.classList.add("add-task-btn__text");
  addTaskBtnText.textContent = "Add task";

  // ADD BTN HOVER AND CLICK HANDLERS
  addBtnIconHoverStyle(addTaskBtn, addTaskBtnImg);
  addTaskBtn.onclick = (e) => {
    handleAddTaskBtnClick(e, section);
  };

  addTaskBtn.append(addTaskBtnImg, addTaskBtnText);

  section.append(sectionTitle, sectionList, addTaskBtn);
  main.append(section);
};

/*
  ----- ADD TASK BTN EVENT HANDLERS -----
*/
const addBtnIconHoverStyle = (addTaskBtn, addTaskBtnImg) => {
  addTaskBtn.onmouseover = (e) => {
    addTaskBtnImg.src = addBtnSVGWhite;
  };

  addTaskBtn.onmouseleave = (e) => {
    addTaskBtnImg.src = addBtnSVG;
  };
};

const handleAddTaskBtnClick = (e, section) => {
  let addTaskBtn = e.currentTarget;
  console.log(addTaskBtn);
  section.removeChild(addTaskBtn);
  let addTaskForm = renderAddTaskForm();
  section.append(addTaskForm);
};
