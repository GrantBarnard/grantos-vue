<template>
  <div class="flex h-screen overflow-hidden bg-background">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-auto">
        <RouterView />
      </main>
    </div>
    
    <!-- Help Button -->
    <button class="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center z-50">
      <HelpCircle class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import { HelpCircle } from 'lucide-vue-next'
</script>