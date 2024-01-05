import {
  addTaskToProject,
  clearProjectTaskList,
} from "../controller/projectController";
import { getAllTasks, compareTaskDueDate } from "../controller/taskController";
import { reloadProjectSection } from "./projectSection";

export const renderTodaySection = () => {
  clearProjectTaskList("Today");
  let tasks = getAllTasks();

  tasks.forEach((task) => {
    let dateComparisonValue = compareTaskDueDate(task.taskDueDate, new Date());
    if (dateComparisonValue === 0) {
      addTaskToProject(task, "Today");
    }
  });

  reloadProjectSection("Today");
};
