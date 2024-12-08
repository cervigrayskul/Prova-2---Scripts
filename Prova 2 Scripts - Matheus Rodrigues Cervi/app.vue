<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Loja e Companhia</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/dash">Métricas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Produtos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/carts">Carrinho</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Usuários</router-link>
            </li>
            <!-- <li class="nav-item ml-auto">
              <router-link class="nav-link" to="/">Login</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
