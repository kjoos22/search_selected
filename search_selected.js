let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log("The default color has been set to %cgreen", `color: ${color}`)
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "search_new_tab") {
        console.log(document.getSelection());
    }
});