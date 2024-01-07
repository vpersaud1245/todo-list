import {
  addTaskToProject,
  clearProjectTaskList,
} from "../controller/projectController";
import { getAllTasks, compareTaskDate } from "../controller/taskController";
import { reloadProjectSection } from "./projectSection";

export const renderTodaySection = () => {
  clearProjectTaskList("Today");
  let tasks = getAllTasks();

  tasks.forEach((task) => {
    let dateComparisonValue = compareTaskDate(task.taskDueDate, new Date());
    if (dateComparisonValue === 0) {
      addTaskToProject(task, "Today");
    }
  });

  reloadProjectSection("Today");
};
