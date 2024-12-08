<template>
  <div class="container">
    <h1 class="my-4 text-center">Métricas</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title d-flex align-items-center">
              <span>Total de Produtos:</span>
              <span class="ms-2">{{ totalProducts }}</span> 
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title d-flex align-items-center">
              <span>Total de Categorias:</span>
              <span class="ms-2">{{ totalCategories }}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'Overview',
    computed: {
      ...mapGetters(['allProducts', 'allCategories']),
      totalProducts() {
        return this.allProducts.length;
      },
      totalCategories() {
        return this.allCategories.length;
      },
    },
    methods: {
      ...mapActions(['fetchProducts', 'fetchCategories']),
    },
    created() {
      this.fetchProducts();
      this.fetchCategories();
    },
  };
  </script>
  