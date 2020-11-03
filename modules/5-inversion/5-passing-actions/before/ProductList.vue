<template>
  <!-- Items -->
  <div class="item space-x-6">
    <img
      class="rounded-full w-24 h-24 object-cover border border-gray-500 shadow-md"
      :src="image"
    />
    <div class="flex flex-col justify-center flex-1">
      <span class="text-lg text-gray-900">
        {{ name }}
      </span>
      <span
        class="mt-1 leading-tight font-light text-gray-700"
      >
        {{ description }}
      </span>
    </div>
    <div class="text-lg text-gray-600 font-bold">
      ${{ price }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
