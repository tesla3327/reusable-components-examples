<template>
  <div class="modal-container">
    <div class="modal flex flex-col space-y-4">
      <TableWithPagination
        :data="data"
        :columns="columns"
      />
    </div>
  </div>
</template>

<script>
import TableWithPagination from './TableWithPagination.vue';
import tableData from './data.json';

export default {
  components: {
    TableWithPagination,
  },

  setup() {
    return {
      // Cut out some of the dummy generated data
      data: tableData.data.map((row) => row.slice(0, 3)),
      columns: tableData.cols.slice(0, 3),
    };
  },
};
</script>
