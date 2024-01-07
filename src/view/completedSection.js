import { createProjectSection, createSectionTitle } from "./projectSection";
import { add, format, getDay, isToday, isTomorrow } from "date-fns";
import { createDaySectionTitle } from "./upcomingSection";
import { getProjectTasks } from "../controller/projectController";

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
    let day = add(day1, { days: i });
    thisWeek.push(day);
  }

  // CREATE ELEMENT WRAPPER FOR DAY SECTIONS
  const daySections = document.createElement("div");
  daySections.classList.add("section__day-sections");

  // CREATE DAY SECTION FOR EACH DAY
  thisWeek.forEach((day) => {
    let daySection = createDaySection(day);
    daySections.append(daySection);
  });

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
  console.log(completedTasks);

  return daySection;
};
