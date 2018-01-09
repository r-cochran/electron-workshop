const electron = require( "electron" );
const path = require( "path" );
const reload = require( "electron-reload" );
const isDev = require( "electron-is-dev" );
const { app, BrowserWindow } = electron;
let mainWindow = null;

if ( isDev ) {
    const electronPath = path.join( __dirname, "node_modules", ".bin", "electron" );
    reload( __dirname, { electron: electronPath } );
}

app.on( "window-all-closed", () => {
    if ( process.platform !== "darwin" ) {
        app.quit();
    }
} );

app.on( "ready", function() {
    mainWindow = new BrowserWindow( { width: 800, height: 600, show: false } );
    mainWindow.loadURL( `file://${ __dirname }/index.html` );
    mainWindow.once( "ready-to-show", () => {
        mainWindow.show();
    } );
    mainWindow.on( "closed", () => {
        mainWindow = null;
    } );
} );