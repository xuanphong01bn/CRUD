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
import { getAllUsers, addNewUser, editUserService, deleteUserService } from "../../services/userService";
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            isOpenModalUser: false,
            isOpenModalEdit: false,
            userEdit: '',
        }
    }
    async componentDidMount() {
        let res = await getAllUsers('ALL');
        console.log('check res : ', res.data.users)
        this.setState({
            listUser: res.data.users,
        })
        console.log("check list User :", this.state.listUser)
    }
    // Get all user 
    getAllUserFromReact = async () => {
        let res = await getAllUsers('ALL');
        console.log('check res : ', res.data.users)
        this.setState({
            listUser: res.data.users,
        })
        console.log("check list User :", this.state.listUser)
    }
    // Thêm User
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
        console.log(this.state.isOpenModalUser)
    }
    toggleAddNew = () => {
        this.setState({
            isOpenModalUser: false,
        })
    }
    createNewUser = async (data) => {
        console.log('check data >>>: ', data);
        await addNewUser(data)
        this.getAllUserFromReact();
    }
    // Sửa User
    handleEditUser = (item) => {
        console.log("item : >>> ", item)
        this.setState({
            isOpenModalEdit: true,
            userEdit: item,
        })
    }
    toggleEdit = () => {
        this.setState({
            isOpenModalEdit: false,
        })
    }
    editUser = async (data) => {
        console.log('data edit la: ', data)
        await editUserService(data);
        this.getAllUserFromReact();

    }
    // Xoá User
    deleteUser = async (data) => {
        console.log(data.id)

        await deleteUserService(data.id)
        this.getAllUserFromReact();
    }

    render() {
        let { listUser, isOpenModalUser, isOpenModalEdit, userEdit } = this.state;
        return (
            <div className="content">
                <ModalUser
                    isOpen={isOpenModalUser}
                    test={'abc'}
                    toggleAddNew={this.toggleAddNew}
                    createNewUser={this.createNewUser}
                />
                {isOpenModalEdit && <ModalEdit
                    isOpen={isOpenModalEdit}
                    test={'abc'}
                    user={userEdit}
                    toggleEdit={this.toggleEdit}
                    editUser={this.editUser}
                />

                    // createNewUser={this.createNewUser}
                }
                <div className="page-title">Danh sách người dùng</div>
                <div className="container-fluid table">
                    <div className="btn-add" style={{ float: 'left' }}>
                        <div className=" btn btn-primary col-2" style={{ float: 'left' }}
                            onClick={() => this.handleAddNewUser()}
                        >Thêm mới</div>
                    </div>
                    <div> </div>
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
                            {listUser && listUser.length > 0 && listUser.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.telephone}</td>
                                        <td>
                                            <div className="btn btn-warning" style={{ margin: '0 3px' }}
                                                onClick={() => this.handleEditUser(item)}
                                            >Sửa</div>
                                            <div className="btn btn-danger"
                                                onClick={() => this.deleteUser(item)}
                                            >Xoá</div>


                                        </td>
                                    </tr>
                                )

                            })

                            }

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Users;