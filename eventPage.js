
// handle received message
// chrome.runtime.onMessage.addListener(onReceiveMessage)

// register a listener for contextMenus.onClicked.
chrome.contextMenus.onClicked.addListener(onMenuItemClicked);

function onReceiveMessage(request, sender, sendResponse) {
    let selectedWord = request.msgText
    let isContextMenu = request.isContextMenu

    // create context menu item
    if (isContextMenu) {
        createContextMenu(selectedWord)
    }
}

// create a context menu item
createContextMenu("Ease Words")
// NOTE: chrome.contextMenus is undefined in the content script.
function createContextMenu(menuTitle) {
    // NOTE: using event pages must pass an id parameter to chrome.contextMenus.create
    let item = {
        "id": "EaseWords",
        "title": menuTitle,
        "contexts": ['selection'],
    };
    chrome.contextMenus.create(item);
    console.log(item)
}

chrome.contextMenus.onClicked

function onMenuItemClicked() {
    console.log("Menu item clicked!")
}