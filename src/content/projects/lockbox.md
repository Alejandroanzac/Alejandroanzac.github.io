---
title: "LockBox"
category: "Tools / Security"
tech: ["Python", "Tkinter", "AES-256-GCM", "PBKDF2", "Syncthing"]
year: 2026
summary: "Cross-platform password manager (Windows/Linux) with an AES-256-GCM encrypted vault. Master password is never stored: it's derived on the fly via PBKDF2 with 600k iterations."
featured: true
repo: "https://github.com/Alejandroanzac/LockBox"
---

Cross-platform password manager built with Python and Tkinter that runs on Windows and Linux from the same codebase.
Vault data is encrypted with AES-256-GCM using a key derived from the master password through PBKDF2-SHA256 (600,000 iterations + random salt), so the master password is never stored anywhere.
The whole vault is a single encrypted file with a configurable location, so it can be shared between machines through a synced folder (for example with Syncthing) without exposing any secrets.
Features include a password generator backed by the OS cryptographic random source, strength analysis, one-click copy with auto-clear clipboard, and a search bar for quick entry lookup.
