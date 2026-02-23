<template>
  <div class="relative w-full" :style="{ height: `${height}px` }">
    <svg :width="width" :height="height" class="w-full">
      <!-- Grid lines -->
      <line
        v-for="i in 5"
        :key="`grid-${i}`"
        :x1="60"
        :x2="width"
        :y1="(height - 40) * (i / 5) + 20"
        :y2="(height - 40) * (i / 5) + 20"
        stroke="#E0E2E7"
        stroke-width="1"
        stroke-dasharray="3 3"
      />

      <!-- Bars -->
      <rect
        v-for="(item, index) in data"
        :key="index"
        :x="60 + (index * barWidth) + (barWidth - actualBarWidth) / 2"
        :y="height - 40 - ((item.value / maxValue) * (height - 60))"
        :width="actualBarWidth"
        :height="(item.value / maxValue) * (height - 60)"
        :fill="barColor"
        :rx="8"
        :ry="8"
      />

      <!-- X-axis labels -->
      <text
        v-for="(item, index) in data"
        :key="`label-${index}`"
        :x="60 + (index * barWidth) + barWidth / 2"
        :y="height - 15"
        text-anchor="middle"
        class="text-xs fill-muted-foreground"
        style="font-size: 12px; fill: #6B7280"
      >
        {{ item.day }}
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DataPoint {
  day: string
  value: number
}

interface Props {
  data: DataPoint[]
  height?: number
  barColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  height: 240,
  barColor: '#3F63F6'
})

const width = 800
const maxValue = computed(() => Math.max(...props.data.map(d => d.value)))
const barWidth = computed(() => (width - 60) / props.data.length)
const actualBarWidth = computed(() => Math.min(barWidth.value * 0.7, 60))
</script>