// Use to create new objects with their own scope.

// 1. the new keyboard
	// a. Creates a brand new object
	// b. Links to an object prototype
	// c. Bind 'this' to the new object scope
	// d. Implicitly retuns this

// Example: 
// function ObjectName(param1, param2){
//     this.param1 = param1;
//     this.param2 = param2;
//     this.toString = function(){
//         return this.param1 + ' ' + this.param2;
//     } // implicitly returns this
// }

// Example: 

// var Task = function(name) {
//   this.name = name;
//   this.completed = false;
//   this.complete = function() {
//     console.log('completed task: ' + this.name);
//     this.completed = true;
//   };
//   this.save = function() {
//     console.log('saving Task: ' + this.name);
//   };
// };

// var task1 = new Task('create a demo for constructors');
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for singletons');
// var task4 = new Task('create a demo for prototypes');

// task1.complete();
// task2.save();
// task3.save();
// task4.save();
