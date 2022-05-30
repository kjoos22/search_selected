chrome.commands.onCommand.addListener((command) => {
    if (command === "search_new_tab") {
        console.log("command detected");
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log(chrome.commands.getAll());
  });