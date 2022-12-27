<template>
    <section id="search">
      <span> <img src="@/assets/icons/search.svg" alt="lupa"></span>
      <input type="search" name="search"  placeholder="Busca por assunto..." required>
      <button> Buscar</button>
    </section>

</template>
<script scoped>
export default {
  name: 'SearchApp'
}
</script>

<style>
    #search{
      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 24px;
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 16px;

    }
    #search input{
      border: none;
      font-size: 16px;
      outline: none;
      margin-left: 10px;
    }
    #search input::placeholder{
      color: #545454;
      opacity: 1;
    }

    #search button{
      background-color: var(--main-color);
      height: 100%;
      border: none;
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      padding: 0 20px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      z-index: -1;
    }

    #search input:active ~ button,  #search input:valid ~ button{
      z-index: 3;
    }
</style>