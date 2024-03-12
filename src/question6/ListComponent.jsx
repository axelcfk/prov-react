import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./usersSlice";

export default function ListComponent() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.users.list);
  console.log(user);

  function handleAddUser() {
    dispatch(addUser(input));
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddUser}>Lägg till</button>
      <ul className="flex flex-col">
        {user.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}
