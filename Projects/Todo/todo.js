
let input = prompt("Enter the task what todo!");

let todoArray = ['Read Java', 'Build JS Project'];

while(input !== 'quit' || input !== 'q'){

    if(input === 'add'){
        const newTodo = prompt("Enter the new todo to list!");
        todoArray.push(newTodo);
    }
    else if(input === 'list'){
        console.log('************')
        for(let i=0; i<todoArray.length; i++){
            console.log(`${i}: ${todoArray[i]}`);
        }
        console.log('************')
    }
    else if(input === 'delete'){
        const index = parseInt(prompt("Enter valid index!"));
        let deletedTodo = todoArray.splice(index, 1);
        console.log(deletedTodo);
    }

}

console.log("Ok, you Quited");