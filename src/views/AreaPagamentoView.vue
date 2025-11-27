<template>
    <main class="main-pagamento">
        <div v-if="loading" class="loading-message">Carregando detalhes da compra...</div>

        <div v-else-if="compra" class="pagamento-container">
            <h1 class="titulo">💳 Finalizar Pedido #{{ compra.id }}</h1>

            <section class="resumo-compra">
                <h2>Resumo do Pedido</h2>
                <div class="detalhe-item" v-for="item in compra.itens" :key="item.id">
                    <span class="nome-produto">{{ item.produto.nome }} ({{ item.quantidade }}x)</span>
                    <span class="valor">R$ {{ (item.total).toFixed(2) }}</span>
                </div>
                <div class="total-compra">
                    <span>Total a Pagar:</span>
                    <span class="total-valor">R$ {{ (compra.total).toFixed(2) }}</span>
                </div>
            </section>

            <section class="formas-pagamento">
                <h2>Forma de Pagamento</h2>

                <div class="opcoes-pagamento">
                    <button
                        :class="{ 'ativo': tipoPagamento === 'CARTAO' }"
                        @click="tipoPagamento = 'CARTAO'">
                        <i class="fas fa-credit-card"></i> Cartão
                    </button>
                    <button
                        :class="{ 'ativo': tipoPagamento === 'PIX' }"
                        @click="tipoPagamento = 'PIX'">
                        <i class="fas fa-qrcode"></i> PIX
                    </button>
                    <button
                        :class="{ 'ativo': tipoPagamento === 'DINHEIRO' }"
                        @click="tipoPagamento = 'DINHEIRO'">
                        <i class="fas fa-money-bill-wave"></i> Dinheiro
                    </button>
                </div>

                <div class="conteudo-pagamento">
                    <div v-if="tipoPagamento === 'CARTAO'">
                        <form @submit.prevent="processarPagamento">
                            <input type="text" v-model="dadosPagamento.token_cartao" placeholder="Número do Cartão (Simulado)" required>
                            <input type="text" placeholder="Nome no Cartão" required>
                            <div class="input-group">
                                <input type="text" placeholder="MM/AA" required>
                                <input type="text" placeholder="CVV" required>
                            </div>
                        </form>
                    </div>

                    <div v-else-if="tipoPagamento === 'PIX'">
                        <p>Ao clicar em "Processar Pagamento", o PIX será gerado e você terá 15 minutos para pagar.</p>
                        <p class="aviso">ℹ️ O pagamento é uma simulação, mas o status da compra será atualizado para **FINALIZADO** no servidor.</p>
                    </div>

                    <div v-else-if="tipoPagamento === 'DINHEIRO'">
                        <p v-if="compra">Você pagará **R$ {{ (compra.total).toFixed(2) }}** no momento da entrega.</p>
                        <p class="aviso">Confirme para finalizar o pedido.</p>
                    </div>

                    <button @click="processarPagamento" :disabled="processando" class="btn-processar">
                        {{ processando ? 'Finalizando...' : 'Processar Pagamento (Simulado)' }}
                    </button>

                    <div v-if="resultadoPagamento.qr_code_pix" class="resultado-pix">
                        <h3>PIX Simulado Gerado!</h3>
                        <p>Copie e cole o código abaixo para pagar:</p>
                        <textarea readonly>{{ resultadoPagamento.qr_code_pix }}</textarea>
                        <p>Status: **{{ resultadoPagamento.status_compra }}**</p>
                    </div>

                </div>
            </section>
        </div>

        <div v-else class="erro-mensagem">
            Não foi possível carregar a compra. Verifique o ID.
            <button @click="router.push('/')">Voltar</button>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from "axios"


const router = useRouter()
const route = useRoute()
const API_BASE_URL = 'https://backend-zebrao.onrender.com/api'
const token = localStorage.getItem("psg_auth_token")

const compra = ref(null)
const loading = ref(true)
const processando = ref(false)
const tipoPagamento = ref('CARTAO')
const dadosPagamento = ref({
    token_cartao: 'simulado_token_12345'
})
const resultadoPagamento = ref({
    mensagem: '',
    status_compra: '',
    qr_code_pix: ''
})

onMounted(async () => {
    if (!token) {
        router.push('/login')
        return
    }

    const compraId = route.query.compraId;

    if (!compraId) {
        loading.value = false;
        console.error("ID da compra (compraId) não encontrado nos query parameters.")
        return;
    }

    try {
        const authHeaders = { Authorization: `Bearer ${token}` }

        const res = await axios.get(`${API_BASE_URL}/compras/${compraId}/`, { headers: authHeaders })

        compra.value = res.data
    } catch (err) {
        console.error("Erro ao carregar detalhes da compra:", err)
        compra.value = null
    } finally {
        loading.value = false
    }
})


