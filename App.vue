<template>
  <div class="gradient h-full p-8">
    <Lesson />
  </div>
</template>

<script>
import Lesson from './modules/2-templating/1-templating-pattern';

export default {
  name: 'App',
  components: {
    Lesson,
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
