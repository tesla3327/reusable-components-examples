<template>
  <SearchModal
    title="Planet Search"
    url="/planets"
    placeholder="Search for a planet..."
    v-slot="{ item }"
  >
    {{ item.name }}
  </SearchModal>
</template>

<script>
import SearchModal from './SearchModal.vue';

export default {
  name: 'PlanetSearch',
  components: { SearchModal },
};
</script>