async function processarPagamento() {
    if (!compra.value || processando.value) return

    processando.value = true
    resultadoPagamento.value = {}

    console.warn("⚠️ Simulação de Pagamento: Pulando a API de Pagamento e atualizando status via PATCH.");

    // 1. Lógica de Simulação Local (Define a resposta para a tela)
    let statusSimulado = 'PAGO (Simulado)';
    let qrCodeSimulado = null;
    let NOVO_STATUS_ID = 3; // ID 3 = PAGO (Para Cartão/Dinheiro)

    if (tipoPagamento.value === 'PIX') {
        statusSimulado = 'PENDENTE (Aguardando Pagamento Simulado)';
        NOVO_STATUS_ID = 2; // ID 2 = FINALIZADO/PENDENTE (Para PIX)
        qrCodeSimulado = `PIX_COLA_SIMULACAO_ID${compra.value.id}_VALOR${compra.value.total.toFixed(2)}`;
    }

    resultadoPagamento.value = {
        mensagem: 'Pagamento processado com sucesso (SIMULADO).',
        status_compra: statusSimulado,
        qr_code_pix: qrCodeSimulado
    }


    // 2. 🎯 ATUALIZA STATUS NO BACKEND (Limpa o Carrinho)
    try {
        const authHeaders = { Authorization: `Bearer ${token}` };

        // Faz o PATCH na compra para mudar o status de CARRINHO (1) para PAGO (3) ou FINALIZADO (2)
        await axios.patch(`${API_BASE_URL}/compras/${compra.value.id}/`, {
            status: NOVO_STATUS_ID
        }, {
            headers: authHeaders
        });

        console.log(`Status da Compra #${compra.value.id} atualizado para ID ${NOVO_STATUS_ID} com sucesso. Redirecionando...`);

    } catch (err) {
        // Se a atualização de status falhar, o carrinho NÃO foi limpo.
        console.error("Erro FATAL ao atualizar status da compra no backend:", err);
        alert("Erro ao finalizar a compra. Não foi possível limpar o carrinho. Verifique seu CompraViewSet.");
        processando.value = false;
        return;
    }

    // 3. REDIRECIONA PARA A PÁGINA DE SUCESSO (se não for PIX)
    if (compra.value && compra.value.id) {
         if (tipoPagamento.value !== 'PIX') {
             setTimeout(() => {
                router.push(`/compras-pagas`);
            }, 500);
        }
    }

    processando.value = false
}
</script>

<style scoped>.main-pagamento {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    background: #f4f2ff;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
}

.pagamento-container {
    width: 100%;
    max-width: 1100px;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;
}

/* Título */
.titulo {
    grid-column: 1 / 3;
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    color: #9d5cff;
    margin-bottom: -10px;
}

/* ======================= CARDS ======================= */
.resumo-compra,
.formas-pagamento {
    background: #ffffff;
    padding: 30px;
    border-radius: 22px;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.08);
}

/* Subtítulos */
h2 {
    font-size: 20px;
    margin-bottom: 18px;
    font-weight: 600;
    color: #6b4bb8;
}

/* ======================= RESUMO ======================= */
.detalhe-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f1f1f1;
    font-size: 15px;
}

.detalhe-item:last-child {
    border-bottom: none;
}

.total-compra {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 2px solid #e9e6f6;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
}

/* ======================= BOTÕES DE PAGAMENTO ======================= */
.opcoes-pagamento {
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
}

.opcoes-pagamento button {
    flex: 1;
    padding: 14px;
    border-radius: 14px;
    background: #f8f5ff;
    border: 2px solid transparent;
    font-weight: 600;
    cursor: pointer;
    transition: 0.25s;
}

.opcoes-pagamento button:hover {
    background: #efeaff;
}

.opcoes-pagamento button.ativo {
    background: #d9c9ff;
    border-color: #9d5cff;
    color: #4b298b;
}

/* Inputs */
.conteudo-pagamento input[type="text"] {
    background: #fafafa;
    padding: 14px;
    border-radius: 12px;
    border: 1px solid #e0dff0;
    font-size: 15px;
    margin-bottom: 12px;
}

.input-group {
    display: flex;
    gap: 12px;
}

.input-group input {
    flex: 1;
}

/* Botão principal */
.btn-processar {
    width: 100%;
    padding: 16px;
    background: #9d5cff;
    border-radius: 14px;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: 0.2s;
}

.btn-processar:hover:not(:disabled) {
    background: #8241d9;
    transform: scale(1.02);
}

.btn-processar:disabled {
    background: #c7b6f3;
    cursor: not-allowed;
}

/* PIX */
.resultado-pix {
    margin-top: 25px;
    padding: 22px;
    background: #f4f0ff;
    border-radius: 14px;
    border: 1px solid #e4dffd;
}

.resultado-pix textarea {
    width: 100%;
    height: 90px;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #ccc;
    resize: none;
}

/* ======================= TEXTOS ======================= */
.loading-message,
.erro-mensagem {
    text-align: center;
    font-size: 18px;
    padding: 40px;
    color: #a94442;
}

/* ======================= RESPONSIVIDADE ======================= */

/* Tablet */
@media (max-width: 1024px) {
    .pagamento-container {
        grid-template-columns: 1fr;
        max-width: 700px;
    }

    .titulo {
        grid-column: 1;
        text-align: center;
    }

    .opcoes-pagamento {
        flex-wrap: wrap;
    }

    .opcoes-pagamento button {
        flex: 1 1 45%;
    }
}

/* Mobile */
@media (max-width: 600px) {
    .main-pagamento {
        padding: 20px 10px;
    }

    .pagamento-container {
        gap: 20px;
    }

    .titulo {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .resumo-compra,
    .formas-pagamento {
        padding: 20px;
        border-radius: 18px;
    }

    .input-group {
        flex-direction: column;
        gap: 0;
    }

    .opcoes-pagamento {
        flex-direction: column;
    }

    .opcoes-pagamento button {
        flex: 1;
        width: 100%;
    }

    .btn-processar {
        font-size: 15px;
        padding: 14px;
    }

    .detalhe-item {
        font-size: 14px;
    }

    .total-compra {
        font-size: 18px;
    }
}

</style>
