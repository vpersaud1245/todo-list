import { Task } from "./task";
class Project {
  constructor(name, color) {
    this.projectName = name;
    this.taskList = [];
    this.projectColor = color;
  }
  static createFromObject(obj) {
    const project = new Project(obj.projectName, obj.projectColor);
    if (obj.taskList.length > 0) {
      project.taskList = obj.taskList.map((task) =>
        Task.createFromObject(task)
      );
    }
    return project;
  }
  getProjectName() {
    return this.projectName;
  }
  getTaskList() {
    return this.taskList;
  }
  addTask(taskToAdd) {
    this.taskList.push(taskToAdd);
  }
  removeTask(taskNameToRemove) {
    let taskIndex = this.getTaskIndexFromName(taskNameToRemove);
    if (taskIndex > -1) {
      this.taskList.splice(taskIndex, 1);
    }
  }
  getTaskIndexFromName(taskName) {
    return this.taskList.map((task) => task.taskName).indexOf(taskName);
  }
  clearTaskList() {
    this.taskList.length = 0;
  }
}

export { Project };
