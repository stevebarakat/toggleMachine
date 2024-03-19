import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

export const useToggleMachine = (
  initialActive: boolean = false
): [boolean, () => void] => {
  const [state, send] = useMachine(() =>
    createMachine({
      id: "toggle",
      initial: initialActive ? "active" : "inactive",
      states: {
        inactive: {
          on: { TOGGLE: "active" },
        },
        active: {
          on: { TOGGLE: "inactive" },
        },
      },
    })
  );

  const isActive = state.matches("active");
  const toggle = () => send("TOGGLE");

  return [isActive, toggle];
};
