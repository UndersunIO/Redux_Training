import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  name: string;
}

const initialState: Todo[] = [];
const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), name: action.payload });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((Todo) => Todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
