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
        <slot
          v-for="item in items"
          :item="item"
          :actions="{
            remove: deleteItem.bind(
              null,
              item.id !== undefined ? item.id : item[0]
            ),
          }"
        >
          <div class="flex px-8 py-1 flex-no-wrap">
            <div
              class=""
              v-for="key in Object.keys(item).filter(
                (key) => key !== 'id'
              )"
            >
              {{ item[key] }}
            </div>
          </div>
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
import { watchEffect, ref } from 'vue';
import ProductList from './ProductList.vue';
import { fetch, deleteItemById } from './fetchUtil';

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
    const items = ref([]);
    const searchValue = ref('');

    const fetchData = async () => {
      const data = await fetch(url, searchValue.value);
      items.value = data;
    };

    watchEffect(fetchData);

    const deleteItem = (id) => {
      deleteItemById(url, id);
      fetchData();
    };

    return {
      items,
      searchValue,
      deleteItem,
    };
  },
};
</script>
