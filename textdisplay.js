function displayText(text) {
    var br = document.createElement("br");
    var displayArea = document.getElementById("displayArea");
    var speechBubbleOut = document.createElement("div");
    var speechBubble = document.createElement("div");
    speechBubble.className = "speech-bubble";
    speechBubble.textContent = text;
    speechBubble.style.width = "max-content";
    speechBubble.style.height = "max-content";
    speechBubble.style.maxWidth = "40%";
    speechBubble.style.wordWrap = "break-word";
    speechBubbleOut.appendChild(speechBubble);
    speechBubbleOut.style.width = "100%";
    displayArea.appendChild(speechBubbleOut);
    displayArea.appendChild(br);
    displayArea.appendChild(br); // Additional line break
    //displayArea.appendChild(br); // Additional line break
    //displayArea.appendChild(br); // Additional line break
    // Clear float after each message
    var clearDiv = document.createElement("div");
    clearDiv.style.clear = "both";
    displayArea.appendChild(clearDiv);
    window.scrollTo(0, document.body.scrollHeight);
}

function displayText2(text) {
    var br = document.createElement("br");
    var displayArea = document.getElementById("displayArea");
    var speechBubbleOut = document.createElement("div");
    var speechBubble = document.createElement("div");
    speechBubble.className = "speech-bubble2";
    speechBubble.textContent = text;
    speechBubble.style.width = "max-content";
    speechBubble.style.height = "max-content";
    speechBubble.style.maxWidth = "40%";
    speechBubble.style.wordWrap = "break-word";
    speechBubbleOut.appendChild(speechBubble);
    speechBubbleOut.style.width = "100%";
    displayArea.appendChild(speechBubbleOut);
    displayArea.appendChild(br);
    displayArea.appendChild(br); // Additional line break
    //displayArea.appendChild(br); // Additional line break
    //displayArea.appendChild(br); // Additional line break
    // Clear float after each message
    var clearDiv = document.createElement("div");
    clearDiv.style.clear = "both";
    displayArea.appendChild(clearDiv);
    window.scrollTo(0, document.body.scrollHeight);
}