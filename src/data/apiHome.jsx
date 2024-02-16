import axios from "axios"

export const getHome=async()=>{
    const res= await axios.get("https://65c072d325a83926ab96506a.mockapi.io/api/home/home")
    return res.data;
}
<<<<<<< HEAD
export const deleteHome=async(homeId)=> {
  console.log(homeId);
  try {
    const response = await axios.delete(`https://65c072d325a83926ab96506a.mockapi.io/api/home/home/${homeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export const updateHome = async (homeId, updatedHomeData) => {
  try {
    const response = await axios.put(`https://65c072d325a83926ab96506a.mockapi.io/api/home/home/${homeId}`, updatedHomeData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
 export const addNewHome = async (homeData) => {
    try {
      const response = await axios.post('https://65c072d325a83926ab96506a.mockapi.io/api/home/home', homeData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
=======
>>>>>>> e19f59e2a9418f6aaf0af7ff1fc96e84f9a23a2e

export const getHomeDetail=async(homeId)=> {
    try {
      const response = await axios.get(`https://65c072d325a83926ab96506a.mockapi.io/api/home/home/${homeId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const getUser=async()=>{
    const res= await axios.get("https://65c072d325a83926ab96506a.mockapi.io/api/home/user")
    return res.data;
}
<<<<<<< HEAD
  // export const addNewFilm = async (filmData) => {
  //   try {
  //     const response = await axios.post('https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket', filmData);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // export const updateFilm = async (filmId, updatedFilmData) => {
  //   try {
  //     const response = await axios.put(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket/${filmId}`, updatedFilmData);
  //     // console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
=======
  export const addNewFilm = async (filmData) => {
    try {
      const response = await axios.post('https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket', filmData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const updateFilm = async (filmId, updatedFilmData) => {
    try {
      const response = await axios.put(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/ticket/${filmId}`, updatedFilmData);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
>>>>>>> e19f59e2a9418f6aaf0af7ff1fc96e84f9a23a2e
  