<template>
  <div>
    <header class="main-header">
      <nav class="main-nav">
        <ul class="nav-links">
          <nuxt-link to="/" tag="li" class="nav-link">
            <a>Home</a>
          </nuxt-link>
        </ul>
      </nav>
    </header>
    <br>
    <br>
    <br>
  <div class="app">

    <div class="listProdutos">
      <app-ficha-produto v-for= "(artigo, index) in artigos" :key="index" :produto="artigo.produto" :valor="+artigo.valor" v-on:click.native="carregaCarrinho(artigo)" style="cursor: pointer;" />
    </div>

    <div class="listaCarrinhoCompras">
      <br>
      <h2>Carrinho de Compras</h2>
      {{ultimaCompra | formatDate}} - {{ sum() }} €
      <app-ficha-produto v-for="(artigo, index) in carrinhoCompras" :key="index" :produto="artigo.produto" :valor="+artigo.valor" v-on:click.native="descarregaCarrinho(artigo)" style="cursor: pointer;"/>
    </div>

  </div>
  </div>
</template>

<script>
import appFichaProduto from '@/components/produto/app-ficha-produto';
import axios from 'axios';
export default{
  components: {
    appFichaProduto
  },
  data (){
    return {
      carrinhoCompras: [],
      ultimaCompra: false
    }
  },
  filters: {
    formatDate(inputDate){
    if (!!inputDate){
        const months= [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ]
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const num = month;
        const formattedDate = day + " de " + months[month] + " de " + year + " às " + hour + ":" + min;
        return formattedDate; } else {return 'Nenhuma compra efectuada'}
  }
  },
  methods:{
    carregaCarrinho(artigo){
      this.carrinhoCompras.unshift({...artigo, dataCompra: new Date()});
      this.ultimaCompra = this.carrinhoCompras[0].dataCompra;
    },
    descarregaCarrinho(artigo){
      this.carrinhoCompras.splice(artigo,1);
    },
    sum(){
      if (this.carrinhoCompras.length < 1){
        return 0;
      } else{
        return this.carrinhoCompras.map( (a) => Math.floor(a.valor)). reduce((a,b)=> {return a+b});
      }
    }
  },
  asyncData(){
    return axios.get("https://umartigos.firebaseio.com/.json").then(res => {
        return { artigos: res.data }
      })
  }
}
</script>

<style scoped>
.app{
  margin-top: 4.5rem;
  display: flex;
  align-items: row;
  justify-content: space-around;
}

.listaProdutos{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.listaCarrinhoCompras{
  display: flex;
  min-width: 500px;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #06c4d1;
  background-color: #eee;
}
</style>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<style scoped>
  .main-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
    height: 4.5rem;
  }

  .main-nav{
    height: 100%;
  }

  .nav-links{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
  }

  .nav-link a{
    display: block;
    text-decoration: none;
    color: white;
  }

  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.nuxt-link-exact-active a{
    color: #06c4d1;
  }

  .nav-link.nuxt-link-exact-active {
    border-bottom: 3px solid #06c4d1;
  }
</style>
