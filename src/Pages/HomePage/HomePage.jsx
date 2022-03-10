import React, { useEffect, useState } from "react";
import "./homePage.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import axios from "axios";

function createData(id, name, email) {
  return { id, name, email };
}

const HomePage = () => {
  const [rows, setRows] = useState([]);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    setRows(res.data);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>S.No</strong>
              </TableCell>
              <TableCell align="center">
                <strong> Name of the User</strong>
              </TableCell>
              <TableCell align="center">
                <strong> User EmailId</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell>
                  <button type="submit">
                    <Link to={"edituser/" + row.id}>Edit</Link>
                  </button>
                </TableCell>
                <TableCell>
                  <button type="submit" onClick={() => handleDelete(row.id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomePage;
