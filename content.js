chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(response, sender, sendResponse) {
    console.log(response.txt);
    const imgArray = document.getElementsByTagName("img");

    for (var i = 0; i < imgArray.length; i++) {
        var imgTag = imgArray[i];
        imgTag.src = "C:/Users/huawei/Desktop/CatExtension/images/bigcatass.png";
    }
}