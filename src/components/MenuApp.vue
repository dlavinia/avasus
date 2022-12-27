<template>
  <header>
     
    <figure class="logo">
                <img src="@/assets/logo-menu.svg" alt="logo AVASUS">
          </figure>
     <img id="menu-mobile" v-on:click="openMenu" src="https://raw.githubusercontent.com/dlavinia/feliznatal/1730a7fd4a3bb7c0edca1c9e7c0b4b3c5c11419a/src/assets/menu-hamburguer.svg" alt="menu">
     <div id="menu-overlay"  v-on:click="closeMenu" v-if="menuActive"></div>
     <nav :class="{open:menuActive}">
          <figure class="logo-menu-mobile">
                <img src="@/assets/logo-menu.svg" alt="logo AVASUS">
          </figure>
          <ul>
              <li> <a href="http://localhost:8080/">Início</a></li>
              <li> <a href="#">Sobre Nós</a></li>
              <li> <a href="#">Cursos</a></li>
              <li> <a href="#">Parceiros</a></li>
              <li> <a href="#">Transparência</a></li>
              <li> <a href="#">Contato</a></li>
          </ul>
            <SearchApp></SearchApp>
            <button  class="btn btn-second"> Entrar </button>
            <button  class="btn btn-primary"> Cadastrar </button>

          
     </nav>
     
  </header>
</template>

<script>
import SearchApp from "@/components/SearchApp.vue";
export default {
  name: 'MenuApp',
  components: {
    SearchApp
  },
  data(){
      return{
          menuActive : false
      }
  },
  methods:{
      openMenu: function(){
          this.menuActive = true;
      },
      closeMenu: function(){
          this.menuActive = false;
      }
  }
}
</script>
<style scoped>
  header{
      background-color: #fff;
      display: flex;
      justify-content:center;
      align-items: center;
      padding:24px 2rem;
      width: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  }
  nav{
    display: flex;
    align-items: center;
  }
  ul{
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0 30px;
  }
  a{
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 600;
      color: var(--text-color-dark);
  }

  a:active{
    color: var(--second-color);
  }
  #menu-mobile{
      display: none;
  }
  #menu-overlay{
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 40%;
      background-color: #707070;
      opacity: .6;
  }
  .logo-menu-mobile{
    display: none;
  }
  @media only screen and (max-width: 600px) {
      #menu-mobile{
      display: block;
      width: 42px;
  }
  header{
      padding:0 1rem;
      justify-content: flex-end;

  }
  .logo img{
      width: 90%;
  }
  .logo-menu-mobile{
    display: block;
  }
  nav{
      position: fixed;
      top: 0;
      right: 0;
      width: 70%;
      height: 100vh;
      padding-top: 20%;
      background-color:#fff;
      display: none;
    
  }
  .open{
      display: block;
  }
  ul{
      flex-direction: column;
      text-align: left;
  }
  li{
      margin-top: 20px;
  }
  }
</style>