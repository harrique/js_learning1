Repo = require('./repoFactory.js');
Task = require('./task.js');
User = require('./user.js');
Project = require('./project.js');

let repo = new Repo();

let task1 = new Task(repo.task.get(1));
task1.save();

let user1 = new User(repo.user.get(1));
user1.save();

let project1 = new Project(repo.project.get(1));
project1.save();
