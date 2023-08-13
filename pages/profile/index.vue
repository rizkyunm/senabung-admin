<script setup lang="ts">
import { useAuth } from '#imports'
import { TwButton } from 'vue3-tailwind';

useHead({
  title: 'Profile'
})

const { data } = useAuth()

const editable = ref<boolean>(false)
const file = ref(null)

const setEditable = (value: boolean) => {
  editable.value = value
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Profile
    </h1>
    <hr class="my-2 border dark:border-gray-700" />
    <section class="container mx-auto pt-8 w-3/4 lg:w-1/2">
      <div class="flex justify-between items-center">
        <div class="w-full text-right">
          <TwButton
            variant="primary"
            v-if="!editable"
            @click="setEditable(true)"
          >
            Ubah
          </TwButton>
          <TwButton
            variant="primary"
            v-if="editable"
            @click="setEditable(false)"
          >
            Batal
          </TwButton>
          <TwButton
            variant="primary"
            v-if="editable"
            class="ml-5"
          >
            Simpan
          </TwButton>
        </div>
      </div>
      <div class="block my-5">
        <div class="w-full lg:max-w-full lg:flex mb-4">
          <div
            class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
          >
            <div class="flex justify-center items-center mx-auto mb-4 w-40">
              <div class="relative">
                <div class="cursor-pointer" @click="file.click()">
                  <img
                    :src="data.image_url"
                    alt=""
                    class="rounded-full border-white border-4"
                  />
                  <img
                    v-if="editable"
                    src="/icon-avatar-add.svg"
                    alt=""
                    class="absolute right-0 bottom-0 pb-2"
                  />
                  <input
                    v-if="editable"
                    ref="file"
                    type="file"
                    style="display: none"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    :value="data.email"
                    disabled
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                  >
                    Nama
                  </label>
                  <input
                    :class="
                      editable
                        ? 'bg-white border-gray-500'
                        : 'bg-gray-200 text-gray-700 border-gray-200'
                    "
                    class="appearance-none block border w-full rounded py-3 px-4 mb-3 leading-tight"
                    type="text"
                    :value="data.name"
                    :disabled="!editable"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    :class="
                      editable
                        ? 'bg-white border-gray-500'
                        : 'bg-gray-200 text-gray-700 border-gray-200'
                    "
                    class="appearance-none block border w-full rounded py-3 px-4 mb-3 leading-tight"
                    type="text"
                    :value="data.phone_number"
                    :disabled="!editable"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
