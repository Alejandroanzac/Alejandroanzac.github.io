---
title: "LockBox"
category: "Tools / Security"
tech: ["Python", "Tkinter", "AES-256-GCM", "PBKDF2", "PyInstaller"]
year: 2026
summary: "Desktop password manager with an AES-256-GCM encrypted vault. Master password is never stored — derived on the fly via PBKDF2 with 600k iterations."
featured: true
repo: "https://github.com/Alejandroanzac/LockBox"
---

Desktop password manager built with Python and Tkinter, packaged as a standalone Windows executable via PyInstaller.
Vault data is encrypted with AES-256-GCM using a key derived from the master password through PBKDF2-SHA256 (600,000 iterations + random salt), so the master password is never stored anywhere.
Features include password strength analysis, one-click copy with auto-clear clipboard, and a search bar for quick entry lookup.
