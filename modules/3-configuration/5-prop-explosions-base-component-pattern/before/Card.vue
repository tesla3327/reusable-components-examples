<template>
  <div class="modal-container">
    <div class="modal flex flex-col space-y-4">
      <Input
        placeholder="Type something here"
        v-model="text"
      />
    </div>
  </div>
</template>

<script>
import Input from './Input.vue';

export default {
  components: {
    Input,
  },

  data() {
    return {
      text: '',
    };
  },
};
</script>
