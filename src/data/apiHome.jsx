import axios from "axios"

export const getHome=async()=>{
    const res= await axios.get("https://65c072d325a83926ab96506a.mockapi.io/api/home/home")
    return res.data;
}

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
  