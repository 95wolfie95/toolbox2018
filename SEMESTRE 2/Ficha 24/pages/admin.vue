<template>
    <form @submit.prevent="submeterFormulario" class="form">

        <div class="input-control">
            <label for="">Produto</label>
            <input type="text" v-model="novoProduto.produto">
        </div>

        <div class="input-control">
            <label for="">Valor</label>
            <input type="text" v-model="novoProduto.valor">
        </div>

        <button type="submit" class="button">Enviar</button>

    </form>
</template>

<script>
import axios from 'axios';
export default {
    data (){
        return {
            novoProduto: {
                produto: '',
                valor: ''
            }
        }
    },
    methods: {
        submeterFormulario(){
            return axios.post('https://ficha22.firebaseio.com/.json', this.novoProduto);
        }
    }
}
</script>

<style scoped>
.form{
    max-width: 550px;
    box-sizing: border-box;
    margin: 30px;
    margin-top: 60px;
    padding: 30px;
    text-align: justify;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    width: 100%;
}

.button{
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #06c4d1;
    color: #06c4d1;
    text-decoration: none;
    padding: 10px 30px;
}

.button:hover,
.button:active
{
    color: #fff;
    background-color: #06c4d1;
}

.input-control{
    margin: 10px 0;
}

.input-control label{
    display: block;
    font-weight: bold;
    color: #06c4d1;
}

.input-control input{
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    padding: 5px;
}

.input-control input:focus{
    background-color: #eee;
    outline: none;
}
</style>
