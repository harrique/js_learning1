taskRepo = require('./taskRepository.js');

class Task{
    constructor(data){
        this.name = data.name;
        this.completed = false || data.completed;
    }

    complete(){
        console.log('completed task ' + this.name);
        this.completed = true;
        this.save();
    }

    save(){
        console.log('saving task ' + this.name);
        taskRepo.save(this); 
    }
}

module.exports =  Task;