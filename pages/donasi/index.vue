<script setup lang="ts">
import { TwDatatableClient, TwButton } from "vue3-tailwind";
import { onMounted, ref } from "vue";
const { $api } = useNuxtApp();
const data = ref({
  column: [
    {
      label: "Nama",
      field: "name",
      width: "400px",
      sortable: true,
    },
    {
      label: "Deskripsi Singkat",
      field: "short_description",
      width: "400px",
      sortable: true,
    },
    {
      label: "Status",
      field: "status",
      width: "400px",
      sortable: true,
    },
    {
      label: "Gambar",
      field: "campaign_image",
      width: "400px",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "400px",
      sortable: false,
    },
  ],
  data: [],
  limit: 5,
  search: "",
  selected: [],
  sortBy: "status",
  sortType: "asc",
  setting: {
    checkbox: true,
    limitOption: [
      {
        label: "5",
        value: 5,
      },
      {
        label: "10",
        value: 10,
      },
      {
        label: "50",
        value: 50,
      },
      {
        label: "100",
        value: 100,
      },
      {
        label: "200",
        value: 200,
      },
    ],
  },
});

const datatableHook = (arg: any) => {
  arg();
};

onMounted(async () => {
  await $api.campaign.list()
    .then((res) => {
      data.value.data = res
    })
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">List Kampanye Donasi</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <NuxtLink to="/donasi/tambah">
    <TwButton variant="primary" class="my-5">
      Tambah Donasi
    </TwButton>
    </NuxtLink>
    <TwDatatableClient
      class="!dark:text-gray-200"
      v-model:search="data.search"
      v-model:limit="data.limit"
      v-model:selected="data.selected"
      v-model:sort-by="data.sortBy"
      v-model:sort-type="data.sortType"
      :column="data.column"
      :data="data.data"
      :setting="data.setting"
      @datatable:column-hook="datatableHook"
    >
      <template #row="{ column, data }">
        <template v-if="column.field === 'name'">
          {{ data.name }}
        </template>
        <template v-if="column.field === 'short_description'">
          {{ data.short_description }}
        </template>
        <template v-if="column.field === 'status'">
          {{ data.status }}
        </template>
        <template v-if="column.field === 'campaign_image'">
          <img :src="data.campaign_image" alt="" class="max-h-20" />
        </template>
        <template v-if="column.field === 'action'">
          <div class="flex gap-2 justify-center">
            <TwButton variant="primary" class="border border-gray-900">
              Edit
            </TwButton>
            <TwButton variant="primary" class="border border-gray-900">
              Detail
            </TwButton>
          </div>
        </template>
      </template>
    </TwDatatableClient>
    <hr class="my-2 dark:border-gray-700" />
    <div>
      <div class="flex gap-2">
        <div class="w-32">Selected Data</div>
        <div>: {{ data.selected }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Order By</div>
        <div>: {{ data.sortBy }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Order Type</div>
        <div>: {{ data.sortType }}</div>
      </div>
      <div class="flex gap-2">
        <div class="w-32">Search</div>
        <div>: {{ data.search }}</div>
      </div>
    </div>
  </div>
</template>
