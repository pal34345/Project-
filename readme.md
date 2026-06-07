# Adaptive Workplace OS
### Microsoft Build AI 2026 — Source Code

> **Don't switch apps. Talk to your OS.**
> One interface that auto-submits daily tasks, runs projects on employee feasibility, audits with GenAI, and escalates ideas to management.

---

## Live Demo

Open `index.html` in any browser — no build step, no dependencies, no server required.

---

## What This Is

A functional prototype of **Adaptive Workplace OS** — an AI-powered workplace orchestration platform submitted to the Microsoft Build AI 2026 Hackathon (Theme: AI at Work — Productivity & Teamwork Reimagined).

---

## Core Features Demonstrated

### ⚡ Auto-Task Submission Engine
Daily tasks are auto-submitted with zero task-level competition. Projects run autonomously based on each employee's feasibility score — no manual sprint planning required.

### 👥 Shared Team Dashboard
Common team view with preloaded tools per context. No setup required — the OS loads the right tools for the team automatically.

### 🤖 AI Assistant Bot
Conversational prompt interface — no forms, no file-switching. Type intent, get action. Handles meeting summaries, email drafts, task status, idea logging, and compliance queries.

### ◎ Meeting Intelligence Hub
All meetings transcribed, summarised and stored automatically. Action items extracted. Transcripts retrievable via bot or knowledge search.

### ◇ GenAI Audit Engine
Upload images or data files → write a natural language audit prompt → run a GenAI testing session → receive a compliance score with per-check breakdown. Built for Azure AI Document Intelligence integration.

### ◉ Innovation Bot → Repository → Management
Ideas captured via bot prompt → stored to repository → AI brief auto-generated → escalated to department head with summary. Closes the employee-to-management innovation loop.

### ▦ Management Dashboard
Productivity score, audit pass rate, project autonomy index, workload heatmap, and escalated idea briefs — all in one view.

---

## File Structure

```
adaptive-workplace-os/
├── index.html                    # Entry point
├── src/
│   ├── styles/
│   │   └── main.css              # Full design system
│   ├── data/
│   │   └── mockdata.js           # All mock data
│   ├── components/
│   │   ├── dashboard.js          # Main dashboard view
│   │   ├── tasks.js              # Task Engine + Auto-Submit
│   │   ├── meetings.js           # Meeting Intelligence Hub
│   │   ├── audit.js              # GenAI Audit Engine
│   │   ├── ideas.js              # Innovation Bot
│   │   ├── management.js         # Management Dashboard
│   │   └── bot.js                # AI Assistant Bot
│   └── app.js                    # Router + Navigation
```

---

## Technology Stack (Production Architecture)

| Layer       | Technology                                                    |
|-------------|---------------------------------------------------------------|
| Frontend    | React · Next.js · Microsoft Fluent UI                        |
| Backend     | .NET Core · Azure Functions                                  |
| AI Services | Azure OpenAI · Azure AI Foundry · Azure AI Search · Azure AI Speech · Azure AI Document Intelligence |
| Data        | Azure Blob Storage · Azure SQL Database                      |
| Identity    | Microsoft Entra ID                                           |
| Automation  | Microsoft Power Automate · Microsoft Graph APIs              |

The prototype uses vanilla JS + CSS for zero-dependency demonstration. Production implementation uses the Azure stack above.

---

## How to Run

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server (recommended)
npx serve .
# or
python -m http.server 8000
```

---

## Submitted By

**Pallab Behari Chaklanabis**  
Solo submission — Microsoft Build AI 2026  
Electrical Engineering Graduate · Kolkata, India
