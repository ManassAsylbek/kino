export interface Todo {
    id: string;
    date: string;
    title: string;
    isDone: boolean;
}

export interface TaskBoard {
    [key: string]: IColumn;
}


export interface IColumn {
    id?: number;
    date: string;
    title: string;
    description:string
    board: Todo[];
}


