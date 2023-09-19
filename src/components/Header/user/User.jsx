import { Link } from "react-router-dom";

const Users = ({ user }) => {
  const { name ,id} = user;
  return (
    <div className="bg-gray-300 shadow-md rounded p-5 text-center">
      <h3>{name}</h3>
      <Link to={`/user/${id}`}>View more</Link>
    </div>
  );
};

export default Users;
