import { useState } from "react";

import { Data, Priority } from "src/utils";

const useAddTaskModalWindow = (): [
  Data,
  (date: any) => void,
  (time: string) => void,
  (name: string) => void,
  (description: string) => void,
  (priority: Priority) => void
] => {
  const [date, setDate] = useState<any>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(Priority.none);

  return [
    { date, time, name, description, priority },
    setDate,
    setTime,
    setName,
    setDescription,
    setPriority,
  ];
};

export default useAddTaskModalWindow;
