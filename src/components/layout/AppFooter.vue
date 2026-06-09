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

    <div class="footer-info">
      <div class="info-section">
        <h3>Sobre Aventura Literária</h3>
        <p>Sua livraria online de confiança com os melhores títulos para todos os gostos e idades.</p>
      </div>
      <div class="info-section">
        <h3>Contato</h3>
        <p>Rua das Histórias, 123 - Centro</p>
        <p>São Paulo, SP - CEP: 01234-567</p>
        <p>Email: contato@aventuraliteraria.com</p>
      </div>
    </div>

    <div class="reservados">
        <p> © Alguns direitos reservados, Aventura Literária 2026</p> 
    </div>

  </footer>
  
</template>

<style scoped>
footer{
  background: linear-gradient(135deg, #5f3dc4 0%, #7b51c9 100%);
  padding: 3.5rem 1.5rem 2rem;
  border-top: 2px solid rgba(123, 81, 201, 0.3);
  color: white;
  border-radius: 24px 24px 0 0;
  margin-top: 3rem;
}

.footer-link {
  max-width: 1280px;
  margin: 0 auto 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
}

.separado {
  color: white;
}

.separado p {
  margin: 0 0 1.25rem 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.separado ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.footer-info {
  max-width: 1280px;
  margin: 0 auto 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 2rem;
}

.info-section h3 {
  margin: 0 0 1rem 0;
  font-size: 1.05rem;
  font-weight: 600;
}

.info-section p {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
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
    padding: 1.25rem 0.75rem 1rem;
    margin-top: 1.5rem;
  }

  .separado ul {
    gap: 1.5rem;
    flex-direction: column;
  }

  .footer-info {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 0 auto 1rem;
    padding-bottom: 1rem;
  }
}
</style>