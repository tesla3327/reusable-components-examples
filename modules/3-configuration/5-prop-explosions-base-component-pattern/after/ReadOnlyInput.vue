<template>
  <Input :model-value="value" disabled />
</template>

<script>
import Input from './Input.vue';
export default {
  name: 'ReadOnlyInput',
  components: { Input },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
