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

      <!-- Items -->
      <div class="my-4 -mx-8">
        <div
          v-for="{
            name,
            image,
            description,
            price,
          } in products"
          :key="name"
          class="item space-x-6"
        >
          <img
            class="rounded-full w-24 h-24 object-cover border border-gray-500 shadow-md"
            :src="image"
          />
          <div class="flex flex-col justify-center flex-1">
            <span class="text-lg text-gray-900">
              {{ name }}
            </span>
            <span
              class="mt-1 leading-tight font-light text-gray-700"
            >
              {{ description }}
            </span>
          </div>
          <div class="text-lg text-gray-600 font-bold">
            ${{ price }}
          </div>
        </div>
      </div>

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
