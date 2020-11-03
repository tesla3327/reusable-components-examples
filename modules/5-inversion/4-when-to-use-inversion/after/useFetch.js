import { ref, watchEffect } from 'vue';
import fetch from './fetchUtil';

export default (url) => {
  const items = ref([]);
  const searchValue = ref('');

  watchEffect(async () => {
    const data = await fetch(url, searchValue.value);
    items.value = data;
  });

  return {
    items,
    searchValue,
  };
};
