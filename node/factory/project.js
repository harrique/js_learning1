projectRepo = require('./projectRepository.js');

class Project{
    constructor(data){
        this.name = data.name;
    }

    save(){
        console.log('saving project ' + this.name);
        projectRepo.save(this); 
    }
}

module.exports =  Project;