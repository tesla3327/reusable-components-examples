<template>
  <SearchModal
    :title="title"
    :url="url"
    :placeholder="placeholder"
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

    <template v-if="$slots.default" #default="scope">
      <slot v-bind="scope" />
    </template>

    <template #footer>
      <slot name="footer">
        Default from TagSearchModal
      </slot>
    </template>
  </SearchModal>
</template>

<script>
import SearchModal from './SearchModal.vue';

export default {
  name: 'TagSearchModal',
  components: { SearchModal },
  props: { ...SearchModal.props },
};
</script>
