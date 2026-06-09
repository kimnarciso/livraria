<script setup>
  // Este arquivo é um componente Vue que representa o cabeçalho do aplicativo, contendo a barra de navegação com links para as principais seções do site, como Home, Produtos e Carrinho. Ele é projetado para ser reutilizado em todas as páginas do aplicativo, proporcionando uma navegação consistente para os usuários.
  import { RouterLink } from 'vue-router';
 //#FFB6FF rosa claro/ #FF00AA rosa magenta /#D9A7FF lilas/#FF4DFF rosa meio sla/ #8A00DB roxo (a cara da kimberlly)

</script>



<template>
  <header>
    <nav class="links">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        <li><RouterLink to="/carrinho">Carrinho</RouterLink></li>
      </ul>
    </nav>

  
  </header>
</template>

<style scoped>
  header {
  top: 0; left: 0;
  width: 100%;
  background: linear-gradient(135deg, rgba(123, 81, 201, 0.12) 0%, rgba(95, 61, 196, 0.08) 100%);
  border-bottom: 2px solid rgba(123, 81, 201, 0.25);
  z-index: 100;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  box-shadow: 0 2px 12px rgba(95, 61, 196, 0.08);
}

nav {
  display: flex;
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #3b1a76;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  transition: all 0.3s ease;
}

a:hover {
  background: rgba(123, 81, 201, 0.15);
  color: #3f1a76;
}

.router-link-active {
  background: rgba(123, 81, 201, 0.2);
  color: #2f1747;
  font-weight: 600;
}

.lista-produtos{
  color: #5f3dc4;
}

.links ul{
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  header {
    padding: 0.75rem 1rem;
  }

  .links ul {
    gap: 0.75rem;
  }

  a {
    padding: 0.6rem 0.9rem;
    font-size: 0.95rem;
  }
}
</style>

