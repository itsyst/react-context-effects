import { create } from "zustand";
import { TaskType } from "./TaskType";
import { mountStoreDevtool } from "simple-zustand-devtools";

/**
 * Zustand store for managing tasks.
 */
interface TaskStore {
    task: TaskType | undefined;
    tasks: TaskType[];
    addTask: (task: TaskType) => void;
    deleteTask: (taskId: number) => void;
    setTask: (task: TaskType) => void;
}

/**
 * Zustand implementation of the tasks store.
 */
const useTaskStore = create<TaskStore>((set) => ({
    task: undefined,
    tasks: [], // Initial tasks state
    setTask: (task) => set(() => ({ task: task })),
    addTask: (task) =>
        set((state) => ({
            tasks: [...state.tasks, task],
        })),
    deleteTask: (taskId) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
}));

// Development tool for debugging
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Task Store', useTaskStore);
}

export default useTaskStore;