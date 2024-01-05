const projectProto = {
  getProjectName() {
    return this.projectName;
  },
  getTaskList() {
    return this.taskList;
  },
  addTask(taskToAdd) {
    this.taskList.push(taskToAdd);
  },
  removeTask(taskToRemove) {
    let taskIndex = this.getTaskIndexFromName(taskToRemove);
    if (taskIndex > -1) {
      taskList.splice(taskIndex, 1);
    }
  },
  getTaskIndexFromName(taskName) {
    return taskList.map((task) => task.taskName).indexOf(taskName);
  },
  clearTaskList() {
    this.taskList.length = 0;
  },
};

function createProject(name, color) {
  return Object.create(projectProto, {
    projectName: {
      value: name,
    },
    taskList: {
      value: [],
    },
    projectColor: {
      value: color,
    },
  });
}

export { createProject };
