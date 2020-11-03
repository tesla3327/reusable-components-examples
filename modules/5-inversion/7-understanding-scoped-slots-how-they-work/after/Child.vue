<template>
  <div class="border border-gray-500 rounded p-4">
    Before
    <slot
      v-for="item in ['One', 'Two', 'Three']"
      :item="item"
    />
    After
  </div>
</template>
