// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat

    //copies existing array of objects into new variable
    var newObjArr = this.cloneArrayOfObjects(todos);
    //creates newobject
    var newObj = new Object();
    newObj.id = this.generateId();
    newObj.description = newTodo;
    newObj.done = false;
    //concatinate newObject into newObjArr
    return newObjArr.concat(newObj);
  },

  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var todosFiltered = todos.filter(todoObj => {
      return todoObj.id !== idToDelete;
    });
    return todosFiltered;
  },

  editTodo: function(todos,idToEdit) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var todosFiltered = todos.filter(todoObj => {
      return todoObj.id !== idToEdit;
    });

    var todosEdited = todos.filter(todoObj => {
      return todoObj.id === idToEdit;
    });
  
    document.querySelector("input").value=todosEdited[0].description;

    return todosFiltered 
    
  },

  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var todosCopy = this.cloneArrayOfObjects(todos);
    var todosMapped = todosCopy.map(function(todoObj) {
      if (todoObj.id === idToMark) {
        if (todoObj.done === true) { 
          todoObj.done = false;
        } else {
          todoObj.done = true;
        }
      }
      return todoObj;
    });
    return todosMapped;
  },

  sortTodos: function(todos) {
    var todosCopy=this.cloneArrayOfObjects(todos);
    var todosSorted=todosCopy.sort(function (a,b) {
      return a.done - b.done;
    })
    return todosSorted;
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
