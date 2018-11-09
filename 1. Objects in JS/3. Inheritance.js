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

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false, // not writable anymore
  enumerable: false, // hide toString from everybody
  configurable: false // forbid anyone from modifying these
});

console.log(Object.keys(task));
console.log(urgentTask.toString());
