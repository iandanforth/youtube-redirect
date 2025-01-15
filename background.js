chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url === "https://www.youtube.com/") {
      return {redirectUrl: "https://www.youtube.com/feed/subscriptions"};
    }
  },
  {urls: ["*://www.youtube.com/"]},
  ["blocking"]
);

