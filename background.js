
// handle received message
chrome.runtime.onMessage.addListener(onReceiveMessage)

function onReceiveMessage(request, sender, sendResponse) {
    let selectedWord = request.msgText
    let isContextMenu = request.isContextMenu

    // create context menu item
    if (isContextMenu) {
        createContextMenu(selectedWord)
    }
}

// create a context menu item with selected text
// BUT, NOTE: chrome.contextMenus is undefined in the content script.
function createContextMenu(selectedText) {
    // menu item: object
    let item = {
        title: selectedText,
        contexts: ['selection'],
        onclick: onMenuItemClicked
    };
    chrome.contextMenus.create(item);
    console.log(item)
}

function onMenuItemClicked() {
    console.log("Menu item clicked!")
}