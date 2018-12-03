"use strict";

import '../styles/index.scss';
import angular from "angular";
import Task from "./modules/task.js";
import Task2 from "./modules/task2.js";

let ngModule = angular.module('taskManager', []);
ngModule.factory('ngTask1', function(){return Task;});
ngModule.factory('ngTask2', function(){return Task2;});

class taskController {
    constructor(ngTask1, ngTask2) {        
        this.tasks = [];
        this.tasks.push(new ngTask2('task 1'));
        this.tasks.push(new ngTask2('task 2', true));  
        this.tasks.push(new ngTask1('task 3'));     
    }
}

ngModule.controller('taskCtrl', taskController);