import { ref, onMounted } from "vue"
import axios from "axios"

const produtos = ref([])
const Sorvete = "produtos" // ou pode vir de props/route params

onMounted(async () => {
  try {
    const res = await axios.get(`'http://localhost:19003/api/produtos?categoria=${Sorvete}`)
    produtos.value = res.data
  } catch (err) {
    console.error("Erro ao buscar produtos:", err)
  }
})
