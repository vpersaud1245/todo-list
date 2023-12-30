const taskProto = {
  getTaskName() {
    return this.taskName;
  },
};

function createTask(name, description, dueDate) {
  return Object.create(taskProto, {
    taskName: {
      value: name,
    },
    taskDescription: {
      value: description,
    },
    taskDueDate: {
      value: dueDate,
    },
  });
}

export { createTask };
