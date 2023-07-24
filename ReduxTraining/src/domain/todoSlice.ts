import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "./todoModel";

const initialState: Todo[] = [];

export const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), name: action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((Todo) => Todo.id !== action.payload);
    },
    finishTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((Todo) => Todo.id === action.payload);
      if (index !== -1) {
        state[index].isCompleted = !state[index].isCompleted;
      }
    },
  },
});

export const { addTodo, removeTodo, finishTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
