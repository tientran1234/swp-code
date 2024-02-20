

import axios from "axios"

export const getListUser=async()=>{
    const res= await axios.get("https://63401a98e44b83bc73c91036.mockapi.io/user")
    return res.data;
}
export const deleteUser=async(userId)=> {
    try {
      const response = await axios.delete(`https://63401a98e44b83bc73c91036.mockapi.io/user/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const updateUser = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(`https://63401a98e44b83bc73c91036.mockapi.io/user/${userId}`, updatedUserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
   export const addUser = async (userData) => {
      try {
        const response = await axios.post('https://63401a98e44b83bc73c91036.mockapi.io/user', userData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }