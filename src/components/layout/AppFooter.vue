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
  background: linear-gradient(135deg, #5f3dc4 0%, #7b51c9 100%);
  padding: 2.5rem 1.5rem 1.5rem;
  border-top: 2px solid rgba(123, 81, 201, 0.3);
  color: white;
}

.footer-link {
  max-width: 1280px;
  margin: 0 auto 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 1.5rem;
}

.separado {
  color: white;
}

.separado p {
  margin: 0 0 1rem 0;
  font-weight: 600;
  font-size: 1.05rem;
}

.separado ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.3s ease;
  font-weight: 500;
}

a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.reservados {
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  footer {
    padding: 1.5rem 1rem 1rem;
  }

  .separado ul {
    gap: 1rem;
    flex-direction: column;
  }
}
</style>