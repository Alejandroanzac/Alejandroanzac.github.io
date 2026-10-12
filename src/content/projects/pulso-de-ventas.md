---
title: "Pulso de Ventas - Sales & Finance Dashboard"
category: "Full-Stack / Business"
tech: ["Node.js", "Fastify", "Prisma", "PostgreSQL", "Chart.js", "Docker"]
year: 2026
summary: "Sales and finance dashboard for small businesses: upload the daily Excel report and get sales by day, week, fortnight, month and year, top products, expenses and net profit, across multiple branches."
featured: true
order: 2
private: true
---

A web dashboard I am building as a product for small businesses that already track their sales
in Excel. The owner uploads the file and gets a clear picture of the business without changing
how they work.

- **Sales:** totals by day, week, fortnight, month and year, best-selling products and trends.
- **Finance:** summary, sales and expenses views with commission and VAT calculations, fixed
  expenses prorated over partial months and net profit.
- **Multi-branch:** each branch with its own data and staff accounts with roles.
- **Upload history with undo:** a wrong file can be rolled back instead of corrupting the numbers.
- **Accounts:** sessions, password reset by email, and logging out other sessions when the
  password changes.

Backend in Node.js (Fastify) with Prisma and PostgreSQL (Docker for local development), built in
phases with a written decision log. Developed with AI-assisted tooling (Claude Code), reviewed and
directed by me.
