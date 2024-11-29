<script setup lang="ts">
import { computed, ref, watch } from 'vue'

export interface CardListGroup {
  field: string
  name: (val: string) => string
  groupEntries: (entries: Record<string, any>[]) => Record<string, Record<string, any>[]>
}

const props = defineProps<{
  refField: string
  groups: CardListGroup[]
  entries: Record<string, any>[]
  card: Object
  lastKeyDown: KeyboardEvent | null
}>()

const emit = defineEmits<{
  (e: 'select', entry: Record<string, any>): void
}>()

const activeGroupIdx = ref(0)
const groupedEntries = computed(() =>
  props.groups[activeGroupIdx.value].groupEntries(props.entries)
)
const groupKeys = computed(() => Object.keys(groupedEntries.value))
const selectionPos = ref<[number, number]>([0, 0])

watch(
  () => props.lastKeyDown,
  (e: KeyboardEvent | null) => {
    switch (e?.key) {
      case 'ArrowUp':
        selectionPos.value = [Math.max(selectionPos.value[0] - 1, 0), 0]
        break
      case 'ArrowDown':
        selectionPos.value = [Math.min(selectionPos.value[0] + 1, groupKeys.value.length - 1), 0]
        break
      case 'ArrowLeft':
        selectionPos.value[1] = Math.max(selectionPos.value[1] - 1, 0)
        break
      case 'ArrowRight':
        selectionPos.value[1] = Math.min(
          selectionPos.value[1] + 1,
          groupedEntries.value[groupKeys.value[selectionPos.value[0]]].length - 1
        )
        break
      case 'Enter':
        selectEntry()
        break
    }
  }
)

function selectEntry() {
  const key = groupKeys.value[selectionPos.value[0]]
  const entry = groupedEntries.value[key][selectionPos.value[1]]
  emit('select', entry)
}
</script>

<template>
  <div class="overflow-y-auto h-full flex flex-col gap-y-5">
    <div v-for="(key, groupIdx) in groupKeys" :key="key">
      <div class="text-sm mb-3 border-y border-darkslategray">
        <h3 class="text-sm lowercase bg-darkslategray px-2 py-1 w-fit">
          {{ key }}
        </h3>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mr-1">
        <component
          :is="card"
          v-for="(entry, entryIdx) in groupedEntries[key]"
          :key="entry[refField]"
          :entry="entry"
          :selected="groupIdx === selectionPos[0] && entryIdx === selectionPos[1]"
          @mouseover="selectionPos = [groupIdx, entryIdx]"
          @click="selectEntry"
          >{{ entry }}</component
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
