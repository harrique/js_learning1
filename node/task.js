let task = {};

task.title = "task 1";
task.description = "DEMO SIMPLE TASK";

Object.defineProperty(task, "toString", {
   value: function(){
       return this.title + ": " + this.description;
   },
   writable: false,
   enumerable: false,
   configurable: false
});

let urgentTask  = Object.create(task);

Object.defineProperty(urgentTask, "toString", {
    value: function(){
        return this.title + " is urgent";
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());
