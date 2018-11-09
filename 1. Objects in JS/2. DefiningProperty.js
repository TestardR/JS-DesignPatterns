// 1. Define property 

Object.defineProperty(obj, 'name', {
	value: 'my name',
	writable: true,
	enumerable: true,
	configurable: true
})

// Demo 

// var task = {
//   title: 'My title',
//   description: 'My Description'
// };

// task.toString = function() {
//   return this.title + ' ' + this.description;
// };

// console.log(task.toString());

var task = {
  title: 'My title',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false, // not writable anymore
  enumerable: false, // hide toString from everybody
  configurable: false // forbid anyone from modifying these
});

console.log(task.toString());
console.log(task);
console.log(Object.keys(task));
