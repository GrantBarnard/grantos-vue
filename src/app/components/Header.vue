<template>
  <header class="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
    <!-- Search Bar -->
    <div class="flex-1 max-w-xl">
      <div class="relative">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search tasks, emails, or ask AI..."
          class="w-full pl-10 pr-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <kbd class="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-background border border-border rounded text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>
    </div>
    
    <!-- Right Actions -->
    <div class="flex items-center gap-3">
      <button class="w-9 h-9 rounded-lg hover:bg-muted transition-colors flex items-center justify-center">
        <Bell class="w-5 h-5 text-muted-foreground" />
      </button>
      <button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm">
        <Plus class="w-4 h-4" />
        Quick Add
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Search, Bell, Plus } from 'lucide-vue-next'
</script>