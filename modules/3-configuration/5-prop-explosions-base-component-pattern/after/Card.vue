<template>
  <div class="modal-container">
    <div class="modal flex flex-col space-y-4">
      <Input
        placeholder="Type something here"
        v-model="text"
      />
      <ReadOnlyInput
        value="This is read only"
        error-message="This is an error"
      />
    </div>
  </div>
</template>

<script>
import Input from './Input.vue';
import ReadOnlyInput from './ReadOnlyInput.vue';

export default {
  components: {
    Input,
    ReadOnlyInput,
  },

  data() {
    return {
      text: '',
    };
  },
};
</script>
