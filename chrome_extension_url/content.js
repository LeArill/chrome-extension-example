console.log("hello");

let file = "/images/bigcatass.png";

let imgs = document.getElementsByTagName("img");

for (imgEle of imgs) {
    let url = chrome.runtime.getURL(file);
    imgEle.src = url;
}