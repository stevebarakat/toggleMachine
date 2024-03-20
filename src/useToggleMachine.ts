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
    isActive = snapshot.matches("active");
    console.log("isActive", isActive);
  });
  toggleActor.start();

  const toggle = () => toggleActor.send({ type: "TOGGLE" });

  return [isActive, toggle];
};
