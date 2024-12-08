<template>
  <div v-if="product" class="container">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="product.title" class="img-fluid">
    <p>{{ product.description }}</p>

    <div class="card-body">
      <p class="product-price"><strong>${{ product.price }}</strong></p>

      <!-- Container dos botões -->
      <div class="btn-container">
        <button class="btn btn-primary">Comprar</button>
        <button class="btn btn-secondary">Adicionar ao Carrinho</button>
        <button class="btn btn-success">Favoritar</button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ProductDetails',
    computed: {
      ...mapGetters(['singleProduct']),
      product() {
        return this.singleProduct;
      },
    },
    methods: {
      ...mapActions(['fetchProduct']),
    },
    created() {
      this.fetchProduct(this.$route.params.id);
    },
  };
  </script>
  
  <style scoped>
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>