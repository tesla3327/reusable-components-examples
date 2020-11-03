<template>
  <div class="flex flex-col">
    <input
      type="text"
      class="py-1 px-3 border border-gray-400 rounded focus:outline-none transition duration-200 ease-in-out"
      :class="
        disabled
          ? 'border-gray-400 cursor-not-allowed'
          : 'hover:border-gray-500 focus:border-gray-800'
      "
      :disabled="disabled"
      :placeholder="placeholder"
      :value="modelValue"
      @change="$emit('change')"
    />
    <span v-if="errorMessage" class="text-red-600 text-sm">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxCharacters: {
      type: Number,
      default: 0,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    successMessage: {
      type: String,
      default: '',
    },
  },
};
</script>
