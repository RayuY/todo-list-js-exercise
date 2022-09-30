// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {

  // taskTitles.push(title);
  // taskDescriptions.push(description);
  // taskComplete.push(false);
  const task = {
    title,
    description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },

    completeTask: function () {
      this.complete = true;
    },
  };

  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// Print the state of a task to the console in a nice readable way
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat litter", "Take all the shit out of the litter box"); // task 0
const task2 = newTask("Do laundry", "what!"); // task 1
const tasks = [task1, task2];


task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
