"use strict";

import '../styles/index.scss';
import angular from "angular";
import Task from "./modules/task.js";
import Task2 from "./modules/task2.js";
import Repo from "./modules/taskRepo.js";
import Repo2 from "./modules/taskRepo2.js";

let ngModule = angular.module('taskManager', []);

ngModule.service('taskRepository1', Repo);
ngModule.service('taskRepository2', Repo2);
ngModule.factory('ngTask1', function(){return Task;});
ngModule.factory('ngTask2', function(){return Task2;});

class taskController {
    constructor(ngTask1, ngTask2, taskRepository1, taskRepository2) {        
        this.tasks = [];
        this.tasks.push(new ngTask1(taskRepository1.get(1)));
        this.tasks.push(new ngTask1(taskRepository1.get(2)));  
        this.tasks.push(new ngTask2(taskRepository2.get(3)));     
    }
}

ngModule.controller('taskCtrl', taskController);