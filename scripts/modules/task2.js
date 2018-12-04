class Task2{
    constructor(data){
        this.name = data.name;
        this.completed = data.completed;
        this.repo = data.repo;
    }

    toggle_complete(){
        if (!this.completed) {
            console.log('2 completed task ' + this.name);
        }

        this.completed = !this.completed;
        this.repo.save(this);
    }
}

export default Task2;