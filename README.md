# ATS Scanner App

An AI-powered ATS Simulation Tool for macOS.  
Compare your resume against job descriptions with keyword and semantic analysis — all processed locally, ensuring complete privacy.

---

## Features
- **Simple, Intuitive Interface**  
  Clean dark-mode UI supporting both text input and file uploads for resumes and job descriptions.
- **macOS Native Build**  
  Built on Electron, featuring native menu items and a custom About dialog.

---

## Technical Overview
- **Framework:** Electron  
- **Languages:** JavaScript, HTML, CSS  
- **Runtime:** Node.js (v22+)  
- **Packager:** @electron/packager (x64 macOS build)

---

## Local Development
```bash
npm install
npm start
npm run package-mac
ATS-Scanner-App/
├── dist/                          # Packaged macOS build
├── index.html                     # Main interface
├── main.js                        # Electron entry point (window, menus, About dialog)
├── package.json                   # Project metadata & build scripts
├── netlify.toml                   # Deployment configuration (for web hosting of index.html)
├── node_modules/                  # Dependencies
└── README.md                      # This file
About

Developer: Nicholas J. Hidalgo
Email: atscannerapp@nicholashidalgo.com
Website: https://nicholashidalgo.com

Version 1.0.0 — © 2025 ATS Scanner App
All processing is local. No data is stored or transmitted externally.

This project is licensed under the MIT License. See the LICENSE file for details.
