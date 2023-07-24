import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../domain/todoSlice";
import { saveState, loadState } from "../infrastructure/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});

export type RootState = ReturnType<typeof store.getState>;
store.subscribe(() => {
  saveState(store.getState());
});
export type AppDispatch = typeof store.dispatch;
