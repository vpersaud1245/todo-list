const taskProto = {};

function createTask(name, description, dueDate, priority) {
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
    taskPriority: {
      value: priority,
    },
  });
}

export { createTask };
