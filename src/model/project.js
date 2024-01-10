import { Task } from "./task";
class Project {
  constructor(name, color, id) {
    this.projectID = id || generateProjectID();
    this.projectName = name;
    this.taskList = [];
    this.projectColor = color;
  }
  static createFromObject(obj) {
    const project = new Project(
      obj.projectID,
      obj.projectName,
      obj.projectColor
    );
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
  removeTask(taskIDToRemove) {
    let taskIndex = this.getTaskIndexFromID(taskIDToRemove);
    if (taskIndex > -1) {
      this.taskList.splice(taskIndex, 1);
    }
  }
  getTaskIndexFromID(taskID) {
    return this.taskList.map((task) => task.taskID).indexOf(taskID);
  }
  clearTaskList() {
    this.taskList.length = 0;
  }
}

const generateProjectID = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

export { Project };
