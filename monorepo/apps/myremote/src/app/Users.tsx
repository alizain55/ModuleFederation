import UsersTable from "./usersTable";


const users = [
  { id: 1, name: 'Ali Zain 1213', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Junaid Akhtar 123', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Ahmed Babar', email: 'alice@example.com', role: 'Editor' },
];

export function Users() {
  return (
    <div>
      <h1>User List</h1>
      <UsersTable users={users} />
    </div>
  );
}

export default Users;
