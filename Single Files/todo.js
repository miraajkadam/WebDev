var todos = ["Buy New Turtle"];
window.setTimeout(function () {
    do {
        var choice = prompt("Enter the action")
        if (choice === 'new') {
            addTodos()
        } else if (choice === 'list') {
            listTodos()
        } else if (choice === 'delete') {
            deleteTodos()
        }
    } while (choice !== 'quit')

    console.log("You quit the app")
}, 500);


function addTodos() {
    var action = prompt("What you want to add?")
    todos.push(action)
}

function listTodos() {
    console.log("*****************")
    todos.forEach(function (todo, i) {
        console.log(i + " : " + todo)
    })
    console.log("*****************")
}

function deleteTodos() {
    var index = prompt("Enter the index of Todo to delete")
    deleted = todos.splice(index, 1)
    console.log("\"" +
        deleted + "\" was deleted")
}