<script setup lang="ts">
defineProps<{
  refField: string
  fields: string[]
  format: (field: string, content: Record<string, any>) => string
  entries: Record<string, any>[]
}>()
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in entries" :key="entry[refField]">
        <td v-for="field in fields" :key="field">{{ format(field, entry) }}</td>
      </tr>
    </tbody>
  </table>
</template>
