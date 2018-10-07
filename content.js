
// selected text: using setter of JavaScript
var selectedText =  {
    set currentValue(newValue) {
        console.log(newValue);
    }
}

// Add a listener on double click or click event
window.addEventListener('mouseup', onMouseUp);
// Add a listener on right click event
window.addEventListener('contextmenu', onContentMenu)

// handle mouse up event
function onMouseUp() {
    let text = window.getSelection().toString()
    if (text.length > 0) {
        // message is a json object
        let message = {
            msgText: text
        };

        chrome.runtime.sendMessage(message)
        selectedText.currentValue = text
    }
}

// handle right click event
function onContentMenu() {
    // get selected text
    let text = window.getSelection().toString()
    if (text.length > 0) {
        selectedText.currentValue = text
    }
    
}
