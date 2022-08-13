import axios from "axios"

const getAllUsers = async (id) => {
    let res = await axios.get(`http://localhost:9403/api/get-all-users?id=${id}`);
    return res
}

export {
    getAllUsers,
}