export enum Priority {
  none,
  low,
  lowPlus,
  medium,
  mediumPlus,
  high,
}

export type Data = {
  date: any;
  time: string;
  name: string;
  description: string;
  priority: Priority;
};

export type TaskItem = {
  taskInfo: Data;
  id: string;
};
