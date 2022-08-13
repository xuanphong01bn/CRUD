import React from "react";
import axios from "axios";
import "./Users.scss";
import { faEye, faPenToSquare, faTrashAlt, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    Link, NavLink
} from "react-router-dom";
import ModalUser from "./ModalUser";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEdit from "./ModalEdit";
import { getAllUsers } from "../../services/userService";
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            isOpenModalUser: false,
            isOpenModalEdit: false,
            UserEdit: '',
        }
    }
    async componentDidMount() {
        let res = await getAllUsers('ALL');
        console.log('check res : ', res)
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="content">
                <div className="page-title">Danh sách người dùng</div>
                <div className="container-fluid table">
                    <div className="btn-add" style={{ float: 'left' }}>
                        <div className=" btn btn-primary col-2" style={{ float: 'left' }}
                            onClick={() => this.handleAddNewUser()}
                        >Thêm mới</div>
                    </div>
                    <div> </div>

                    {/* <div className="page-content">
                        <div className="row title ">
                            <span className="col-1 th">STT</span>
                            <span className="col-1 th">UserID</span>
                            <span className="col-1 th">Tên</span>
                            <span className="col-2 th">SĐT</span>
                            <span className="col-3 th">Email</span>
                            <span className="col-2 th">Địa chỉ</span>
                            <span className="col-2 th">Thao tác</span>
                        </div>
                        <div className="row detail-user">
                            {listUser && listUser.length > 0 &&
                                listUser.map((item, index) => {
                                    return (
                                        <>
                                            <div className="col-1 text ">{index + 1}</div>
                                            <div className="col-1 text ">{item.id} </div>
                                            <div className="col-1 text ">{item.username} </div>
                                            <div className="col-2 text ">{item.telephone}</div>
                                            <div className="col-3 text ">{item.email}</div>
                                            <div className="col-2 text">
                                                {item.address}
                                            </div>
                                            <div className="col-2">
                                                <span><button className="btn-primary edit" onClick={() => this.handleEditUser(item)} ><FontAwesomeIcon icon={faPenToSquare} /></button></span>
                                                <span>
                                                    <button className="btn-danger" onClick={() => this.handleDeleteUser(item)}><FontAwesomeIcon icon={faTrashCan} /></button>

                                                </span>
                                            </div>
                                        </>


                                    )

                                })}

                        </div>
                    </div> */}
                    <div className="table-content">
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Adress</th>
                                <th>Telephone</th>
                                <th>Action</th>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Users;