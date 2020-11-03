<template>
  <div>
    <table :class="compact ? 'text-sm' : 'text-md'">
      <thead>
        <tr class="text-left text-gray-800 border-b">
          <th
            v-for="(col, index) in columns"
            class="pr-8 pb-1"
            :class="index === 0 ? 'pl-2' : ''"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in visibleRows"
          class="text-gray-600 font-light transition duration-200 ease-in-out"
          :class="{
            'bg-gray-200': stripe && index % 2 === 0,
            'hover:bg-gray-300': hover,
          }"
        >
          <td
            v-for="(cell, cellIndex) in row"
            class="pr-8"
            :class="{
              'py-1': compact,
              'py-3': !compact,
              'pl-2': cellIndex === 0,
            }"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="space-x-3 flex justify-center items-center mt-4 text-sm text-gray-700"
    >
      <button
        class="rounded py-1 px-3 transition duration-200 focus:outline-none"
        :class="
          disablePagination
            ? 'cursor-not-allowed'
            : 'hover:bg-gray-200'
        "
        :disabled="disablePagination"
        @click="prevPage"
      >
        &lt; Previous Page
      </button>
      <span
        v-if="showPageNumbers"
        class="font-medium text-gray-800"
      >
        {{ page + 1 }} / {{ totalPages }}
      </span>
      <button
        class="rounded py-1 px-3 transition duration-200 focus:outline-none"
        :class="
          disablePagination
            ? 'cursor-not-allowed'
            : 'hover:bg-gray-200'
        "
        :disabled="disablePagination"
        @click="nextPage"
      >
        Next Page &gt;
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'TableWithPagination',

  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    initialPage: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    disablePagination: {
      type: Boolean,
      default: false,
    },
    showPageNumbers: {
      type: Boolean,
      default: false,
    },
  },

  setup({ data, initialPage, itemsPerPage }) {
    const page = ref(initialPage);

    const totalPages = computed(() =>
      Math.ceil(data.length / itemsPerPage)
    );

    const nextPage = () => {
      const previousData = (page.value + 1) * itemsPerPage;
      const dataLeft = data.length - previousData;
      if (dataLeft > 0) {
        page.value += 1;
      }
    };

    const prevPage = () => {
      if (page.value >= 1) {
        page.value -= 1;
      }
    };

    const visibleRows = computed(() =>
      data.slice(
        page.value * itemsPerPage,
        (page.value + 1) * itemsPerPage
      )
    );

    return {
      visibleRows,
      nextPage,
      prevPage,
      page,
      totalPages,
    };
  },
};
</script>
