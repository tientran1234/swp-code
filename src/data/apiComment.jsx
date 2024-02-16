import axios from "axios"

export const getComment=async()=>{
    const res= await axios.get("https://65c072d325a83926ab96506a.mockapi.io/api/home/user")
    return res.data;
}
export const deleteComment=async(commentId)=> {
    console.log(commentId);
    try {
      const response = await axios.delete(`https://65c072d325a83926ab96506a.mockapi.io/api/home/user/${commentId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const updateComment = async (commentId, updatedCommentData) => {
    try {
      const response = await axios.put(`https://65c072d325a83926ab96506a.mockapi.io/api/home/user/${commentId}`, updatedCommentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
   export const addComment = async (commentData) => {
      try {
        const response = await axios.post('https://65c072d325a83926ab96506a.mockapi.io/api/home/user', commentData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }