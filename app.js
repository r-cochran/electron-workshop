const { ipcRenderer } = require( "electron" );

document.addEventListener( "DOMContentLoaded", () => {
    const version = process.version;
    const e = document.getElementById( "info" );
    e.textContent = `I'm running Node.js version: ${ version }`;
} );

document.addEventListener( "DOMContentLoaded", () => {
    const version = process.version;
    const info = document.getElementById( "info" );
    info.textContent = `I'm running Node.js version: ${ version }`;

    const btn = document.getElementById( "clickme" );
    btn.addEventListener( "click", e => {
        console.log( "I was clicked." );
        let responseValue = ipcRenderer.sendSync( "show-dialog", { message: "The button was clicked" } );
        console.log("response value: " + responseValue);
    } );
} );