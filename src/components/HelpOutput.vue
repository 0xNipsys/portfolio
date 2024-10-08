<script setup lang="ts">
import Commands from '@/shell/commands'
</script>

<template>
  <div v-for="cmd in Commands" :key="cmd.name" class="flex flex-col leading-5 my-3">
    <span class="text-olivedrab">- {{ cmd.description }}</span>
    <span class="font-bold text-darkgoldenrod">[{{ cmd.name }}]</span>
  </div>
</template>

<style scoped lang="scss"></style>
