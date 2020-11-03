<template>
  <SearchModal
    title="Product Search"
    url="/products"
    placeholder="Search for a product..."
  >
    <template
      #search="{ searchValue, search, searchByTags }"
    >
      <input
        class="input"
        type="text"
        :value="searchValue"
        placeholder="Search by tags"
        @input="
          (e) => {
            searchByTags(e.target.value);
          }
        "
      />
    </template>

    <template #default="{ item, actions }">
      <ProductList v-bind="item" v-on="actions" />
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
