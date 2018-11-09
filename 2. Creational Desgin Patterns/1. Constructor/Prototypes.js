// An encapsulation of properties that an object links to. 

// It is more efficient like this, the functions are not created each time we create a new object.

var Task = function(name) {
  this.name = name;
  this.completed = false;
};

// ClassName.prototype.methodName = function (argument){

// };

Task.prototype.complete = function() {
  console.log('completed task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log('saving Task: ' + this.name);
};

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
