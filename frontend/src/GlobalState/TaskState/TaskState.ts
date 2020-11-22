import createGlobalState from "react-use/lib/createGlobalState";

import { TaskItem } from "src/utils";

export const useTasks = createGlobalState<TaskItem[]>([]);
