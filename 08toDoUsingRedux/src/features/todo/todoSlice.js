import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      console.log(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        console.log("out : ", todo.id);
        console.log("out : ", todo.text);
        console.log("out : ", action.payload);
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        // if (todo.id === action.payload) return (todo.text = "hello");
        console.log("out : ", todo.id);
        console.log("out : ", todo.text);
        console.log("out : ", action.payload);
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
