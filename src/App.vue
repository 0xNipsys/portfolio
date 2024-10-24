<script setup lang="ts">
import ContentTab from '@/components/ContentTab.vue'
import { onMounted, ref } from 'vue'
import { CurrentLang } from '@/content/i18n'
import Terminal from '@/components/TerminalEmulator.vue'
import { Lang } from '@/enums/lang'
import { Tab } from '@/enums/tab'
import { RepoUrl } from '@/constants/base'

const currentTab = ref(Tab.MainTab)

onMounted(() => {
  if (navigator.language.includes('fr')) {
    CurrentLang.value = Lang.FR
  }
})
</script>

<template>
  <div class="w-screen h-screen bg-darkslategray/70">
    <div class="flex items-center justify-end h-10 px-5">
      <a
        class="text-darkgray/60 hover:text-darkgray tracking-tighter flex items-center"
        :href="RepoUrl"
        target="_blank"
      >
        <v-icon name="bi-github" scale="1.2" />&nbsp;source code
      </a>
    </div>

    <div class="flex flex-col max-w-screen-2xl aspect-video overflow-hidden mx-auto">
      <div class="basis-9 flex flex-shrink-0">
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
            :class="{ grayscale: CurrentLang === Lang.EN }"
            @click="CurrentLang = Lang.FR"
          />
          <v-icon
            name="fi-gb"
            class="size-full cursor-pointer transition-all"
            :class="{ grayscale: CurrentLang === Lang.FR }"
            @click="CurrentLang = Lang.EN"
          />
        </div>
      </div>

      <Terminal />
    </div>
  </div>
</template>
