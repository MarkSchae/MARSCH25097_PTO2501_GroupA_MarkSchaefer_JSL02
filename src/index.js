// Starting the jsl 2 js script

// Save this data in an object or array and loop through when needed
const tasks = [];
// Promt the user to enter title, description, and status for 2 seperate tasks
/* prompt('Please enter the title of the task');
prompt('Please enter the description of the task');
prompt('Please enter the status of the task'); */

// Store the user answers in variables
const title = prompt('Please enter the title of the task');
const description = prompt('Please enter the description of the task');
let taskStatus = prompt('Please enter the status of the task').toLowerCase(); // Convert status inputs to lowercase
// Validate the status inputs to only accept todo, doing, done, repeat the prompt until a valid input is entered
// Run the prompt until the variable stores one of the options. 
while (taskStatus !== 'done' && taskStatus !== 'doing' && taskStatus !== 'todo') {
    alert('Sorry you did not enter a valid status for the task, please enter todo, done, or doing');
    taskStatus = prompt('Please enter the status of the task').toLowerCase();
}