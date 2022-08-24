import "bootstrap/dist/css/bootstrap.min.css";
export default function TableHead() {
  return (
    <thead className="table-dark">
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}
