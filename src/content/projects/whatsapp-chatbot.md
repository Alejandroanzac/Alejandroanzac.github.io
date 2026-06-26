---
title: "WhatsApp Student-Support Chatbot"
category: "Backend / API"
tech: ["TypeScript", "Cloudflare Workers", "KV", "R2", "D1"]
year: 2026
summary: "Serverless WhatsApp chatbot that guides students through a support flow and hands complex cases off to human advisors. Contributed via code review and architecture analysis."
featured: true
private: true
# NOTE: No repo link on purpose — this is a private/confidential project.
# Keep the client anonymous and confirm your exact role before publishing.
# Raw notes live in ../../../private/chatbot-whatsapp/ (NOT deployed).
---

A serverless WhatsApp chatbot built on **Cloudflare Workers** that walks students
through a guided support flow and escalates complex cases to human advisors. State
lives in **KV**, finished conversations are archived to **R2**, and advisor cases are
stored in **D1**, with an admin dashboard for advisors to triage them.

My contribution focused on **code review and architecture analysis** — tracing the
conversation-history pipeline end to end and identifying data-integrity gaps.

### What I learned

- **Serverless state design.** How a stateless Worker keeps per-user conversation
  state in KV, archives completed conversations to R2, and surfaces structured cases
  from D1 — and the trade-offs between each store.
- **Transcripts have a direction.** Every history entry is either `inbound` (from the
  student) or `outbound` (from the bot). I found that only inbound entries were being
  recorded, so the saved transcript captured just half of the dialogue.
- **Audit trails need deliberate retention.** History was trimmed to the last 12
  entries on every save, so by the time a conversation was archived most of the record
  was already gone — a size cap meant for performance can silently break an audit log.
- **Webhooks get redelivered.** The messaging provider re-sends webhooks until it sees
  a `200`, so the handler must de-duplicate by message id and persist state *before*
  sending replies, to avoid double-processing and lost data.
- **Right view for the right user.** Advisors see a curated summary built from
  structured form data, not the raw transcript — separating the operational view from
  the full record.

> Private project — source code and client details are intentionally not shared here.
