export class Todo {
    done: boolean;
    id: number;
    created: string;

    constructor(public task: string) {
        this.task = task;
        this.done = false;
        this.id = Date.now();
        this.created = new Date().toLocaleString()
    }
}