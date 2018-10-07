// create context menu item
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

function onMenuItemClicked(info) {
    if (info.selectionText.length > 0) {
        // add new word to list
        addNewWord(info.selectionText);
    }
}

function addNewWord(selectionText) {
    console.log("I am going to add new word".concat(" ", selectionText));
}
