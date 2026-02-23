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

      <!-- Line -->
      <polyline
        :points="linePoints"
        fill="none"
        :stroke="lineColor"
        stroke-width="3"
      />

      <!-- Dots -->
      <circle
        v-for="(point, index) in pointCoordinates"
        :key="index"
        :cx="point.x"
        :cy="point.y"
        r="5"
        :fill="lineColor"
      />

      <!-- X-axis labels -->
      <text
        v-for="(item, index) in data"
        :key="`label-${index}`"
        :x="60 + (index * segmentWidth)"
        :y="height - 15"
        text-anchor="middle"
        style="font-size: 12px; fill: #6B7280"
      >
        {{ item.week }}
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface DataPoint {
  week: string
  value: number
}

interface Props {
  data: DataPoint[]
  height?: number
  lineColor?: string
  minValue?: number
  maxValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: 200,
  lineColor: '#3F63F6',
  minValue: 80,
  maxValue: 95
})

const width = 600
const segmentWidth = computed(() => (width - 60) / (props.data.length - 1))

const pointCoordinates = computed(() => {
  return props.data.map((item, index) => {
    const x = 60 + index * segmentWidth.value
    const normalizedValue = (item.value - props.minValue) / (props.maxValue - props.minValue)
    const y = height - 40 - normalizedValue * (props.height - 60)
    return { x, y }
  })
})

const linePoints = computed(() => {
  return pointCoordinates.value.map(p => `${p.x},${p.y}`).join(' ')
})

const height = props.height
</script>