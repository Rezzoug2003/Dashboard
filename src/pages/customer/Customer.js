import React from "react";
import "./customer.scss";
import custmorImager from "../../assets/4814852.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export const Customer = () => {
  return (
    <div className="Customer">
      <div className="container">
        <div className="title">
          <img src={custmorImager} alt="" />
          <h2>Customer</h2>
        </div>

        <span>Customer list:</span>
        <div className="Add">
          <Link to="addCustomer" className="link">
            <Button>Add</Button>
          </Link>
          <div className="search">
            <input type="text" placeholder="searsh" />
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
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Bial Rezzoug</td>
              <td>BialRezzoug@gmail.com</td>
              <td>0663412941</td>
              <td>
                <Link to={"/customerUpdate"}>
                  <button>
                  <EditIcon />
                </button>
                </Link>
                
                <button>
                  <DeleteIcon />
                </button>
              </td>
            </tr>
         
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
