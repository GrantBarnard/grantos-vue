<template>
  <div class="p-8 max-w-[1400px] mx-auto">
    <!-- Greeting Section -->
    <div class="mb-8">
      <h1 class="text-3xl mb-2">Good morning, Alex</h1>
      <p class="text-muted-foreground">
        Here's your daily briefing. You have <span class="text-foreground">5 high priority</span> items today.
      </p>
    </div>

    <!-- Time Period Tabs -->
    <div class="flex items-center gap-2 mb-6">
      <button class="px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm">
        Today
      </button>
      <button class="px-4 py-1.5 text-muted-foreground hover:bg-muted rounded-lg text-sm">
        Week
      </button>
      <button class="px-4 py-1.5 text-muted-foreground hover:bg-muted rounded-lg text-sm">
        Month
      </button>
    </div>

    <!-- Top Stats Row -->
    <div class="grid grid-cols-4 gap-4 mb-6">
      <!-- Tasks Completed - Green -->
      <div class="bg-accent rounded-2xl p-6 relative overflow-hidden">
        <div class="absolute top-4 right-4">
          <CheckCircle2 class="w-6 h-6 text-accent-foreground/60" />
        </div>
        <div class="absolute top-3 right-3 text-xs px-2 py-1 bg-accent-foreground/10 rounded-md">
          +93%
        </div>
        <div class="mt-8">
          <p class="text-5xl mb-2 text-accent-foreground">24</p>
          <p class="text-sm text-accent-foreground/80">Tasks Completed</p>
        </div>
      </div>

      <!-- Inbox Items -->
      <div class="bg-card border border-border rounded-2xl p-6 relative">
        <div class="absolute top-4 right-4">
          <Inbox class="w-6 h-6 text-primary" />
        </div>
        <div class="absolute top-3 right-3 text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
          6 New
        </div>
        <div class="mt-8">
          <p class="text-5xl mb-2 text-foreground">12</p>
          <p class="text-sm text-muted-foreground">Inbox Items</p>
        </div>
      </div>

      <!-- Meetings Today -->
      <div class="bg-card border border-border rounded-2xl p-6 relative">
        <div class="absolute top-4 right-4">
          <Clock class="w-6 h-6 text-primary" />
        </div>
        <div class="absolute top-3 right-3 text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
          3.5h Left
        </div>
        <div class="mt-8">
          <p class="text-5xl mb-2 text-foreground">4</p>
          <p class="text-sm text-muted-foreground">Meetings Today</p>
        </div>
      </div>

      <!-- Productivity Score - Dark -->
      <div class="bg-secondary rounded-2xl p-6 relative">
        <div class="absolute top-4 right-4">
          <Zap class="w-6 h-6 text-secondary-foreground/60" />
        </div>
        <div class="absolute top-3 right-3 text-xs px-2 py-1 bg-white/10 text-secondary-foreground rounded-md">
          Active
        </div>
        <div class="mt-8">
          <p class="text-5xl mb-2 text-secondary-foreground">94%</p>
          <p class="text-sm text-secondary-foreground/80">Productivity Score</p>
        </div>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-3 gap-6">
      <!-- Left Column - 2/3 width -->
      <div class="col-span-2 space-y-6">
        <!-- Today's Agenda -->
        <div class="bg-card border border-border rounded-2xl p-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <CalendarIcon class="w-5 h-5 text-primary" />
              <h2 class="text-lg">Today's Agenda</h2>
            </div>
            <button class="text-sm text-primary hover:underline">View Calendar</button>
          </div>

          <div class="space-y-4">
            <!-- Event 1 -->
            <div class="flex gap-4">
              <div class="text-sm text-muted-foreground w-20">09:00 AM</div>
              <div class="flex-1">
                <div class="flex items-start gap-3">
                  <div class="w-1 h-12 bg-muted rounded-full" />
                  <div>
                    <p class="text-foreground">Weekly Team Sync</p>
                    <p class="text-sm text-muted-foreground">9:00 AM - 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Event 2 - Highlighted -->
            <div class="flex gap-4">
              <div class="text-sm text-muted-foreground w-20">10:30 AM</div>
              <div class="flex-1">
                <div class="flex items-start gap-3">
                  <div class="w-1 h-20 bg-primary rounded-full" />
                  <div class="flex-1">
                    <div class="flex items-start justify-between">
                      <div>
                        <p class="text-foreground mb-1">Product Design Review</p>
                        <p class="text-sm text-muted-foreground mb-2">
                          Reviewing the new GrantOS prototypes with the design team.
                        </p>
                        <div class="flex items-center gap-2">
                          <div class="flex -space-x-2">
                            <div class="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center border-2 border-card">
                              A
                            </div>
                            <div class="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center border-2 border-card">
                              B
                            </div>
                          </div>
                          <span class="text-xs text-muted-foreground">+2 others</span>
                        </div>
                      </div>
                      <span class="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
                        NOW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Event 3 -->
            <div class="flex gap-4">
              <div class="text-sm text-muted-foreground w-20">02:00 PM</div>
              <div class="flex-1">
                <div class="flex items-start gap-3">
                  <div class="w-1 h-12 bg-muted rounded-full" />
                  <div>
                    <p class="text-foreground">Client Call: JuiceLand</p>
                    <p class="text-sm text-muted-foreground">Google Meet • 30 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Priority Tasks -->
        <div class="bg-card border border-border rounded-2xl p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg">Priority Tasks</h2>
            <div class="flex items-center gap-2">
              <span class="text-xs px-2 py-1 bg-destructive/10 text-destructive rounded-md">
                Overdue (2)
              </span>
              <span class="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                High Priority
              </span>
            </div>
          </div>

          <div class="space-y-3">
            <!-- Task 1 -->
            <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Circle class="w-5 h-5 text-muted-foreground mt-0.5" />
              <div class="flex-1">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-foreground mb-1">Finalize Q3 Budget Propose</p>
                    <div class="flex items-center gap-3 text-xs text-muted-foreground">
                      <span class="flex items-center gap-1">
                        <CalendarIcon class="w-3 h-3" />
                        Yesterday
                      </span>
                      <span class="flex items-center gap-1">
                        <Users class="w-3 h-3" />
                        Read Finance
                      </span>
                    </div>
                  </div>
                  <span class="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-md">
                    OVERDUE
                  </span>
                </div>
              </div>
            </div>

            <!-- Task 2 -->
            <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Circle class="w-5 h-5 text-muted-foreground mt-0.5" />
              <div class="flex-1">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-foreground mb-1">Review Landing Page Mockups</p>
                    <div class="flex items-center gap-3 text-xs text-muted-foreground">
                      <span class="flex items-center gap-1">
                        <CalendarIcon class="w-3 h-3" />
                        Today • 6 PM
                      </span>
                      <span class="flex items-center gap-1">
                        <Users class="w-3 h-3" />
                        Marketing
                      </span>
                    </div>
                  </div>
                  <span class="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md">
                    NOW!
                  </span>
                </div>
              </div>
            </div>

            <!-- Task 3 -->
            <div class="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Circle class="w-5 h-5 text-muted-foreground mt-0.5" />
              <div class="flex-1">
                <p class="text-foreground mb-1">Update Agent Workflows</p>
                <div class="flex items-center gap-3 text-xs text-muted-foreground">
                  <span class="flex items-center gap-1">
                    <CalendarIcon class="w-3 h-3" />
                    Tomorrow
                  </span>
                  <span class="flex items-center gap-1">
                    <Users class="w-3 h-3" />
                    System
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full mt-4 py-2 text-sm text-primary hover:bg-muted rounded-lg transition-colors">
            View All Tasks
          </button>
        </div>

        <!-- Productivity Analytics -->
        <div class="bg-card border border-border rounded-2xl p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-lg mb-1">Productivity Analytics</h2>
              <p class="text-sm text-muted-foreground">
                Your task completion rate over the last 7 days
              </p>
            </div>
            <select class="px-3 py-1.5 bg-muted rounded-lg text-sm border-none outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>

          <BarChart :data="productivityData" :height="240" bar-color="#3F63F6" />
        </div>
      </div>

      <!-- Right Column - 1/3 width -->
      <div class="space-y-6">
        <!-- Inbox Queue -->
        <div class="bg-card border border-border rounded-2xl p-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <Inbox class="w-5 h-5 text-primary" />
              <h2 class="text-lg">Inbox Queue</h2>
            </div>
            <span class="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-md">
              4 New
            </span>
          </div>

          <div class="space-y-4">
            <!-- Inbox Item 1 -->
            <div class="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                  SJ
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between mb-1">
                    <p class="text-sm text-foreground">Sarah J.</p>
                    <span class="text-xs text-muted-foreground whitespace-nowrap">9m ago</span>
                  </div>
                  <p class="text-sm mb-2 text-foreground">Contract Renewal?</p>
                  <p class="text-xs text-muted-foreground mb-2">
                    Hi Alex. Just checking in on the contract renewal for next quarter...
                  </p>
                  <span class="inline-flex items-center gap-1 text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                    <Circle class="w-2 h-2 fill-current" />
                    Support Task
                  </span>
                </div>
              </div>
            </div>

            <!-- Inbox Item 2 -->
            <div class="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-8 h-8 rounded-full bg-[#0077B5] text-white text-xs flex items-center justify-center flex-shrink-0">
                  in
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between mb-1">
                    <p class="text-sm text-foreground">LinkedIn</p>
                    <span class="text-xs text-muted-foreground whitespace-nowrap">3h ago</span>
                  </div>
                  <p class="text-sm mb-2 text-foreground">New connection request</p>
                  <p class="text-xs text-muted-foreground mb-2">
                    Mark Cohen wants to connect with you.
                  </p>
                  <span class="inline-flex items-center gap-1 text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                    <Circle class="w-2 h-2 fill-current" />
                    Low Confidence
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full mt-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
            Process Queue
          </button>
        </div>

        <!-- Active Agents -->
        <div class="bg-card border border-border rounded-2xl p-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <Zap class="w-5 h-5 text-primary" />
              <h2 class="text-lg">Active Agents</h2>
            </div>
            <button class="w-6 h-6 rounded-md bg-muted hover:bg-accent transition-colors flex items-center justify-center">
              <span class="text-lg">+</span>
            </button>
          </div>

          <div class="space-y-4">
            <!-- Agent 1 -->
            <div class="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Inbox class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-sm text-foreground">Email Sorter</p>
                  <p class="text-xs text-muted-foreground">Last active: 2m ago</p>
                </div>
              </div>
              <div class="relative inline-block w-10 h-6">
                <input type="checkbox" class="sr-only peer" checked />
                <div class="w-10 h-6 bg-primary rounded-full peer-focus:ring-2 peer-focus:ring-primary/50 cursor-pointer">
                  <div class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                </div>
              </div>
            </div>

            <!-- Agent 2 -->
            <div class="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-muted text-muted-foreground flex items-center justify-center">
                  <CalendarIcon class="w-5 h-5" />
                </div>
                <div>
                  <p class="text-sm text-foreground">Scheduler</p>
                  <p class="text-xs text-muted-foreground">Last active: 7h ago</p>
                </div>
              </div>
              <div class="relative inline-block w-10 h-6">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-10 h-6 bg-muted rounded-full peer-focus:ring-2 peer-focus:ring-muted cursor-pointer">
                  <div class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-12 text-center">
      <p class="text-xs text-muted-foreground">© 2024 GrantOS. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2, Inbox, Clock, Zap, Calendar as CalendarIcon, Users, Circle } from 'lucide-vue-next'
import BarChart from '../components/BarChart.vue'

const productivityData = [
  { day: 'Mon', value: 18 },
  { day: 'Tue', value: 24 },
  { day: 'Wed', value: 20 },
  { day: 'Thu', value: 28 },
  { day: 'Fri', value: 26 },
  { day: 'Sat', value: 14 },
  { day: 'Sun', value: 12 },
]
</script>