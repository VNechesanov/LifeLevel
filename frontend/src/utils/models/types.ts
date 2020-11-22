export enum Priority {
  none,
  low,
  lowPlus,
  medium,
  mediumPlus,
  high,
}

export type KeyValueObj = { [key: string]: any };

export type Data = {
  date: any;
  time: string;
  name: string;
  description: string;
  priority: Priority;
};

export type Tag = {
  name: string;
  id: string;
};

export type Goal = {
  date: any;
  name: string;
  description: string;
  tags: Tag[];
};

export type TaskItem = {
  info: Data;
  id: string;
};

export type GoalItem = {
  info: Goal;
  id: string;
};
