// main.js — Entry point for the ATS Scanner Electron application
// Creates the main browser window, loads ats_scanner.html,
// and sets up custom About and Help menus with branding.

const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    icon: path.join(__dirname, 'icon.png')
  });

  mainWindow.loadFile('ats_scanner.html');

  // Uncomment for debugging
  // mainWindow.webContents.openDevTools();
}

// --- About Dialog ---
function showAboutDialog() {
  const iconPath = path.join(__dirname, 'icon.png');

  const options = {
    type: 'info',
    buttons: ['OK'],
    title: 'About ATS Scanner',
    message: 'ATS Scanner',
    detail: `
AI-Powered ATS Simulation Tool for macOS
Version ${app.getVersion()}

Developed by Nicholas J. Hidalgo
Email: atscannerapp@nicholashidalgo.com
Website: https://nicholashidalgo.com
    `,
    icon: iconPath
  };

  dialog.showMessageBox(null, options);
}

// --- Menu Configuration ---
const template = [
  {
    label: 'ATS Scanner',
    submenu: [
      { label: 'About ATS Scanner', click: showAboutDialog },
      { type: 'separator' },
      { role: 'quit' }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Contact Support',
        click: async () => {
          await shell.openExternal('mailto:atscannerapp@nicholashidalgo.com');
        }
      },
      {
        label: 'Visit Website',
        click: async () => {
          await shell.openExternal('https://nicholashidalgo.com');
        }
      }
    ]
  }
];

// Build and set the menu
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// --- App Lifecycle ---
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
