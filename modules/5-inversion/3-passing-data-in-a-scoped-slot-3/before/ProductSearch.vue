<template>
  <SearchModal
    title="Product Search"
    url="/products"
    placeholder="Search for a product..."
    v-slot="{ item }"
  >
    <ProductList v-bind="item" />
  </SearchModal>
</template>

<script>
import SearchModal from './SearchModal.vue';
import ProductList from './ProductList.vue';

export default {
  name: 'ProductSearch',
  components: { SearchModal, ProductList },
};
</script>
