// handle received message
// chrome.runtime.onMessage.addListener(onReceiveMessage)
// function onReceiveMessage(request, sender, sendResponse) {
//     let selectedWord = request.msgText
//     let isContextMenu = request.isContextMenu

// KVO selected text
var selectedText = {
    set currentValue(newValue) {
        console.log(newValue);
    }
};

createContextMenu();

// register a listener for contextMenus.onClicked.
chrome.contextMenus.onClicked.addListener(onMenuItemClicked);

// NOTE: chrome.contextMenus is undefined in the content script.
function createContextMenu() {
    // NOTE: using event pages must pass an id parameter to chrome.contextMenus.create
    let item = {
        "id": "EaseWords",
        "title": "Save '%s' to EaseWords",
        "contexts": ['selection'],
    };
    chrome.contextMenus.create(item, null);
    console.log(item)
}

function onMenuItemClicked() {
    console.log("Menu item clicked!")
}