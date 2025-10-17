// main.js — Entry point for the ATS Scanner Electron application
// Creates the main browser window, loads index.html, and sets up custom About and Help menus.

const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');

function createWindow() {
  process.chdir(__dirname); // ensure consistent working directory

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'icon.png'),
  });

  mainWindow.loadFile('index.html');
  // mainWindow.webContents.openDevTools(); // uncomment for debugging
}

// — About Dialog —
function showAboutDialog() {
  const iconPath = path.join(__dirname, 'icon.png');
  const options = {
    type: 'info',
    buttons: ['OK'],
    title: 'About ATS Scanner',
    message: 'ATS Scanner',
    detail:
      'AI-Powered ATS Simulation Tool for macOS\n' +
      'Version 1.0.0\n\n' +
      'Developed by Nicholas J. Hidalgo\n' +
      'Email: atscannerapp@nicholashidalgo.com\n' +
      'Website: https://nicholashidalgo.com',
    icon: iconPath,
  };
  dialog.showMessageBox(null, options);
}

// — Menu Configuration —
const template = [
  {
    label: 'ATS Scanner',
    submenu: [
      { label: 'About ATS Scanner', click: showAboutDialog },
      { type: 'separator' },
      { role: 'quit' },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Contact Support',
        click: async () => {
          await shell.openExternal('mailto:atscannerapp@nicholashidalgo.com');
        },
      },
      {
        label: 'Visit Website',
        click: async () => {
          await shell.openExternal('https://nicholashidalgo.com');
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// — App Lifecycle —
app.whenReady().then(createWindow);

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
