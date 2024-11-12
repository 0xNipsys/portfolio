<script setup lang="ts">
import TermTable, { type TableColumn } from '@/components/TermTable.vue'
import { type Position, positions } from '@/constants/positions'
import { stackWeight } from '@/constants/stack-weights'
import { formatCompany, formatWorkPeriod } from '@/utils/position-formatting'
import { computed, ref, watch } from 'vue'
import { i18n } from '@/content/i18n'
import { Companies } from '@/constants/companies'

const props = defineProps<{
  lastKeyDown: KeyboardEvent | null
}>()

const selectedPosition = ref<Position | null>(null)
const selectedPosCompany = computed(() =>
  selectedPosition.value
    ? Companies[selectedPosition.value.clientCompany ?? selectedPosition.value.company]
    : null
)

watch(
  () => props.lastKeyDown,
  (e: KeyboardEvent | null) => {
    switch (e?.key) {
      case 'Backspace':
        clearSelectedPosition()
        break
    }
  }
)

function clearSelectedPosition() {
  selectedPosition.value = null
}

const tableColumns: TableColumn[] = [
  {
    field: 'id',
    width: '5%',
    customHeader: '#',
    sortable: true
  },
  {
    field: 'company',
    width: '25%',
    format: (row: any) => formatCompany(row as Position),
    sortable: true
  },
  {
    field: 'role',
    width: '10%',
    sortable: true
  },
  {
    field: 'type',
    width: '10%',
    sortable: true
  },
  {
    field: 'stack',
    width: 'auto',
    format: (row: any) => {
      const pos = row as Position
      return [...pos.feStack, ...pos.beStack]
        .sort((a, b) => stackWeight[b] - stackWeight[a])
        .join('/')
    },
    sortable: false
  },
  {
    field: 'period',
    width: '18%',
    format: (row: any) => formatWorkPeriod(row as Position),
    sortable: true
  }
]
</script>

<template>
  <TermTable
    v-if="!selectedPosition"
    ref-field="id"
    :columns="tableColumns"
    :entries="positions"
    :last-key-down="lastKeyDown"
    @select="selectedPosition = $event as Position"
    sort-by="id"
    sort-dir="desc"
  />

  <div v-else class="flex flex-col h-full text-sm">
    <div class="flex items-center gap-x-5">
      <div class="flex flex-auto items-center border-y-2 border-darkslategray text-base">
        <div class="text-lg font-bold bg-steelblue/60 px-5 py-1">
          #{{ selectedPosition.id }}&nbsp;{{ formatCompany(selectedPosition) }}
        </div>
        <div class="flex-auto pl-7">{{ selectedPosition.role }} / {{ selectedPosition.type }}</div>
        <div class="pr-7">{{ formatWorkPeriod(selectedPosition) }}</div>
      </div>

      <div class="text-steelblue text-right">
        <button class="font-bold text-darkgoldenrod cursor-pointer" @click="clearSelectedPosition">
          [back]
        </button>
        or &lt;BACKSPACE&gt;
      </div>
    </div>

    <div>
      <div class="border-b border-darkslategray">
        <div class="bg-darkslategray px-2 py-1 w-fit">position description</div>
      </div>
      <div class="px-5 py-3">
        <p>
          {{ i18n.positions[selectedPosition.id].description }}
        </p>
      </div>
    </div>

    <div class="flex flex-auto">
      <div class="basis-1/3 border-r border-darkslategray">
        <div>
          <div class="border-y border-darkslategray">
            <div class="bg-darkslategray px-2 py-1 w-fit">company info</div>
          </div>
          <div class="px-5 py-3">
            <div
              :style="{
                backgroundColor: selectedPosCompany?.logoWrapColor
              }"
            >
              <img :src="selectedPosCompany?.logo" alt="img" class="aspect-video w-1/2 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div class="basis-2/3">
        <div>
          <div class="border-y border-darkslategray">
            <div class="bg-darkslategray px-2 py-1 w-fit">accomplishments</div>
          </div>
          <div class="px-5 py-3">
            <div class="flex">
              <div class="flex-1">
                <span class="text-lightseagreen font-bold">front-end</span>
                <ul>
                  <template v-if="i18n.positions[selectedPosition.id].feAccomplishments.length">
                    <li
                      v-for="entry in i18n.positions[selectedPosition.id].feAccomplishments"
                      :key="entry"
                    >
                      {{ entry }}
                    </li>
                  </template>
                  <li v-else>N/A</li>
                </ul>
              </div>

              <div class="flex-1">
                <span class="text-lightseagreen font-bold">back-end</span>
                <ul>
                  <template v-if="i18n.positions[selectedPosition.id].beAccomplishments.length">
                    <li
                      v-for="entry in i18n.positions[selectedPosition.id].beAccomplishments"
                      :key="entry"
                    >
                      {{ entry }}
                    </li>
                  </template>
                  <li v-else>N/A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="border-y border-darkslategray">
            <div class="bg-darkslategray px-2 py-1 w-fit">development stack</div>
          </div>
          <div class="px-5 py-3">
            <div class="flex">
              <div class="flex-1">
                <span class="text-lightseagreen font-bold">front-end</span>
                <ul>
                  <template v-if="selectedPosition.feStack.length">
                    <li v-for="entry in selectedPosition.feStack" :key="entry">
                      {{ entry }}
                    </li>
                  </template>
                  <li v-else>N/A</li>
                </ul>
              </div>
              <div class="flex-1">
                <span class="text-lightseagreen font-bold">back-end</span>
                <ul>
                  <template v-if="selectedPosition.beStack.length">
                    <li v-for="entry in selectedPosition.beStack" :key="entry">
                      {{ entry }}
                    </li>
                  </template>
                  <li v-else>N/A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
