import { useToggleMachine } from "./useToggleMachine";

const Toggler = () => {
  const [isActive, toggle] = useToggleMachine();
  // console.log("isActive", isActive);

  return <button onClick={toggle}>Click me ({isActive ? "✅" : "❌"})</button>;
};

export default Toggler;
