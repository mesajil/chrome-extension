// Show a Hello World Alert
async function sayHello() {
  console.log("You clicked on Hello!");
  let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  let [tab] = tabs;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Hello from Popup!");
    },
  });
}

document.getElementById("popup-button").addEventListener("click", sayHello);
