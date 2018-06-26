browser.webRequest.onBeforeRequest.addListener((details) => {
	const address = new URL(details.url);

	if (address.hostname.endsWith("youtube-nocookie.com")) {
		address.hostname = "www.youtube.com";
	}

	address.href = "freetube://" + encodeURI(address.href);

	// Close the tab in which the link would get opened after 500ms.
	if (details.tabId !== -1) {
		setTimeout((tab) => {
			browser.tabs.remove(tab);
		}, 500, details.tabId);
	}

	return {
		redirectUrl: address.href
	};
}, {
	urls: [
		"*://*.youtube.com/*",
		"*://*.youtube-nocookie.com/*",
		"*://*.youtu.be/*",
		"*://*.hooktube.com/*"
	],
	types: [
		"main_frame"
	]
}, [ "blocking" ]);
