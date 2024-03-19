import { useToggleMachine } from "./useToggleMachine";

const Toggler = () => {
  const [isActive, toggle] = useToggleMachine(false);

  return <button onClick={toggle}>Click me ({isActive ? "✅" : "❌"})</button>;
};

export default Toggler;
