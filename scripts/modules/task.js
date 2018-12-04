class Task{
    constructor(data){
        this.name = data.name;
        this.completed = data.completed;
        this.repo = data.repo;
    }

    toggle_complete(){
        if (!this.completed) {
            console.log('completed task ' + this.name);
        }

        this.completed = !this.completed;
        this.repo.save(this);
    }
}

export default Task;