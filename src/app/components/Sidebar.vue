<template>
  <aside class="w-[240px] bg-card border-r border-border flex flex-col py-6">
    <!-- Logo -->
    <div class="px-4 mb-8 flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <span class="text-white text-sm">G</span>
      </div>
      <span class="text-foreground">GrantOS</span>
    </div>
    
    <!-- Main Navigation -->
    <nav class="flex-1 px-3 space-y-1">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm',
          route.path === item.path || (item.path === '/' && route.path === '/')
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
        ]"
      >
        <component :is="item.icon" class="w-4 h-4" />
        <span class="flex-1">{{ item.label }}</span>
        <span v-if="item.badge" class="px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-xs">
          {{ item.badge }}
        </span>
      </RouterLink>

      <!-- Workspace Section -->
      <div class="pt-6">
        <p class="px-3 text-xs text-muted-foreground mb-2 uppercase tracking-wider">
          Workspaces
        </p>
        <RouterLink
          v-for="item in workspaceItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm',
            route.path === item.path
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          ]"
        >
          <component :is="item.icon" class="w-4 h-4" />
          <span>{{ item.label }}</span>
        </RouterLink>
      </div>
    </nav>

    <!-- Bottom Section -->
    <div class="px-3 space-y-1 border-t border-border pt-4">
      <RouterLink
        to="/settings"
        class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
      >
        <Settings class="w-4 h-4" />
        <span>Settings</span>
      </RouterLink>
      
      <button class="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm text-muted-foreground hover:bg-muted">
        <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">
          AM
        </div>
        <div class="flex-1 text-left">
          <p class="text-foreground text-sm">Alex Morgan</p>
        </div>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { LayoutDashboard, Inbox, CheckSquare, Calendar, Bot, BarChart3, FolderKanban, Settings } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/', badge: null },
  { icon: Inbox, label: 'Inbox Queue', path: '/inbox', badge: '12' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks', badge: null },
  { icon: Calendar, label: 'Calendar', path: '/calendar', badge: null },
  { icon: Bot, label: 'Agents', path: '/agents', badge: null },
]

const workspaceItems = [
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FolderKanban, label: 'Projects', path: '/projects' },
]
</script>