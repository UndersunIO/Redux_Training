import Todo from "./todoModel";
import todoReducer, { addTodo, removeTodo } from "./todoSlice";

describe("Reducteur : Todo ", () => {
  const initialState: { id: number; name: string; isCompleted: false }[] = [];

  it("Gestion de letat initial", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual([]);
  });

  it("Gestion d'ajout de taches", () => {
    const actual = todoReducer(initialState, addTodo("tache 01"));
    expect(actual).toHaveLength(1);
    expect(actual[0]).toEqual(expect.objectContaining({ name: "tache 01" }));
  });

  it("Gestion de suppression de taches", () => {
    const initial: Todo[] = [
      { id: 0, name: "tache 01", isCompleted: false },
      { id: 1, name: "tache 02", isCompleted: false },
    ];
    const actual = todoReducer(initial, removeTodo(0));
    expect(actual).toEqual([{ id: 1, name: "tache 02", isCompleted: false }]);
  });
});
