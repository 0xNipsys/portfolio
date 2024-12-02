<script setup lang="ts">
import DataTable, { type TableColumn } from '@/components/pure/DataTable.vue'
import { type Position, Positions } from '@/constants/positions'
import { formatStack, formatWorkPeriod } from '@/utils/position-formatting'
import { computed, ref, watch } from 'vue'
import { i18n } from '@/content/i18n'
import { Companies } from '@/constants/companies'
import CardList, { type CardListGroup } from '@/components/pure/CardList.vue'
import { PositionRole, PositionType } from '@/enums/work'
import PositionCard from '@/components/pure/PositionCard.vue'

const props = defineProps<{
  lastKeyDown: KeyboardEvent | null
}>()

const selectedPosition = ref<Position | null>(null)
const selectedPosCompany = computed(() =>
  selectedPosition.value ? Companies[selectedPosition.value.company] : null
)
const selectedPosInfo = computed(() =>
  selectedPosition.value ? i18n.value.experience.positions[selectedPosition.value.id] : null
)
const isGridMode = ref(false)

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

const tableColumns = computed<TableColumn[]>(() => [
  {
    field: 'id',
    width: '5%',
    header: '#',
    sortable: true
  },
  {
    field: 'company',
    width: '20%',
    header: i18n.value.experience.company,
    sortable: true
  },
  {
    field: 'role',
    width: '13%',
    header: i18n.value.experience.role,
    format: (row: any) => i18n.value.experience.positionRoles[(row as Position).role],
    sortable: true
  },
  {
    field: 'type',
    width: '13%',
    header: i18n.value.experience.type,
    format: (row: any) => i18n.value.experience.positionTypes[(row as Position).type],
    sortable: true
  },
  {
    field: 'stack',
    width: 'auto',
    header: i18n.value.experience.stack,
    format: (row: any) => formatStack(row as Position),
    sortable: false
  },
  {
    field: 'period',
    width: '18%',
    header: i18n.value.experience.period,
    format: (row: any) => formatWorkPeriod(row as Position),
    sortable: true
  }
])

const cardGroup = computed<CardListGroup>(() => ({
  field: 'type',
  name: (val: string) => i18n.value.experience.positionTypes[val as PositionType],
  groupEntries: (entries: Record<string, any>[]) => {
    const positions = entries as Position[]
    const grouped: Record<PositionType, Position[]> = {
      [PositionType.FullTime]: [],
      [PositionType.PartTime]: [],
      [PositionType.WorkStudy]: [],
      [PositionType.Internship]: []
    }
    positions
      .sort((a, b) => (a.id < b.id ? 1 : -1))
      .forEach((position) => grouped[position.type].push(position))
    return grouped
  }
}))
</script>

