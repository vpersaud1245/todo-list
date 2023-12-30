import addBtnSVG from "../assets/add-btn-icon.svg";
import { getHTMLTaskElements } from "../controller/projectController";

export const renderProjectSection = (projectName) => {
  const main = document.querySelector(".main");

  const section = document.createElement("div");
  section.classList.add("section");
  section.id = projectName;

  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section__title");
  sectionTitle.textContent = projectName;

  const sectionList = document.createElement("ul");
  sectionList.classList.add("section-list");

  // APPEND TASK ELEMENTS
  let taskElements = getHTMLTaskElements(projectName);
  taskElements.forEach((taskElement) => {
    sectionList.append(taskElement);
    const taskDivider = document.createElement("hr");
    taskDivider.classList.add("section-list__task-divider");
    sectionList.append(taskDivider);
  });

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("section-list__add-task-btn");
  const addTaskBtnImg = document.createElement("img");
  addTaskBtnImg.classList.add("add-task-btn__img");
  addTaskBtnImg.src = addBtnSVG;
  addTaskBtnImg.alt = "plus-sign";
  const addTaskBtnText = document.createElement("span");
  addTaskBtnText.classList.add("add-task-btn__text");
  addTaskBtnText.textContent = "Add task";

  addTaskBtn.append(addTaskBtnImg, addTaskBtnText);

  section.append(sectionTitle, sectionList, addTaskBtn);
  main.append(section);
};
