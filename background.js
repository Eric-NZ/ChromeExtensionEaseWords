var selectedWord = "none selected"
// handle received message
chrome.runtime.onMessage.addListener(onReceiveMessage)

function onReceiveMessage(request, sender, sendResponse) {
    selectedWord = request.msgText
    console.log(selectedWord)
}