<template>
  <div v-if="!selectedPosition" class="flex flex-col h-full">
    <div
      class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between mb-3 text-sm opacity-90"
    >
      <div>{{ i18n.experience.selectPosition }}</div>

      <div class="flex items-center text-right">
        {{ i18n.experience.viewMode }}
        <div class="px-3 cursor-pointer" @click="isGridMode = false">
          <v-icon
            name="md-tablechart-sharp"
            class="opacity-30 lg:opacity-100"
            :class="{ 'lg:text-steelblue': !isGridMode }"
          />
        </div>
        /
        <div class="px-3 cursor-pointer" @click="isGridMode = true">
          <v-icon
            name="md-gridview-sharp"
            class="text-steelblue lg:text-darkgray"
            :class="{ 'lg:text-steelblue': isGridMode }"
          />
        </div>
      </div>
    </div>

    <div class="flex-auto overflow-hidden">
      <DataTable
        class="hidden lg:block"
        :class="{ 'lg:hidden': isGridMode }"
        ref-field="id"
        :columns="tableColumns"
        :entries="Positions"
        :last-key-down="lastKeyDown"
        @select="selectedPosition = $event as Position"
        sort-by="id"
        sort-dir="desc"
      />

      <CardList
        :class="{ 'lg:hidden': !isGridMode }"
        ref-field="id"
        :group="cardGroup"
        :entries="Positions"
        :card="PositionCard"
        :last-key-down="lastKeyDown"
        @select="selectedPosition = $event as Position"
      />
    </div>
  </div>

  <div v-else class="flex flex-col h-full text-sm">
    <div class="flex items-center gap-x-5">
      <div class="flex flex-auto items-center border-y-2 border-darkslategray text-base">
        <div class="text-lg font-bold bg-steelblue/60 px-5 py-1">
          #{{ selectedPosition.id }}&nbsp;{{ selectedPosition.company }}
        </div>
        <div class="flex-auto pl-7">
          {{ i18n.experience.positionRoles[selectedPosition.role] }} /
          {{ i18n.experience.positionTypes[selectedPosition.type] }}
        </div>
        <div class="pr-7">{{ formatWorkPeriod(selectedPosition) }}</div>
      </div>

      <div class="flex items-center text-steelblue text-right">
        <button
          class="font-bold text-darkgoldenrod cursor-pointer text-base"
          @click="clearSelectedPosition"
        >
          [{{ i18n.back }}]
        </button>
        &nbsp;{{ i18n.or }} &lt;{{ i18n.backspace }}&gt;
      </div>
    </div>

    <div class="flex-auto flex flex-col overflow-hidden">
      <div class="border-b border-darkslategray">
        <div class="bg-darkslategray px-2 py-1 w-fit">
          {{ i18n.experience.positionDescription }}
        </div>
      </div>
      <div class="flex-auto px-5 py-3 overflow-hidden">
        <p class="overflow-y-auto max-h-full">
          {{ selectedPosInfo?.description }}
        </p>
      </div>
    </div>

    <div class="flex">
      <div class="basis-1/3 border-r border-darkslategray" v-if="selectedPosCompany">
        <div>
          <div class="border-y border-darkslategray">
            <div class="bg-darkslategray px-2 py-1 w-fit">{{ i18n.experience.companyInfo }}</div>
          </div>
          <div class="flex flex-wrap px-5 py-3 gap-y-3">
            <div
              class="flex-auto"
              :style="{
                backgroundColor: selectedPosCompany.logoWrapColor
              }"
            >
              <img :src="selectedPosCompany.logo" alt="img" class="aspect-video w-1/2 mx-auto" />
            </div>

            <div class="grid grid-cols-2 gap-y-3 w-full">
              <div class="flex flex-col">
                <span class="text-lightseagreen font-bold">{{ i18n.experience.sector }}</span>
                <span>{{ i18n.experience.companySector[selectedPosCompany.sector] }}</span>
              </div>

              <div class="flex flex-col">
                <span class="text-lightseagreen font-bold">{{ i18n.experience.location }}</span>
                <span>{{ selectedPosCompany.location }}</span>
              </div>

              <div class="flex flex-col">
                <span class="text-lightseagreen font-bold">{{ i18n.experience.size }}</span>
                <span>{{ i18n.experience.companySizes[selectedPosCompany.size] }}</span>
              </div>

              <div class="flex flex-col">
                <span class="text-lightseagreen font-bold">{{ i18n.experience.country }}</span>
                <span>{{ selectedPosCompany.country }}</span>
              </div>
            </div>

            <div class="flex-auto">
              <span class="text-lightseagreen font-bold">{{ i18n.experience.introduction }}</span>
              <p>{{ i18n.experience.companyIntroductions[selectedPosition.company] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-2/3 flex flex-col">
        <div class="basis-2/5">
          <div class="border-y border-darkslategray">
            <div class="bg-darkslategray px-2 py-1 w-fit">
              {{ i18n.experience.accomplishments }}
            </div>
          </div>
          <div class="px-5 py-3">
            <div class="flex">
              <div class="flex-1">
                <span class="text-lightseagreen font-bold lowercase">{{
                  i18n.experience.positionRoles[PositionRole.Frontend]
                }}</span>
                <ul>
                  <template v-if="selectedPosInfo?.feAccomplishments.length">
                    <li v-for="entry in selectedPosInfo?.feAccomplishments" :key="entry">
                      {{ entry }}
                    </li>
                  </template>
                  <li class="opacity-60" v-else>{{ i18n.na }}</li>
                </ul>
              </div>

              <div class="flex-1">
                <span class="text-lightseagreen font-bold lowercase">{{
                  i18n.experience.positionRoles[PositionRole.Backend]
                }}</span>
                <ul>
                  <template v-if="selectedPosInfo?.beAccomplishments.length">
                    <li v-for="entry in selectedPosInfo?.beAccomplishments" :key="entry">
                      {{ entry }}
                    </li>
                  </template>
                  <li class="opacity-60" v-else>{{ i18n.na }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-3/5">
          <div class="border-y border-darkslategray">
            <div class="bg-darkslategray px-2 py-1 w-fit">
              {{ i18n.experience.developmentStack }}
            </div>
          </div>
          <div class="px-5 py-3">
            <div class="flex">
              <div class="flex-1">
                <span class="text-lightseagreen font-bold lowercase">{{
                  i18n.experience.positionRoles[PositionRole.Frontend]
                }}</span>
                <ul>
                  <template v-if="selectedPosition.feStack.length">
                    <li v-for="entry in selectedPosition.feStack" :key="entry">
                      {{ entry }}
                    </li>
                  </template>
                  <li class="opacity-60" v-else>{{ i18n.na }}</li>
                </ul>
              </div>
              <div class="flex-1">
                <span class="text-lightseagreen font-bold lowercase">{{
                  i18n.experience.positionRoles[PositionRole.Backend]
                }}</span>
                <ul>
                  <template v-if="selectedPosition.beStack.length">
                    <li v-for="entry in selectedPosition.beStack" :key="entry">
                      {{ entry }}
                    </li>
                  </template>
                  <li class="opacity-60" v-else>{{ i18n.na }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
