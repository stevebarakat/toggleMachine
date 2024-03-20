import { useToggleMachine } from "./useToggleMachine";

const Toggle = () => {
  const [isActive, toggle] = useToggleMachine();

  return <button onClick={toggle}>Click me ({isActive ? "✅" : "❌"})</button>;
};

export default Toggle;
