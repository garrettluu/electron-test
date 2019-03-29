const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {
    //Create new window
    mainWindow = new BrowserWindow({});

    mainWindow.loadFile('views/index.html');

    mainWindow.on('closed', () => {
        app.quit();
    });
});