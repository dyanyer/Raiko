import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Raiko Admin</h2>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">User Management</Link>
        </li>
        <li>
          <Link to="/admin/listings">Listing Management</Link>
        </li>
        <li>
          <Link to="/admin/transactions">Transaction Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
