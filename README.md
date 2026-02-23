# GrantOS - Personal AI Life Operating System

A modern, desktop-first SaaS dashboard built with Vue 3, providing a comprehensive personal AI life operating system interface.

## Features

- **Dashboard Overview** - Daily briefing with task completion stats, inbox queue, meetings, and productivity analytics
- **Inbox Queue** - AI-powered email and notification processing with confidence scoring
- **Tasks** - Task management with list and board views, progress tracking, and agent assignment
- **Calendar** - Month view calendar with event management
- **Agents** - AI agent performance monitoring with analytics and activity tracking

## Design System

- **Colors:**
  - Background: `#F5F6F8` (light gray)
  - Primary: `#3F63F6` (blue)
  - Dark: `#1F2430` (charcoal)
  - Accent: `#B8E34F` (lime green)

- **Components:**
  - Rounded icon buttons in sidebar navigation
  - Card-based layouts with subtle shadows
  - Custom SVG-based charts for data visualization
  - Responsive design optimized for desktop

## Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vue Router 5** - Official router for Vue.js
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide Vue Next** - Beautiful & consistent icon library
- **Vite** - Next generation frontend tooling

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable Vue components
│   │   │   ├── BarChart.vue
│   │   │   ├── LineChart.vue
│   │   │   ├── Header.vue
│   │   │   ├── Layout.vue
│   │   │   └── Sidebar.vue
│   │   ├── pages/           # Page components
│   │   │   ├── Dashboard.vue
│   │   │   ├── InboxQueue.vue
│   │   │   ├── Tasks.vue
│   │   │   ├── Calendar.vue
│   │   │   └── Agents.vue
│   │   ├── App.vue          # Root component
│   │   └── router.ts        # Vue Router configuration
│   ├── styles/              # Global styles
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   └── main.ts              # Application entry point
├── index.html
├── vite.config.ts
└── package.json
```

## Features by Page

### Dashboard
- Personalized greeting and daily briefing
- Key metrics: tasks completed, inbox items, meetings, productivity score
- Today's agenda with meeting details
- Priority tasks with due dates
- Productivity analytics chart
- Inbox queue preview
- Active agents status

### Inbox Queue
- AI-processed items with confidence scoring
- Priority-based categorization
- Approve, edit, or delete actions
- Agent attribution for each item

### Tasks
- List and board view toggle
- Task status tracking (todo, in-progress, completed)
- Priority indicators (high, medium, low)
- Progress bars
- Agent assignment
- Due date tracking

### Calendar
- Month view with event display
- Color-coded events
- Upcoming events list
- Navigation controls

### Agents
- Performance metrics for each AI agent
- Weekly activity charts
- Performance trend visualization
- Recent activity timeline
- Agent status indicators

## License

© 2024 GrantOS. All rights reserved.