import { useMachine, useSelector } from "@xstate/react";
import { createMachine, createActor } from "xstate";

const toggleMachine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
    },
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
    },
  },
});

export const useToggleMachine = (): [boolean, () => void] => {
  let isActive = false;
  const toggleActor = createActor(toggleMachine);
  toggleActor.subscribe((snapshot) => {
    console.log(snapshot.value); // 'inactive' or 'active'
    isActive = snapshot.value === "active";
  });
  toggleActor.start();
  // logs 'inactive'

  const toggle = () => toggleActor.send({ type: "TOGGLE" });

  return [isActive, toggle];
};
