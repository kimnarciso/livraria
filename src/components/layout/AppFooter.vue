<script setup>
 import { RouterLink } from 'vue-router';
 //dnv se alguma de vcs ver isso aqui, oq vcs acham do nome Aventura IFterária? ou fica mt feio? se preferirem é so trocar

</script>


<template>
 <footer>
    <div class="footer-link">
    <nav class="separado">
        <p>Navegue pelo nosso site</p>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        <li><RouterLink to="/carrinho">Carrinho</RouterLink></li>
      </ul>
    </nav>
    </div>

    <div class="reservados">
        <p> © Alguns direitos reservados, Aventura Literária 2026</p> 
    </div>

  </footer>
  
</template>

<style scoped>
footer{
    background-color: #8A00DB;
    
}
.reservados{
    text-align: center;
    color: white;
}
.separado{
    color: white;
}
a {
  text-decoration: none;
  color: white;
  
}

</style>