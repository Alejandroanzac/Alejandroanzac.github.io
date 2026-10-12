---
title: "ASTRON Fit - Training App with an AI Coach"
category: "Full-Stack / AI"
tech: ["TypeScript", "React", "PWA", "Fastify", "SQLite", "MCP", "Claude Code", "Linux"]
year: 2026
summary: "Offline-first training app for my phone with an AI coach: a sandboxed Claude Code agent that reads my real workouts through its own MCP server and can only propose changes as drafts I approve. Self-hosted on a Linux laptop."
featured: true
order: 1
private: true
---

A personal training app (PWA) that I use at the gym from my phone, with an **AI coach** that
answers from my real data instead of guessing.

**The app.** Workout logging (sets, rest timer, personal records), cardio, body metrics,
routines and a weekly plan, progress charts and a nutrition module (daily calorie, protein and
water targets computed with the Mifflin-St Jeor equation and ISSN protein ranges, quick logging
and a weekly meal plan). It is **offline-first**: everything is stored on the phone (IndexedDB)
and a custom sync engine (last-write-wins, cursor-based pulls) uploads it when the connection
comes back. It can also import **Galaxy Watch** data from a Samsung Health export (steps,
calories, sleep stages, heart rate), parsed in the browser so the raw file never leaves the phone.

**The coach.** The backend launches **Claude Code** in headless mode for each message and streams
the answer over Server-Sent Events. The agent has **no shell, file or web access**: its only door
is an **MCP server** I wrote with read tools (workouts, records, weekly volume, nutrition, watch
data) and "propose" tools. Every change it suggests (a routine, a weekly plan, a meal plan, a
calorie adjustment) is saved as a **draft** that I accept or reject in the app; the server
re-validates safety limits on accept. Specialized sub-agents handle progress analysis, planning
and nutrition.

**Infrastructure.** Runs on a Linux laptop (CachyOS) as a systemd user service that starts on
boot, published only to my own devices through **Tailscale** with HTTPS, with daily hot backups
of the SQLite database and a status page.

**Quality.** Built phase by phase with written design docs and decision logs; 265 automated tests
(Vitest) plus browser end-to-end tests (Playwright). Developed with AI-assisted tooling (Claude
Code), reviewed and directed by me.
