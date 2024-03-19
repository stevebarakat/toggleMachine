import { useToggleMachine } from "./useToggleMachine";

const Toggler = () => {
  const [isActive, toggle] = useToggleMachine();

  return <button onClick={toggle}>Click me ({isActive ? "✅" : "❌"})</button>;
};

export default Toggler;
