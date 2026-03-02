import Form from "./Form";
import User from "./components/User";
const App = () => {
  return (
    <>
      <h1>App</h1>

      {/* User Component */}
      <User name="xyz" age={33} />

      <hr />

      {/* Form Component */}
      <Form />
    </>
  );
};

export default App;