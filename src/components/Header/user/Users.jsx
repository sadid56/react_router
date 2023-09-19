import { useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h3>thsi is a user comoponents</h3>
      <h1>Our user: {users.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
