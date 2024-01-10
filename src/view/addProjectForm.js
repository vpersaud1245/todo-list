import {
  addProjectToRepo,
  getAllProjects,
  updateLocalStorage,
} from "../model/projectRepo";
import { validateForm } from "./addTaskForm";
import { reloadProjectSection } from "./projectSection";
import { hideSidebarOnOutsideClick, toggleSideBar } from "./sidebar";
import { Project } from "../model/project";
import { sub } from "date-fns";

export const renderAddProjectForm = () => {
  // GET ADD PROJECT FORM
  const addProjectModal = document.querySelector(".add-project-modal");

  // SHOW ADD PROJECT FORM
  addProjectModal.showModal();

  // REMOVE SIDEBAR OUTSIDE CLICK CLOSE
  // This stops the sidebar form closing when clicking through the form
  const sidebar = document.querySelector(".sidebar");
  document.removeEventListener("click", hideSidebarOnOutsideClick);

  /*
    ----- ADD EVENT LISTENERS -----
  */

  // PROJECT NAME INPUT LISTENER
  const projectNameInput = document.querySelector(
    ".add-project-form__input--project-name"
  );
  projectNameInput.oninput = (e) => {
    handleProjectNameInput(e);
  };

  // CLOSE MODAL LISTENERS
  // Cancel Button Listener
  const cancelAddProjectFormButton = document.querySelector(
    ".add-project-form__button--cancel-button"
  );
  cancelAddProjectFormButton.onclick = (e) => {
    closeModal();
    toggleSideBar(sidebar, "close");
  };

  // CLOSE MODAL WHEN CLICK OCCURS OUTSIDE OF MODAL
  /* Added a short timeout before attaching the click event listener to avoid immediate placement during the sidebar opening.
  Without this delay, the listener could inadvertently trigger the sidebar closure, as it's initially triggered by the same button click that opens the sidebar. */
  setTimeout(() => {
    document.addEventListener("click", hideModalOnOutsideClick);
  }, 0);

  //FORM SUBMIT LISTENER
  const addProjectFormSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  addProjectFormSubmitBtn.onclick = (e) => {
    formSubmitHandler();
  };
};

const resetSubmitBtnColor = () => {
  const submitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );

  submitBtn.style.backgroundColor = "rgb(164, 169, 176)";
  submitBtn.style.color = "rgb(255, 255, 255)";
};

/**
 * Update submit button color on project name input to show form validation
 */
const handleProjectNameInput = (e) => {
  const taskNameInput = e.currentTarget;
  const formSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  if (taskNameInput.value != "") {
    formSubmitBtn.style.backgroundColor =
      "var(--form-submit-btn-validation-clr)";
    return;
  }
  formSubmitBtn.style.backgroundColor = "var(--form-submit-btn-clr)";
  return;
};

const closeModal = () => {
  const addProjectModal = document.querySelector(".add-project-modal");
  const addProjectForm = document.querySelector(".modal__add-project-form");
  addProjectModal.close();
  resetSubmitBtnColor();
  addProjectForm.reset();
  document.removeEventListener("click", hideModalOnOutsideClick);
};

/**
 * Close add project form and sidebar when user clicks outside of the form
 */
const hideModalOnOutsideClick = (e) => {
  const sidebar = document.querySelector(".sidebar");
  const addProjectModal = document.querySelector(".add-project-inner-modal");
  const isClickInsideModal = addProjectModal.contains(e.target);
  if (!isClickInsideModal) {
    closeModal();
    toggleSideBar(sidebar, "close");
  }
};

const formSubmitHandler = () => {
  let sidebar = document.querySelector(".sidebar");
  let projectName = document.querySelector(
    ".add-project-form__input--project-name"
  ).value;
  let projectColor = document.querySelector(
    ".add-project-form-selector--project-color"
  ).value;
  console.log(`Project Name: ${projectName}, Project Color: ${projectColor}`);

  if (validateForm(projectName)) {
    let project = new Project(projectName, projectColor);
    addProjectToRepo(project);
    updateLocalStorage();
    closeModal();
    toggleSideBar(sidebar, "close");
    reloadProjectSection(projectName);

    return;
  }
};
