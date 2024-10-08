<script setup lang="ts">
import ContentTab from '@/components/ContentTab.vue'
import { ref } from 'vue'
import { currentLang } from '@/content/i18n'
import Terminal from '@/components/TerminalEmulator.vue'
import { Lang } from '@/enums/lang'
import { Tab } from '@/enums/tab'

const currentTab = ref(Tab.MainTab)
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-darkslategray/70 p-10">
    <div class="basis-9 flex">
      <div class="flex-auto flex gap-1">
        <ContentTab
          v-for="tab in Tab"
          :key="tab"
          :tab="tab"
          :active="currentTab == tab"
          @click="currentTab = tab"
        />
      </div>
      <div class="flex px-1.5 py-2 gap-2.5 items-center">
        <v-icon
          name="fi-fr"
          class="size-full cursor-pointer transition-all"
          :class="{ grayscale: currentLang === Lang.EN }"
          @click="currentLang = Lang.FR"
        />
        <v-icon
          name="fi-gb"
          class="size-full cursor-pointer transition-all"
          :class="{ grayscale: currentLang === Lang.FR }"
          @click="currentLang = Lang.EN"
        />
      </div>
    </div>

    <Terminal />
  </div>
</template>
