import {
  removeProjectFromRepo,
  updateLocalStorage,
  getProjectFromID,
} from "../model/projectRepo";
import { reloadProjectSection, toggleProjectMenu } from "./projectSection";
import { renderAddProjectForm } from "./addProjectForm";

export const addEditProjectListeners = () => {
  // CACHE DOM
  const editProjectBtn = document.querySelector(
    ".edit-project-menu__item--edit"
  );
  const deleteProjectBtn = document.querySelector(
    ".edit-project-menu__item--delete"
  );

  /*
    ----- ADD LISTENERS -----
  */

  // EDIT PROJECT
  editProjectBtn.onclick = (e) => {
    handleEditProjectClick();
  };

  // DELETE PROJECT
  deleteProjectBtn.addEventListener("click", handleDeleteProjectClick);
};

const handleDeleteProjectClick = () => {
  console.log("Im being clicked");
  const projectID = document.querySelector(".section").id;
  removeProjectFromRepo(projectID);
  updateLocalStorage();
  toggleProjectMenu();
  reloadProjectSection("Inbox");
};

const handleEditProjectClick = () => {
  // RENDER ADD PROJECT FORM
  renderAddProjectForm();

  //GET PROJECT FROM ID
  const projectID = document.querySelector(".section").id;
  let project = getProjectFromID(projectID);

  // SET TITLE TO 'EDIT'
  const formTitle = document.querySelector(".add-project-modal__title");
  formTitle.textContent = "Edit";

  // POPULATE FIELDS
  const projectNameField = document.querySelector(
    ".add-project-form__input--project-name"
  );
  projectNameField.value = project.projectName;

  const projectColorSelector = document.querySelector(
    ".add-project-form-selector--project-color"
  );
  projectColorSelector.value = project.projectColor;

  // UPDATE SUBMIT BTN CLR AND TEXT TO 'SAVE'
  const formSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  formSubmitBtn.textContent = "Save";
  if (projectNameField.value != "") {
    formSubmitBtn.style.backgroundColor =
      "var(--form-submit-btn-validation-clr)";
    return;
  }
};
