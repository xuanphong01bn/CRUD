import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Toast } from 'reactstrap';
import { toast } from "react-toastify";
class ModalEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            telephone: '',
            email: '',
            address: '',
        }

    }
    componentDidMount() {
        console.log('Did mout ne') // ko mout thì bản chất cái modal này nó đã mout ở bên cha rồi nên ko thể mout lại nữa
        let user = this.props.UserEdit;
        // console.log('User cần sửa là : ', user);
        this.setState({
            username: user.username,
            password: user.password,
            telephone: user.telephone,
            email: user.email,
            address: user.address
        })
    }


    toggle = () => {
        // alert('me toggle')
        this.props.toggleFromParent()
    }
    handleOnchaneInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value; // do id đã đặt bằng các trường trong state

        this.setState({
            ...copyState,
        }, () => {
            console.log(copyState);
        })
    }
    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['username', 'password', 'telephone', 'address', 'email'];
        for (let i = 0; i < arrInput.length; i++) {
            console.log('Check inside loop', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert(`Missing parameter ` + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleEditUser = () => {
        try {
            let user = this.props.UserEdit;
            let isValid = this.checkValideInput();
            if (isValid === true) {
                //call API
                this.props.editUser(this.state, user.id);
            }
            toast.success('Sửa thành công')
        } catch (e) {
            console.log(e)
            toast.error('Lỗi')
        }


    }
    render() {
        let user = this.props.UserEdit;
        console.log('User cần sửa là : ', user);
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'abcClassName'}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()}>Sửa người dùng</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ">
                                    <label>Tên</label>
                                    <div ><input type="text" style={{ width: '100%' }} value={this.state.username}
                                        onChange={(event) => this.handleOnchaneInput(event, "username")}

                                    /></div>

                                </div>
                                <div className="col-6 ">
                                    <label>Password</label>
                                    <div><input type="password" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "password")}
                                        value={this.state.password}
                                    /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 ">
                                    <label>SĐT</label>
                                    <div><input type="text" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "telephone")}
                                        value={this.state.telephone}
                                    /></div>

                                </div>
                                <div className="col-6 ">
                                    <label>Địa chỉ</label>
                                    <div><input type="text" style={{ width: '100%' }} value={this.state.address}
                                        onChange={(event) => this.handleOnchaneInput(event, "address")}

                                    /></div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <label>Email</label>
                                    <div><input type="email" style={{ width: '100%' }}
                                        onChange={(event) => this.handleOnchaneInput(event, "email")}
                                        value={this.state.email}
                                    /></div>

                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleEditUser()}>Lưu lại</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }
}
export default ModalEdit;