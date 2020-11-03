<template>
  <SearchModal
    title="Product Search"
    url="/products"
    placeholder="Search for a product..."
  >
    <template
      #default="{
        item,
        actions,
      }"
    >
      <ProductList v-bind="item" v-on="actions" />
    </template>

    <template
      #search="{ searchValue, placeholder, searchByString }"
    >
      <input
        class="input"
        type="text"
        :search-value="searchValue"
        placeholder="placeholder"
        @input="(e) => searchByString(e.target.value)"
      />
    </template>
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
