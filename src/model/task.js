const taskProto = {};

function createTask(name, description, dueDate, priority, project) {
  return Object.create(taskProto, {
    taskID: {
      value: generateTaskID(),
    },
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
    assignedProject: {
      value: project,
    },
  });
}

export { createTask };

const generateTaskID = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};
