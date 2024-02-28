import React from "react";
import { useState } from "react";
import "./drivers.scss";
import driversImager from "../../assets/8583437.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export const Drivers = () => {
  let [list, setList] = useState([
    {
      number: 0,
      userName: "Younes",
      email: "byounes.staiv@gmail.com",
      phone: "0794385793",
    },
    {
      number: 1,
      userName: "farouk",
      email: "farouk.houssem@gmail.com",
      phone: "0676896524",
    },
  ]);
  let [realData, setRealData] = useState(list);

  let handelDelete = (i) => {
    let newList = list.filter((v) => v.number !== i);
    let count = 0;
    newList.forEach((value) => {
      value.number = count;
      count++;
    });
    setList(newList);
    setRealData(newList);
  };
  let handelChange = (e) => {
    let filtredData = realData.filter(
      (value) =>
        value.userName.toLocaleLowerCase().includes(e.target.value) ||
        value.email.toLocaleLowerCase().includes(e.target.value) ||
        value.phone.toLocaleLowerCase().includes(e.target.value)
    );
    setList(filtredData);
  };
  return (
    <div className="Drivers">
      <div className="container">
        <div className="title">
          <img src={driversImager} alt="" />
          <h2>Drivers</h2>
        </div>

        <span>Drivers list:</span>
        <div className="Add">
          <Link to="addCustomer" className="link">
            <Button>Add</Button>
          </Link>
          <div className="search">
            <input
              type="text"
              placeholder="searsh"
              onChange={(e) => handelChange(e)}
            />
            <SearchIcon />
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            {list.map((value, index) => (
              <tr key={index}>
                <td>{value.number}</td>
                <td>{value.userName}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>
                  <Link to={"/dashboard/driverUpdate"}>
                    <button>
                      <EditIcon />
                    </button>
                  </Link>

                  <button onClick={() => handelDelete(index)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="Pagenation">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={10}
            previousLabel="<"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};
