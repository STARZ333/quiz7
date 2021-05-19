import React from "react";
import Sign_in from "./sign_in";
class ToDoAddForm extends React.Component {
    todoRef = React.createRef();

    addItemOnList = e => {
        e.preventDefault();
        const todoItem = {
            todo: this.todoRef.current.value,
            isCompleted: false
        };
        this.props.addToDoItems(todoItem);
        e.currentTarget.reset();
    };

    render() {
        return (
            <form id="todoList-form" onSubmit={this.addItemOnList}>
            <input type="text" name="todosTxtbx" ref={this.todoRef} required />
            <button>Add</button>
            </form>
        );
    }
}

export default ToDoAddForm;