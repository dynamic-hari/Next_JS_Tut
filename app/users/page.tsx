import React from "react";

interface UserInterface {
  id: number;
  name: string;
}
const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersList: UserInterface[] = await res.json();

  return (
    <div>
      User Page
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
