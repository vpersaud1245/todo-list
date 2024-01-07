import { add, format, getDay, isToday, isTomorrow } from "date-fns";
import {
  createAddTaskBtn,
  createProjectSection,
  createSectionTitle,
} from "./projectSection";
import {
  compareTaskDate,
  convertTaskToHTML,
  getAllTasks,
} from "../controller/taskController";

/**
 * Render the upcoming section
 */
export const renderUpcomingSection = () => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // CLEAR MAIN ELEMENTS TO RESET
  main.innerHTML = "";

  // CREATE SECTION ELEMENT
  const section = createProjectSection("Upcoming");

  // CREATE SECTION TITLE
  const sectionTitle = createSectionTitle("Upcoming");

  // ADD NEXT 7 DAYS TO ARRAY TO BE DISPLAYED
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

// CREATE AND APPEND DAY SECTION
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

  //GET ALL TASKS
  let allTasks = getAllTasks();

  // APPEND TASKS CURRENT DAY TO DAY SECTION
  allTasks.forEach((task) => {
    if (compareTaskDate(task.taskDueDate, day) === 0) {
      let taskElement = convertTaskToHTML(task);
      const taskDivider = document.createElement("hr");
      taskDivider.classList.add(
        "section-list__task-divider",
        "section-list_task-divider--upcoming"
      );
      daySection.append(taskElement, taskDivider);
    }
  });

  // CREATE AND APPEND ADD TASK BTN TO DAY SECTION
  const addTaskBtn = createAddTaskBtn();
  daySection.append(addTaskBtn);

  return daySection;
};

/**
 *
 * @param day
 * @returns An h2 html title element with the formatted date and day of the week. Used in the upcoming section.
 */
export const createDaySectionTitle = (day) => {
  // GET DAY OF WEEK FROM DATE
  let dayOfWeek = getDay(day);
  let dayOfWeekFormatted = formatDayOfWeek(dayOfWeek);

  // FORMAT DATE INTO MMM DD ex: Jan 05
  let dayFormatted = format(day, "MMM dd");

  // CREATE SECTION TITLE ELEMENT
  let sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("day-section__title");

  // ADDS TODAY TO THE TITLE TEXT CONTENT IF DATE IS TODAY
  if (isToday(day)) {
    sectionTitle.textContent = `${dayFormatted} ‧ Today ‧  ${dayOfWeekFormatted}`;
    return sectionTitle;
  }

  // ADDS TOMORROW TO TITLE TEXT CONTENT IF DATE IS TOMORROW
  if (isTomorrow(day)) {
    sectionTitle.textContent = `${dayFormatted} ‧ Tomorrow ‧  ${dayOfWeekFormatted}`;
    return sectionTitle;
  }

  // ADDS DEFAULT TITLE TEXT CONTENT OF FORMATED DATE AND DAY OF WEEK
  sectionTitle.textContent = `${dayFormatted} ‧ ${dayOfWeekFormatted}`;

  return sectionTitle;
};

/**
 * Converts the number returned by the getDay function to the String formatted day of the week
 * @param dayOfWeekAsNum
 * @returns {string} Day of the Week
 */
const formatDayOfWeek = (dayOfWeekAsNum) => {
  if (dayOfWeekAsNum === 0) {
    return "Sunday";
  }
  if (dayOfWeekAsNum === 1) {
    return "Monday";
  }
  if (dayOfWeekAsNum === 2) {
    return "Tuesday";
  }
  if (dayOfWeekAsNum === 3) {
    return "Wednesday";
  }
  if (dayOfWeekAsNum === 4) {
    return "Thursday";
  }
  if (dayOfWeekAsNum === 5) {
    return "Friday";
  }
  if (dayOfWeekAsNum === 6) {
    return "Saturday";
  }
};
