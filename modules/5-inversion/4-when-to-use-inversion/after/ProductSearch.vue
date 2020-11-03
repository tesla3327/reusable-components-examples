<template>
  <SearchModal
    title="Product Search"
    url="/products"
    placeholder="Search for a product..."
    v-slot="{ name, description, image, price }"
  >
    <ProductList
      :name="name"
      :description="description"
      :image="image"
      :price="price"
    />
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
