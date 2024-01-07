class Task {
  constructor(name, description, dueDate, priority, project) {
    this.taskID = generateTaskID();
    this.taskName = name;
    this.taskDescription = description;
    this.taskDueDate = dueDate;
    this.taskPriority = priority;
    this.assignedProject = project;
    this.completionDate = "";
  }

  static createFromObject(obj) {
    return new Task(
      obj.taskName,
      obj.taskDescription,
      obj.taskDueDate,
      obj.taskPriority,
      obj.assignedProject
    );
  }

  setAssignedProject(projectName) {
    this.assignedProject = projectName;
  }

  setCompletionDate(date) {
    this.completionDate = date;
  }
}

export { Task };

const generateTaskID = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};
