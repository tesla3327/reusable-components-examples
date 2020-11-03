<template>
  <SearchModal
    title="Planet Search"
    url="/planets"
    placeholder="Search for a planet..."
    v-slot="{ item: { name } }"
  >
    <div class="px-8 py-2 font-bold text-lg text-gray-700">
      {{ name }}
    </div>
  </SearchModal>
</template>

<script>
import SearchModal from './SearchModal.vue';

export default {
  name: 'ProductSearch',
  components: { SearchModal },
};
</script>
