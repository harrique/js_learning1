class Task{
    constructor(name, completed = false){
        this.name = name;
        this.completed = completed;
    }

    toggle_complete(){
        if (!this.completed) {
            console.log('completed task ' + this.name);
        }

        this.completed = !this.completed;
    }
}

export default Task;