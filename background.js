browser.webRequest.onBeforeRequest.addListener((details) => {
	const address = new URL(details.url);
	console.log(address.href);

	if (address.hostname.endsWith("youtube-nocookie.com")) {
		address.hostname = "www.youtube.com";
	}

	address.href = "freetube://" + encodeURI(address.href);
	console.log(address.href);

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
