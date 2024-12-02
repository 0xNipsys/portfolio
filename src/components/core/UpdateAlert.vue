<script setup lang="ts">
import { i18n } from '@/content/i18n'

defineEmits<{
  (e: 'update'): void
}>()
</script>

<template>
  <div class="w-screen h-screen absolute z-50 flex justify-center items-center backdrop-blur-sm">
    <div class="bg-darkslategray rounded-md p-5">
      <h1 class="text-lg border-b mb-3">{{ i18n.updateTitle }}</h1>
      <p class="text-sm">{{ i18n.updateBody1 }}<br />{{ i18n.updateBody2 }}</p>

      <div class="mt-3 text-right">
        <button
          class="font-bold text-darkgoldenrod cursor-pointer text-base"
          @click="$emit('update')"
        >
          [{{ i18n.update }}]
        </button>
      </div>
    </div>
  </div>
</template>
