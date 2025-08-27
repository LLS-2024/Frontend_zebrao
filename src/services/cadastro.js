import axios from 'axios'

const API_URL = 'https://backend-zebrao.onrender.com/api' 

export async function cadastrarUsuario(usuario) {
  try {
    const response = await axios.post(`${API_URL}/usuarios/`, usuario)
    return response.data
  } catch (error) {
    throw error.response?.data || error
  }
}