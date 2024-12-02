<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue'
import { CurrentLang } from '@/content/i18n'
import Terminal from '@/components/core/TerminalEmulator.vue'
import { Lang, LangLabels } from '@/enums/lang'
import { Tab } from '@/enums/tab'
import { RepoUrl } from '@/constants/base'
import { Shells } from '@/shell/shell'
import TabToggle from '@/components/pure/TabToggle.vue'
import { GetNewCid, GoToCid } from '@/update'
import UpdateAlert from '@/components/core/UpdateAlert.vue'

const currentTab = ref(Tab.MainTab)
const newCid = ref<string | null>(null)
const cidCheckIntervalId = ref<number | null>(null)

onBeforeMount(async () => update(await GetNewCid()))

onMounted(async () => {
  if (navigator.language.includes('fr')) {
    CurrentLang.value = Lang.FR
  }

  cidCheckIntervalId.value = setInterval(async () => {
    newCid.value = await GetNewCid()
  }, 60000)
})

onUnmounted(() => {
  if (!cidCheckIntervalId.value) return
  clearInterval(cidCheckIntervalId.value)
})

watch(currentTab, () => {
  if (currentTab.value !== Tab.MainTab) {
    Shells[currentTab.value] = {}
  }
})

function update(cid = newCid.value) {
  if (!cid) return
  GoToCid(cid)
}
</script>

<template>
  <div class="w-dvw h-dvh bg-darkslateblue flex flex-col justify-center relative">
    <UpdateAlert v-if="newCid" @update="update()" />

    <div
      class="flex items-center justify-between h-10 px-2 sm:px-5 text-darkgray/60 tracking-tighter absolute w-full top-0 transition-colors"
    >
      <div class="flex gap-x-2 text-xs sm:text-sm">
        <span
          v-for="lang in Lang"
          :key="lang"
          class="cursor-pointer hover:text-darkgray"
          :class="{ 'text-darkgray': CurrentLang === lang }"
          @click="CurrentLang = lang"
          >{{ LangLabels[lang] }}</span
        >
      </div>

      <a
        class="hover:text-darkgray flex items-center text-xs sm:text-sm"
        :href="RepoUrl"
        target="_blank"
      >
        <v-icon name="bi-github" />&nbsp;source code
      </a>
    </div>

    <div class="flex-auto flex items-center justify-center pt-10 px-2 pb-2 sm:px-5 sm:pb-5 lg:p-14">
      <div class="flex flex-col size-full max-w-[1280px] max-h-[860px] overflow-hidden relative">
        <div class="basis-9 flex flex-shrink-0">
          <div class="flex-auto flex gap-1">
            <TabToggle
              v-for="tab in Tab"
              :key="tab"
              :tab="tab"
              :active="currentTab == tab"
              @click="currentTab = tab"
            />
          </div>
        </div>

        <div
          class="bg-darkerslategray flex-auto rounded-tr-md rounded-b-md overflow-hidden relative"
        >
          <template v-for="tab in Tab" :key="tab">
            <div v-if="currentTab === tab" class="absolute top-0 left-0 size-full p-5">
              <Terminal :tab="tab" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
