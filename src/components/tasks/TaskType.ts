/**
 * Represents a task with an id and a title.
 * @interface TaskType
 */
export interface TaskType {
    /**
     * The unique identifier for the task.
     * @type {number}
     */
    id: number;

    /**
     * The title of the task.
     * @type {string}
     */
    title: string;
}
