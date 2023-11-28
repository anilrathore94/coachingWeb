import React, { useEffect, useState } from "react";
// import AuthService from "../../../api/services/AuthService";
// import { alertErrorMessage, alertSuccessMessage } from "../../../customComponent/CustomAlertMessage";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { CSVLink } from "react-csv";
import { $ } from 'react-jquery-plugin';
import moment from "moment";
import Select from "react-select";
import { getAllSubadmins, subadminDelete, subadminStatusChange, subadminUpdate } from "../../../services/subadmin.service";
import { ResultFunction } from "../../../comman/resultFunction";
import { Toaster } from "react-hot-toast";

const SubAdmin = () => {
    const { SearchBar } = Search;
    const [subAdminList, setSubAdminList] = useState([]);
    const [subadminId, setSubadminId] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [gander, setGander] = useState('Male');
    const [dob, setDob] = useState('');
    const [multipleSelectd, setMultipleSelectd] = useState([]);

    useEffect(()=>{
        getsubadmins()
    },[])
    const getsubadmins = async() => {
        let get = await getAllSubadmins()
        if(get.status && get.data.length>0){
            setSubAdminList(get.data)
        }
    }

    const linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <>
                <button className="btn btn-dark btn-sm me-2" data-bs-toggle="modal" data-bs-target="#update_subadmin" onClick={() => handleSubadminDetail(row)}>Edit</button>
                <button className="btn btn-danger  btn-sm" onClick={() => deleteSubAdmin(row?._id)}>Delete</button>
            </>
        );
    };

    const statuslinkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <>
                <button class={row?.active === "1" ? "btn btn-sm btn-success" : "btn btn-sm btn-danger"} style={{ marginLeft: "20px" }} onClick={() => handleStatus(row?._id, cell === "0" ? "1" : "0")}>{row?.active === "1" ? "Active" : "Inactive"}</button>
            </>
        );
    };

    const dateFilter = (cell, row, rowIndex, formatExtraData) => {
        return (
            <>
                {moment(row?.createdAt).format('MMMM Do YYYY')}
            </>
        );
    };

    const handleStatus = async (userId, cell) => {
        let data = {
            id:userId,
            status:cell
        }
       let status = await subadminStatusChange(data)
       ResultFunction(status,getsubadmins)
    }

    const handleSubadminDetail = (id) => {
        setFirstName(id.first_name);
        setLastName(id.last_name);
        setEmail(id.email);
        setPhone(id.phone);
        setGander(id.gender);
        setDob(id.dob);
        setMultipleSelectd(id.permissions);
        setSubadminId(id._id);
    }

    const columns = [
        { dataField: 'first_name', text: 'Name' },
        { dataField: 'email', text: 'Email', sort: true, },
        { dataField: 'phone', text: 'Mobile Number', sort: true, },
        { dataField: 'createdAt', text: 'Registration Date', sort: true, formatter: dateFilter },
        { dataField: 'active', text: 'Status', sort: true, formatter: statuslinkFollow },
        { dataField: 'Action', text: 'Action', formatter: linkFollow },
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 7,
        lastPageText: '>>',
        firstPageText: "<<",
        nextPageText: ">",
        prePageText: "<",
        showTotal: true,
        alwaysShowAllBtns: true,
    });

    useEffect(() => {
        handleSubadmin()
    }, []);

    const handleSubadmin = async () => {
        // await AuthService.getSubAdminList().then(async result => {
        //     if (result.data.length > 0) {
        //         try {
        //             setSubAdminList(result.data.reverse());
        //         } catch (error) {
        //             // alertErrorMessage(error);
        //         }
        //     } else {
        //         /* alertErrorMessage("Something Went Wrong"); */
        //     }
        // });
    }

    const deleteSubAdmin = async (userId) => {
        let data = {
            id:userId
        }
        let result = await subadminDelete(data)
        ResultFunction(result,getAllSubadmins)
    }

    const resetEditInput = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setGander("");
        setDob("");
    }

    const handleUpdateSubadminList = async (firstName, lastName, email, phone, gander, dob, subadminId, multipleSelectd) => {
        let data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            gender: gander,
            dob: dob,
            _id: subadminId,
            permissions: multipleSelectd
        }
        let result = await subadminUpdate(data)
        $('#update_subadmin').modal('hide');
        ResultFunction(result,getsubadmins)
      
    }


    var multipleSelect = [
        {
            value: 0,
            label: 'Dashboards'
        },
        {
            value: 1,
            label: 'Users Management'
        },
        {
            value: 2,
            label: 'Category Management'
        },
        {
            value: 3,
            label: 'Poster Management'
        },
        {
            value: 4,
            label: 'Books Management'
        },
        {
            value: 5,
            label: 'News Management'
        },
        {
            value: 6,
            label: 'Exam Management'
        }
    ];

    console.log(multipleSelectd, 'multipleSelectd');

    return (
        <>
            <div id="layoutSidenav_content">
                <main>
                    <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                        <div className="container-xl px-4">
                            <div className="page-header-content pt-4">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto mt-4">
                                        <h1 className="page-header-title">
                                            <div className="page-header-icon"><i className="far fa-user"></i></div>
                                            Sub Admin List
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Main page content */}
                    <div className="container-xl px-4 mt-n10">
                        <div className="card mb-4">
                            <div class="card-header">Sub Admin Details
                                {subAdminList.length === 0 ? "" :
                                    <div class="dropdown">
                                        <button class="btn btn-dark btn-sm dropdown-toggle" id="dropdownFadeInUp" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Export </button>
                                        <div class="dropdown-menu animated--fade-in-up" aria-labelledby="dropdownFadeInUp">
                                            <CSVLink data={subAdminList} class="dropdown-item">Expoprt as CSV</CSVLink>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="card-body mt-3">
                                <table className="" width="100%" >
                                    {subAdminList.length === 0 ? <h6 className="ifnoData"><img src="assets/img/no-data.png" /> <br /> No Data Available</h6> :
                                        <ToolkitProvider
                                            hover
                                            bootstrap4
                                            keyField='id'
                                            columns={columns}
                                            data={subAdminList}
                                            exportCSV
                                            search={{
                                                afterSearch: (newResult) => console.log(newResult)
                                            }}
                                        >
                                            {
                                                props => (
                                                    <React.Fragment>
                                                        <SearchBar {...props.searchProps} />
                                                        <BootstrapTable
                                                            hover
                                                            bootstrap4
                                                            keyField='id'
                                                            columns={columns}
                                                            data={subAdminList}
                                                            pagination={pagination}
                                                            filter={filterFactory()}
                                                            {...props.baseProps}
                                                        />
                                                    </React.Fragment>
                                                )
                                            }
                                        </ToolkitProvider>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* sub admin edit Pair modal data */}
            <div class="modal" id="update_subadmin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog  modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">
                                Edit Sub Admin Details
                            </h5>
                            {/* <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body">
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-4">
                                        <label class="small mb-1" for="inputFirstName">First name <em>*</em></label>
                                        <input class="form-control  form-control-solid" id="inputFirstName" type="text" placeholder="Enter your first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="small mb-1" for="inputLastName">Last name <em>*</em> </label>
                                        <input class="form-control form-control-solid" id="inputLastName" type="text" placeholder="Enter your last name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="small mb-1" for="inputBirthday">Gander <em>*</em></label>
                                        <select class="form-control form-control-solid" id="exampleFormControlSelect1" value={gander} onChange={(event) => setGander(event.target.value)} >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputEmailAddress">Email</label>
                                        <input class="form-control form-control-solid" id="inputEmailAddress" type="email" placeholder="Enter your email address" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLocation">Phone Number</label>
                                        <input class="form-control form-control-solid" id="inputLocation" type="text" placeholder="Enter your Number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                    </div>
                                </div>

                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputLocation">Date of Birth</label>
                                        <input class="form-control form-control-solid" id="inputLocation" type="date" placeholder="Enter your Date of Birth" value={dob} onChange={(event) => setDob(event.target.value)} />
                                    </div>
                                    <div className="col-md-6" >
                                        <label className="small mb-1" for="inputLocation">Permissions</label>
                                        <Select isMulti options={multipleSelect}
                                            onChange={setMultipleSelectd}
                                            value={multipleSelectd}
                                        >
                                        </Select>
                                    </div>
                                </div>
                                <button class="btn btn-indigo" type="button" onClick={() => handleUpdateSubadminList(firstName, lastName, email, phone, gander, dob, subadminId, multipleSelectd)}> Submit Details </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* sub admin edit modal data */}
            <Toaster/>
        </>

    )
}

export default SubAdmin;