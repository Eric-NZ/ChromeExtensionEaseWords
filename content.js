
// Add a listener on selection event
window.addEventListener('mouseup', wordSelected);

// handle event
function wordSelected() {
    let selectedText = window.getSelection().toString()
    console.log(selectedText);
}

// After user selected text, send message to background.js
if (selectedText.length > 0) {
    let message = {
        text = selectedText
    }

    // send message

}
