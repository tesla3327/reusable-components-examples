<template>
  <SearchModal
    title="User Search"
    url="/users"
    placeholder="Search for a user..."
  >
    <template v-slot="[name, address, email, score]">
      Hi
    </template>
  </SearchModal>
</template>

<script>
import SearchModal from './SearchModal.vue';

export default {
  name: 'UserSearch',
  components: { SearchModal },
};
</script>
