class Task {
  constructor(name, description, dueDate, priority, project) {
    this.taskID = generateTaskID();
    this.taskName = name;
    this.taskDescription = description;
    this.taskDueDate = dueDate;
    this.taskPriority = priority;
    this.assignedProject = project;
  }
}

// const taskProto = {};
// function createTask(name, description, dueDate, priority, project) {
//   return Object.create(taskProto, {
//     taskID: {
//       value: generateTaskID(),
//     },
//     taskName: {
//       value: name,
//     },
//     taskDescription: {
//       value: description,
//     },
//     taskDueDate: {
//       value: dueDate,
//     },
//     taskPriority: {
//       value: priority,
//     },
//     assignedProject: {
//       value: project,
//     },
//   });
// }

export { Task };

const generateTaskID = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};
