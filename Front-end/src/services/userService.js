import axios from "axios"

const getAllUsers = async (id) => {
    let res = await axios.get(`http://localhost:9403/api/get-all-users?id=${id}`);
    return res
}
const addNewUser = async (data) => {
    return await axios.post('http://localhost:9403/api/create-new-user', data)
}
const editUserService = async (data) => {
    return await axios.put('http://localhost:9403/api/edit-user', data)
}
const deleteUserService = async (id) => {
    return await axios.delete('http://localhost:9403/api/delete-user',
        {
            data: { id: id },
        }
    )
}
export {
    getAllUsers, addNewUser, editUserService, deleteUserService
}