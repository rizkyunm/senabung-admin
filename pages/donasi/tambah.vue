<script setup lang="ts">
import {
  TwForm,
  TwButton,
  TwFile,
  TwInput,
  TwTextarea, useForm, useDialog, useToast
} from "vue3-tailwind";
const composableForm = useForm();
const dialog = useDialog();
const toast = useToast();
const router = useRouter();

const { $api } = useNuxtApp();
const { token } = useAuth();

const form = reactive({
  name: '',
  short_description: '',
  description: '',
  goal_amount: 0,
})

const campaign_image = ref('')

const formName = computed(() => composableForm.getForm('tambah-donasi'));
const validator = computed(() => formName.value.validator);

function clear() {
  form.name = '';
  form.short_description = '';
  form.description = '';
  form.goal_amount = 0;
  campaign_image.value = '';

  validator.value.clearErrors();
}

const isError = ref(false);

const formRules = {
  campaign_image: ["required"],
  name: ["required", "string",
    (value: string) => {
      const MIN_LENGTH = 10;
      if (!value || value.length < MIN_LENGTH) {
        return `Panjang karakter tidak boleh kurang dari ${MIN_LENGTH}`;
      }
    },
    (value: string) => {
      const MAX_LENGTH = 200;
      if (!value || value.length > MAX_LENGTH) {
        return `Panjang karakter tidak boleh lebih dari ${MAX_LENGTH}`;
      }
    },
  ],
  short_description: ["required", "string",
    (value: string) => {
      const MIN_LENGTH = 20;
      if (!value || value.length < MIN_LENGTH) {
        return `Panjang karakter tidak boleh kurang dari ${MIN_LENGTH}`;
      }
    },
    (value: string) => {
      const MAX_LENGTH = 500;
      if (!value || value.length > MAX_LENGTH) {
        return `Panjang karakter tidak boleh lebih dari ${MAX_LENGTH}`;
      }
    },
  ],
  description: ["required", "string",
    (value: string) => {
      const MIN_LENGTH = 100;
      if (!value || value.length < MIN_LENGTH) {
        return `Panjang karakter tidak boleh kurang dari ${MIN_LENGTH}`;
      }
    },
    (value: string) => {
      const MAX_LENGTH = 1000;
      if (!value || value.length > MAX_LENGTH) {
        return `Panjang karakter tidak boleh lebih dari ${MAX_LENGTH}`;
      }
    },
  ],
  goal_amount: ["required", "number",
    (value: number) => {
      const MIN_VALUE = 100000;
      if (!value || value < MIN_VALUE) {
        return `Nominal tidak boleh kurang dari ${MIN_VALUE}`;
      }
    },
    (value: number) => {
      const MAX_VALUE = 1000000000;
      if (!value || value > MAX_VALUE) {
        return `Nominal tidak boleh lebih dari ${MAX_VALUE}`;
      }
    },
  ],
};

async function submit() {
  const isConfirmed = await dialog.fire({
    title: "Apakah anda sudah yakin ?",
    description: "Aksi ini tidak dapat diulang kembali !",
  });
  if (!isConfirmed) return;
  validator.value.clearErrors();
  await validator.value.validate();
  if (validator.value.fail()) {
    toast.error({
      message: validator.value.getErrorMessage(),
    });
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1000);
  }

  try {
    const res = await $api.campaign.create(token.value, form);
    if (res?.id) {
      let formData = new FormData()
      formData.append('file', campaign_image.value[0])
      console.log(formData)
      await $api.campaign.upload(token.value, '5', formData);

      toast.success({
        message: "Donasi berhasil ditambahkan"
      })
      router.push('/donasi')
    }
  } catch (err) {
    toast.error({
      message: err?.message,
    });
  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">Tambah Donasi</h2>
    <hr class="my-2 border dark:border-gray-700" />
    <div>
      <TwForm
        name="tambah-donasi"
        class="grid grid-cols-12 gap-2 bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-lg p-2 shadow"
        :class="{
          'tw-shake': isError,
        }"
        :rules="formRules"
        @submit="submit"
      >
        <div class="col-span-12">
          <TwFile v-model="campaign_image" />
        </div>
        <div class="col-span-6">
          <TwInput
            label="Nama"
            name="name"
            v-model="form.name"
            placeholder="Masukan nama kampanye donasi anda"
            type="text"
          />
          <CustomErrorMessage name="name" />
        </div>
        <div class="col-span-6">
          <TwInput
            label="Jumlah Donasi yang Dibutuhkan"
            name="goal_amount"
            v-model="form.goal_amount"
            placeholder="Masukan nominal jumlah donasi"
            type="text"
          />
          <CustomErrorMessage name="goal_amount" />
        </div>
        <div class="col-span-12">
          <TwInput
            label="Deskripsi Singkat"
            name="short_description"
            v-model="form.short_description"
            placeholder="Masukan deskripsi singkat kampanye donasi"
            type="text"
          />
          <CustomErrorMessage name="short_description" />
        </div>
        <div class="col-span-12">
          <TwTextarea
            label="Deskripsi"
            name="description"
            v-model="form.description"
            placeholder="Masukan deskripsi kampanye donasi"
            type="text"
          />
          <CustomErrorMessage name="description" />
        </div>
        <div class="col-span-12 flex justify-end gap-1">
          <TwButton
            ripple
            variant="secondary"
            type="button"
            class="px-4 dark:text-gray-200 dark:!border-gray-800 dark:border"
            @click="clear"
          >
            Reset
          </TwButton>
          <TwButton variant="primary" class="px-4">
            Submit
          </TwButton>
        </div>
      </TwForm>
    </div>
  </div>
</template>
