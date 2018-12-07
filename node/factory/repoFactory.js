class RepoFactory{
    constructor(){
        this.repoList = [
            {name: 'task', source: './taskRepository'},
            {name: 'user', source: './userRepository'},
            {name: 'project', source: './projectRepository'}
        ];

        this.repoList.forEach(repo => {
            this[repo.name] = require(repo.source);
        });
    }    
}

module.exports = RepoFactory;