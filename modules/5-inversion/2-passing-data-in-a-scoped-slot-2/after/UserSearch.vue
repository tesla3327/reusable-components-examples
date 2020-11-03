<template>
  <SearchModal
    title="User Search"
    url="/users"
    placeholder="Search for a user..."
  />
</template>

<script>
import SearchModal from './SearchModal.vue';

export default {
  name: 'UserSearch',
  components: { SearchModal },
};
</script>
