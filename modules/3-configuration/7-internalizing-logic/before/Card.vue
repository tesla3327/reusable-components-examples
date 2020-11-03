<template>
  <div class="modal-container">
    <div class="modal flex flex-col space-y-4">
      <Thumbnail src="../../../../images/coffee.jpg" />
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
