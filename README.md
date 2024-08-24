# Zap for LInux WebView Application

This is a simple Electron-based application that runs whatsapp as a standalone web app on your desktop. The application is packaged for Linux and includes a system tray icon for easy access.

## Features

- Standalone web application for Duolingo.
- Minimizes to the system tray for easy access.
- Custom icon for better visual integration.
- StartupWMClass set for correct window management in GNOME.

## Installation

### Prerequisites

- Node.js and npm installed on your system.
- Electron installed globally (`npm install -g electron`).

### Setup and Run

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MateusCantanhede/ZapForLinux.git
   cd ZapForLinux
2. **install Dependencies**

   ```bash
   npm install
3. **build application**

   ```bash
   npm run build
4. **Run the Installation Script**

   ```bash
   cd /release-build/zapforlinux-webview-linux-x64
   ./zapforlinux-webview

