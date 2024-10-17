import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "Todo 1",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    completeTodo: (id) => {},
    deleteTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}
