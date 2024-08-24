const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let tray = null;
let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    // Definir um User-Agent moderno
    win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

    win.loadURL('https://web.whatsapp.com');
    win.removeMenu();

    win.on('minimize', function (event) {
        event.preventDefault();
        win.hide();
    });

    win.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault();
            win.hide();
        }

        return false;
    });

    // Criação do Tray com o ícone SVG
    tray = new Tray(path.join(__dirname, 'icons8-whatsapp-64.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Abrir Whatsapp', click: function () {
                win.show();
            }
        },
        {
            label: 'Sair', click: function () {
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);
    tray.setToolTip('Whatsapp WebView');
    tray.setContextMenu(contextMenu);

    tray.on('click', function () {
        win.show();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});