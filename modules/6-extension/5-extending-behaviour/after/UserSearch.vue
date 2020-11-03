<template>
  <SearchModal
    title="User Search"
    url="/users"
    placeholder="Search for a user..."
    @search="(val) => (searchValue = val)"
  >
    <template
      #default="{
        item: [id, name, address, email, score],
        'delete-item': deleteItem,
      }"
    >
      <div class="px-8 py-2 flex flex-row items-center">
        <div class="w-2/5">
          <div class="text-lg font-medium">{{ name }}</div>
          <div class="text-sm font-light text-gray-700">
            {{ email }}
          </div>
        </div>
        <div class="w-2/5 text-gray-800">
          {{ address }}
        </div>
        <div class="w-1/5 flex justify-end">
          <div
            class="rounded-full font-bold w-12 h-12 flex justify-center items-center"
            :class="
              score >= 100
                ? 'bg-green-200 text-green-600'
                : 'bg-gray-200 text-gray-600'
            "
          >
            {{ Math.trunc(score) }}
          </div>
          <div class="flex items-center ml-4">
            <button
              class="btn danger-btn"
              @click="deleteItem"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <button class="btn primary-btn" @click="saveSearch">
        Save Search
      </button>
    </template>
  </SearchModal>
</template>

<script>
import SearchModal from './SearchModal.vue';
import { ref } from 'vue';

export default {
  name: 'UserSearch',
  components: { SearchModal },
  setup() {
    const searchValue = ref('');

    return {
      searchValue,
      saveSearch() {
        console.log(`Saving search: ${searchValue.value}`);
      },
    };
  },
};
</script>
