<template>
  <div class="modal-container">
    <div class="modal">
      <h2 class="text-2xl text-gray-900 font-medium">
        Review Order
      </h2>

      <ProductList :products="productsInCart" />

      <!-- Total -->
      <div class="flex items-end justify-end text-lg">
        <span class="mr-8 text-gray-700"
          >Total (before tax)</span
        >
        <span class="font-bold text-gray-600"
          >${{ totalPrice }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import products from '../../../../components/products.json';
import ProductList from './ProductList.vue';

export default {
  components: { ProductList },
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      products,
    };
  },
  computed: {
    productsInCart() {
      return products.filter((item) => item.inCart);
    },

    totalPrice() {
      return this.productsInCart.reduce(
        (prev, next) => prev + next.price,
        0
      );
    },
  },
};
</script>
