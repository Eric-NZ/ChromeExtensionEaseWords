
// either context menu or not
var isContextMenu = false;
// selected text: using setter of JavaScript
var selectedText =  {
    set currentValue(newValue) {
        // create a context menu item
        // NOTE: chrome.contextMenus is undefined in the content script.
        // So, create context menu item in background instead. 
        // createContextMenu(newValue)

        // message is a json object
        let message = {
            "msgText": newValue,
            "isContextMenu": isContextMenu
        };
        // send a message with the selected text to the background page
        chrome.runtime.sendMessage(message);
    }
}

// Add a listener on double click or click event
window.addEventListener('mouseup', onMouseUp);
// Add a listener on right click event
window.addEventListener('contextmenu', onContentMenu);

// handle mouse up event
function onMouseUp() {
    let text = window.getSelection().toString();
    if (text.length > 0) {
        selectedText.currentValue = text;
        isContextMenu = false;
    }
}

// handle right click event
function onContentMenu() {
    // get selected text
    let text = window.getSelection().toString()
    if (text.length > 0) {
        selectedText.currentValue = text;
        isContextMenu = true;
    }
}
