chrome.webNavigation.onBeforeNavigate.addListener(details => {
    const redirectUrl = "https://youtube.com"; // Change the URL to the desired redirect destination
    chrome.tabs.update(details.tabId, { url: redirectUrl });
  });
  