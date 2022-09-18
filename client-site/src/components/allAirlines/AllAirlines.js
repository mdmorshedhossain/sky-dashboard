import React, { useState } from 'react';
import airplane_img from "../../images/airplane_img.png";
import { TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { useEffect } from 'react';

const AllAirlines = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allAirlines')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            console.log(data);
        })
    },[])


    // const [users, setUsers] = useState(JsonData.slice(0, 39));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item, id) => {
            return (
                <>
                    {/* <h3>{user.firstName}</h3>
                    <h3>{user.lastName}</h3>
                    <h3>{user.email}</h3> */}
                    <div key={id} className="col-md-4">
                        <div className="airlines_card">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="airlines_title">{item.name}</h6>
                                    <div className="airlines_add">
                                        <ul className="list-unstyled">
                                            <li>
                                                <span className="d-flex align-items-start ">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p>{item.location}</p>
                                                </span>

                                            </li>
                                            <li>
                                                <span className="d-flex align-items-start ">
                                                    <i className="fa-solid fa-phone"></i>
                                                    <p>{item.telephone}</p>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="d-flex align-items-start ">
                                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                                    <p>{item.phone}</p>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="d-flex align-items-start ">
                                                    <i className="fa-solid fa-envelope"></i>
                                                    <p>{item.email}</p>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="d-flex align-items-start ">
                                                    <i className="fa-solid fa-globe"></i>
                                                    <p>{item.website}</p>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div className="bg__body">
            <div className="banner_img">
                <img src={airplane_img} className="img-fluid" alt="airplane_img" />
                <div className="banner_img_text">
                    <h3 className="text-white">All Airlines</h3>
                </div>
            </div>
            <div className="container mb-5 pt-2" >
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-md-end">
                            <div className="row mb-3">
                                <label htmlFor="inputSearch" className="col-sm-3 col-form-label col-form-label-sm">Search</label>
                                <div className="col-sm-9">
                                    <div className="rb_search" id="inputSearch">
                                        <TextField
                                            fullWidth
                                            id="standard-bare"
                                            variant="outlined"
                                            placeholder="Search"
                                            InputProps={{
                                                startAdornment: (
                                                    <IconButton>
                                                        <SearchOutlined />
                                                    </IconButton>
                                                ),
                                            }}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-5 g-4">
                    {displayUsers}
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <div className="pt-4 d-flex justify-content-center mb-1">
                            <nav className="allroom_pagination" aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item px-1">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&lt;</span>
                                        </a>
                                    </li>
                                    <li className="page-item px-1"><a className="page-link link_no" href="#">1</a></li>
                                    <li className="page-item px-1"><a className="page-link link_no" href="#">2</a></li>
                                    <li className="page-item px-1"><a className="page-link link_no" href="#">...</a></li>
                                    <li className="page-item px-1"><a className="page-link link_no" href="#">3</a></li>
                                    <li className="page-item px-1">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&gt;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AllAirlines;
