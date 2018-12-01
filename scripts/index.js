"use strict";

import '../styles/index.scss';
import angular from "angular";

let ngModule = angular.module('taskManager', []);

let taskController = function(){
    let ctrl = this;
    ctrl.tasks = [{name: 'task1'},
        {name: 'task 2', completed: true}];

    this.complete = function (item) {
        if (!ctrl.tasks[item].completed) {
            console.log('completed task ' + ctrl.tasks[item].name);
            ctrl.tasks[item].completed = true;
        }
        else{
            ctrl.tasks[item].completed = false;
        }
    };
};

ngModule.controller('taskCtrl', taskController);