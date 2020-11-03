<template>
  <div class="modal-container">
    <div class="modal">
      <h2 class="text-2xl text-gray-900 font-medium mb-8">
        Understanding Scoped Slots
      </h2>

      <Child class="mb-4" v-slot="{ item }">
        <div class="font-bold">{{ item }}</div>
      </Child>

      <div v-html="createScopedSlot" />
    </div>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: { Child },

  setup() {
    const createFakeComponent = (scopedSlot) => `
      <div class="border border-gray-500 rounded p-4">
        Before
        ${['One', 'Two', 'Three'].map(scopedSlot).join('')}
        After
      </div>
    `;

    const createScopedSlot = createFakeComponent(
      (item) => `<div class="font-bold">${item}</div>`
    );

    return {
      createScopedSlot,
    };
  },
};
</script>
