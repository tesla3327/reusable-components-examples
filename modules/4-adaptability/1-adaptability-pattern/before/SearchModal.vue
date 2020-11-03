<template>
  <div class="modal-container">
    <div class="modal">
      <!-- Header -->
      <div class="w-full flex justify-between align-center">
        <h2 class="text-2xl text-gray-900 font-medium">
          Product Search
        </h2>
        <button class="btn close-btn">✕</button>
      </div>

      <!-- Search -->
      <input
        class="input"
        type="text"
        placeholder="Search for a product..."
      />

      <ProductList :products="products" />

      <!-- Footer -->
      <div
        class="flex justify-end bg-gray-200 -mx-8 px-8 -mb-6 py-4 rounded-b"
      >
        <button class="btn primary-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../../../../components/products.json';
import ProductList from './ProductList.vue';

export default {
  components: { ProductList },

  data() {
    return {
      products,
    };
  },
};
</script>
