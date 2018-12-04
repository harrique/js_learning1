let repo = function(){
    let db = "db2";
    
        let get = function(id){
            console.log(`Getting task from ${db}:  ${id}`);
            return {
                name: `Task from ${db}:  ${id}`,
                completed: false,
                repo: this
            };
        };
    
        let save = function(task){
            console.log(`Saving ${task.name} to repository`);
        };
    
        return {
            get: get,
            save: save
        };
    };
    
export default  repo;