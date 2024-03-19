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
  const toggleActor = createActor(toggleMachine);
  toggleActor.subscribe((snapshot) => {
    console.log(snapshot.value); // 'inactive' or 'active'
  });
  toggleActor.start();
  // logs 'inactive'

  toggleActor.send({ type: "TOGGLE" });
  // logs 'active'

  toggleActor.send({ type: "TOGGLE" });
  // logs 'inactive'

  const isActive = useSelector(
    toggleActor,
    (snapshot) => snapshot.context.user
  );
  const toggle = () => toggleActor.send({ type: "TOGGLE" });

  return [isActive, toggle];
};
