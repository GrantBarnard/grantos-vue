<template>
  <div class="max-w-[1200px] mx-auto p-8 space-y-6">
    <div class="flex items-center justify-between">
      <p class="text-sm text-muted-foreground">{{ inboxItems.length }} items pending review</p>
      <button class="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
        Approve All
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="item in inboxItems"
        :key="item.id"
        class="bg-card rounded-2xl p-6 shadow-sm border border-border hover:border-primary/30 transition-colors"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-lg text-foreground">{{ item.title }}</h3>
              <span
                :class="[
                  'px-3 py-1 rounded-lg text-xs border',
                  priorityColors[item.priority]
                ]"
              >
                {{ item.priority }}
              </span>
            </div>
            <p class="text-sm text-muted-foreground mb-3">{{ item.description }}</p>
            <div class="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{{ item.agent }}</span>
              <span>•</span>
              <span>{{ item.timestamp }}</span>
              <span>•</span>
              <span class="text-accent-foreground bg-accent px-2 py-1 rounded">
                {{ item.confidence }}% confidence
              </span>
            </div>
          </div>
          
          <div class="flex items-center gap-2 ml-4">
            <button class="w-10 h-10 rounded-xl bg-accent hover:bg-accent/80 transition-colors flex items-center justify-center">
              <Check class="w-5 h-5 text-accent-foreground" />
            </button>
            <button class="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 transition-colors flex items-center justify-center">
              <Edit2 class="w-4 h-4 text-muted-foreground" />
            </button>
            <button class="w-10 h-10 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-colors flex items-center justify-center">
              <Trash2 class="w-4 h-4 text-destructive" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, Edit2, Trash2 } from 'lucide-vue-next'

interface InboxItem {
  id: string
  title: string
  description: string
  confidence: number
  priority: 'high' | 'medium' | 'low'
  agent: string
  timestamp: string
}

const inboxItems: InboxItem[] = [
  {
    id: '1',
    title: 'Meeting request from Sarah Chen',
    description: 'Would like to schedule a 30-minute call to discuss Q2 planning',
    confidence: 95,
    priority: 'high',
    agent: 'Email Agent',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    title: 'Expense report approval needed',
    description: 'Travel expenses for Feb conference - $1,247.50',
    confidence: 88,
    priority: 'medium',
    agent: 'Finance Agent',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    title: 'Update project timeline',
    description: 'Suggested adjustments to Project Atlas milestones based on team capacity',
    confidence: 92,
    priority: 'medium',
    agent: 'Task Agent',
    timestamp: 'Yesterday',
  },
  {
    id: '4',
    title: 'Newsletter subscription',
    description: 'Tech Weekly digest - categorized as low priority reading',
    confidence: 78,
    priority: 'low',
    agent: 'Email Agent',
    timestamp: 'Yesterday',
  },
  {
    id: '5',
    title: 'Code review request',
    description: 'PR #247 - Authentication improvements ready for review',
    confidence: 91,
    priority: 'high',
    agent: 'Dev Agent',
    timestamp: '3 hours ago',
  },
]

const priorityColors: Record<string, string> = {
  high: 'bg-destructive/10 text-destructive border-destructive/20',
  medium: 'bg-primary/10 text-primary border-primary/20',
  low: 'bg-muted text-muted-foreground border-border',
}
</script>