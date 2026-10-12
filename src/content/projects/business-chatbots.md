---
title: "WhatsApp Chatbots for Small Businesses (in development)"
category: "Backend / API"
tech: ["TypeScript", "Cloudflare Workers", "Durable Objects", "D1", "n8n", "AI Agents"]
year: 2026
summary: "Multi-tenant WhatsApp bots sold as a service: food ordering for small restaurants and appointment booking for clinics, plus an n8n version with an AI agent connected to Google Calendar."
featured: true
order: 3
private: true
---

Two products I am building to offer to local businesses in Mérida, based on what I learned
contributing to the [student-support chatbot](/portfolio):

- **Ordering bot for small restaurants:** a multi-tenant backend where customers order through
  WhatsApp from a digital menu; the business gets a dashboard and the order ticket.
- **Appointment bot for clinics** (dentists, physiotherapy, neurology): each clinic has its own
  profile (services, prices, durations, hours) and the bot books appointments and sends reminders.

Both run serverless on **Cloudflare Workers**, with a **Durable Object** per conversation and
**D1** for business data, webhook signatures that fail closed, and TypeScript with tests.

I also built a no-code version in **n8n** for a consulting partner: an **AI agent** (chat trigger,
conversation memory and a local LLM through Ollama during development) with tools to check and
book slots in **Google Calendar**.

Planned and built in phases with written decisions; developed with AI-assisted tooling (Claude
Code), reviewed and directed by me.
