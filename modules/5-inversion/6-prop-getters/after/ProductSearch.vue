<template>
  <SearchModal
    title="Product Search"
    url="/products"
    placeholder="Search for a product..."
    v-slot="{
      item,
      actions,
    }"
  >
    <ProductList v-bind="item" v-on="actions" />
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
