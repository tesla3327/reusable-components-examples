<template>
  <TagSearchModal
    title="Product Search"
    url="/products"
    placeholder="Search for a product..."
  >
    <template #default="{ item, actions }">
      <ProductList v-bind="item" v-on="actions" />
    </template>

    <template #footer> A different footer. </template>
  </TagSearchModal>
</template>

<script>
import TagSearchModal from './TagSearchModal.vue';
import ProductList from './ProductList.vue';

export default {
  name: 'ProductSearch',
  components: { TagSearchModal, ProductList },
};
</script>
