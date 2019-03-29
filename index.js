const electron = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {
    //Create new window
    mainWindow = new BrowserWindow({});

    //Load html
    mainWindow.loadFile('views/index.html');

    //When window is closed, stop the app
    mainWindow.on('closed', () => {
        app.quit();
    });
});