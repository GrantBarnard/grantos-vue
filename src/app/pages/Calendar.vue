<template>
  <div class="max-w-[1400px] mx-auto p-8 space-y-6">
    <div class="bg-card rounded-2xl p-8 shadow-sm border border-border">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl text-foreground">February 2026</h2>
        <div class="flex items-center gap-2">
          <button class="w-10 h-10 rounded-xl bg-muted hover:bg-accent transition-colors flex items-center justify-center">
            <ChevronLeft class="w-5 h-5 text-muted-foreground" />
          </button>
          <button class="w-10 h-10 rounded-xl bg-muted hover:bg-accent transition-colors flex items-center justify-center">
            <ChevronRight class="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-7 gap-4">
        <div v-for="day in weekDays" :key="day" class="text-center">
          <p class="text-sm text-muted-foreground mb-4">{{ day }}</p>
        </div>

        <div
          v-for="(day, index) in allDays"
          :key="index"
          :class="[
            'min-h-[120px] rounded-xl p-3 border transition-colors',
            day
              ? day === today
                ? 'bg-primary/5 border-primary/30'
                : 'bg-card border-border hover:border-primary/20'
              : 'bg-transparent border-transparent'
          ]"
        >
          <div v-if="day">
            <div class="flex items-center justify-between mb-2">
              <span
                :class="[
                  'text-sm',
                  day === today
                    ? 'w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center'
                    : 'text-foreground'
                ]"
              >
                {{ day }}
              </span>
            </div>
            <div class="space-y-1.5">
              <div
                v-for="event in getEventsForDay(day)"
                :key="event.id"
                :class="['text-xs p-2 rounded-lg border', colorClasses[event.color]]"
              >
                <p class="truncate mb-0.5">{{ event.title }}</p>
                <p v-if="event.time" class="text-[10px] opacity-70">{{ event.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Events -->
    <div class="bg-card rounded-2xl p-8 shadow-sm border border-border">
      <h3 class="text-xl mb-4">Upcoming Events</h3>
      <div class="space-y-3">
        <div
          v-for="event in events"
          :key="event.id"
          class="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-accent/20 transition-colors"
        >
          <div class="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <span class="text-lg text-primary-foreground">{{ event.date }}</span>
          </div>
          <div class="flex-1">
            <h4 class="text-foreground mb-1">{{ event.title }}</h4>
            <p class="text-sm text-muted-foreground">{{ event.time }}</p>
          </div>
          <span :class="['px-3 py-1 rounded-lg text-xs border', colorClasses[event.color]]">
            Feb {{ event.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface CalendarEvent {
  id: string
  title: string
  date: number
  color: 'primary' | 'accent' | 'secondary'
  time?: string
}

const today = 23

const events: CalendarEvent[] = [
  { id: '1', title: 'Team Standup', date: 23, color: 'primary', time: '9:00 AM' },
  { id: '2', title: 'Client Call', date: 24, color: 'accent', time: '2:00 PM' },
  { id: '3', title: 'Code Review', date: 25, color: 'primary', time: '11:00 AM' },
  { id: '4', title: 'Planning Session', date: 26, color: 'secondary', time: '3:00 PM' },
  { id: '5', title: 'Demo Day', date: 28, color: 'accent', time: '10:00 AM' },
]

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const daysInMonth = 28
const firstDayOfWeek = 0

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
const leadingDays = Array.from({ length: firstDayOfWeek }, () => null)
const allDays = [...leadingDays, ...days]

const getEventsForDay = (day: number) => {
  return events.filter(event => event.date === day)
}

const colorClasses: Record<string, string> = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  accent: 'bg-accent text-accent-foreground border-accent/30',
  secondary: 'bg-secondary/10 text-secondary-foreground border-secondary/20',
}
</script>