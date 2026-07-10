---
title: "WhatsApp Student-Support Chatbot"
category: "Backend / API"
tech: ["TypeScript", "Cloudflare Workers", "Durable Objects", "KV", "R2", "D1"]
year: 2026
summary: "Serverless WhatsApp chatbot that guides students through a support flow and hands complex cases off to human advisors. Contributed code review, a state-machine fix, and a payment-request feature."
featured: true
private: true
# NOTE: No repo link on purpose — this is a private/confidential project.
# Keep the client anonymous and confirm your exact role before publishing.
# Raw notes live in ../../../private/chatbot-whatsapp/ (NOT deployed).
---

A serverless WhatsApp chatbot built on **Cloudflare Workers** that walks students
through a guided support flow and escalates complex cases to human advisors.
Conversation state lives in a **Durable Object** per student with a **KV** projection,
finished conversations are archived to **R2**, and advisor cases are stored in **D1**,
with an admin dashboard for advisors to triage them.

My contribution started with **code review and architecture analysis** — tracing the
conversation-history pipeline end to end and identifying data-integrity gaps (since
fixed upstream) — and grew into **shipping fixes and features** through pull requests.

### What I shipped

- **A state-machine fix for post-handoff follow-ups.** Once a student's case was
  saved, a plain text or media follow-up — exactly what the bot's own copy invites —
  fell through to the router's fallback: the bot replied with the main menu, wiped the
  handoff state, and the student's next escalation created a **duplicate case record**.
  The fix keeps follow-ups inside the open case (stable case id, so the record keeps
  updating), moves the reply copy into the flow's single source of truth, and shipped
  with regression tests.
- **A payment-link request flow, end to end.** From a stakeholder request to shipped
  feature: a new menu option plus a global keyword let students ask for their payment
  link from any state. Requests hand off directly as **priority-1 cases** so they sort
  to the top of the advisor dashboard — a student asking to pay is time-sensitive. The
  bot deliberately never sends the link itself: links are personalized and identity
  must be validated, so a human advisor sends it. Built on top of the follow-up fix
  above, so the student's details land in the same case instead of a duplicate.

### What I learned

- **Serverless state design.** How a stateless Worker keeps per-student conversation
  state in a Durable Object (with KV as a best-effort read projection), archives
  completed conversations to R2, and surfaces structured cases from D1 — and the
  trade-offs between each store.
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
