<template>
  <div class="modal-container">
    <div class="modal">
      <!-- Header -->
      <div class="w-full flex justify-between align-center">
        <h2 class="text-2xl text-gray-900 font-medium">
          {{ title }}
        </h2>
        <button class="btn close-btn">✕</button>
      </div>

      <!-- Search -->
      <input
        class="input"
        type="text"
        v-model="searchValue"
        :placeholder="placeholder"
      />

      <div
        v-if="items.length === 0"
        class="py-8 italic text-gray-700 text-lg text-center"
      >
        Loading...
      </div>

      <!-- Customize how the items get rendered -->
      <div class="my-4 -mx-8">
        <slot v-for="item in items" v-bind="item">
          You must provide a slot to render each item.
        </slot>
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
import ProductList from './ProductList.vue';
import useFetch from './useFetch';

export default {
  name: 'SearchModal',

  components: { ProductList },

  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  setup({ url }) {
    return {
      ...useFetch(url),
    };
  },
};
</script>
