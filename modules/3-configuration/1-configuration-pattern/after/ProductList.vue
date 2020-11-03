<template>
  <!-- Items -->
  <div class="my-4 -mx-8">
    <div
      v-for="{ name, image, description, price } in products"
      :key="name"
      class="item"
      :class="compact ? 'space-x-3 compact' : 'space-x-6'"
    >
      <img
        class="rounded-full object-cover border border-gray-500 shadow-md"
        :class="compact ? 'w-16 h-16' : 'w-24 h-24'"
        :src="image"
      />
      <div class="flex flex-col justify-center flex-1">
        <span class="text-lg text-gray-900">
          {{ name }}
        </span>
        <span
          v-if="!compact"
          class="mt-1 leading-tight font-light text-gray-700"
        >
          {{ description }}
        </span>
      </div>
      <div class="text-lg text-gray-600 font-bold">
        ${{ price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },

    compact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>