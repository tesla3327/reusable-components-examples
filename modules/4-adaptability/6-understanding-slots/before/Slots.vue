<template>
  <div class="modal-container">
    <div class="modal">
      <h2 class="text-2xl text-gray-900 font-medium mb-8">
        Understanding Slots
      </h2>

      <Child class="mb-4">
        <span class="font-bold">Hello</span>
      </Child>

      <div
        v-html="createComponent(() => '<span class="font-bold">Hello</span>')"
      />

    </div>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: { Child },

  setup() {
    const createComponent = (slot) => `
      <div class="border border-gray-500 rounded p-4">
        Before
        ${slot()}
        After
      </div>
    `;

    return {
      createComponent,
    };
  },
};
</script>