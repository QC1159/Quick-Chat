let ws = "Closed"

function startSocket() {
    ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');
    ws.onclose = function() {
        ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');
    }
}
function send(msg, from, to) {
    ws.send("QUICKCHAT[{$msg=" + msg + ",$from=" + from + ",$to=" + to + "}]");
}