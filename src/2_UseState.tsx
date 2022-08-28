import { useState } from "react";
import "./App.css";
import { User } from "./interfaces";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Ryan Kim",
      age: 28,
      country: "South Korea",
      address: {
        street: "Main st.",
        number: 88,
        zip: 21345,
      },
      admin: false,
    });
  return (
    <>
      <button onClick={fetchUser}>Fetch user</button>
      {user && <p>{`Welcome ${user.name}`}</p>}
    </>
  );
}

export default App;
