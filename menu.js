var id = chrome.contextMenus.create({"title": "Search PDNS for '%s'",
    "contexts":['selection'],
    "onclick": function(info, tab){
        chrome.tabs.create({
            url: "https://pdns.ren-isac.net/search?q=" + info['selectionText']
        });
    }
});

chrome.omnibox.onInputEntered.addListener(
    function(text) {
        chrome.tabs.create({ url: 'https://pdns.ren-isac.net/search?q=' + text})
    }
);
