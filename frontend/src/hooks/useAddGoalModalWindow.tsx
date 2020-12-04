import { useState } from "react";

import { Goal, Tag } from "src/utils";

const useAddGoalModalWindow = (): [
  Goal,
  (date: any) => void,
  (name: string) => void,
  (description: string) => void,
  (tags: Tag[]) => void
] => {
  const [date, setDate] = useState<any>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);

  return [
    { date, name, description, tags },
    setDate,
    setName,
    setDescription,
    setTags,
  ];
};

export default useAddGoalModalWindow;
