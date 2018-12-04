Task = require('./task_class.js');
Repo = require('./taskRepository.js');

let task1 = new Task(Repo.get('1'));

task1.save();


