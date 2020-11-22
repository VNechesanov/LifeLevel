import createGlobalState from "react-use/lib/createGlobalState";

import { GoalItem } from "src/utils";

export const useGoals = createGlobalState<GoalItem[]>([]);
