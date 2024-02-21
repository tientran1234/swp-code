import axios from "axios"
export const handleApiLogin=async(user)=>{
    const res= await axios.post("https://reqres.in/api/login",user)
    return res.data;
}
export const handleApiRegister=async(user)=>{
    const res= await axios.post("https://63401a98e44b83bc73c91036.mockapi.io/user",user)
    return res.data;
}