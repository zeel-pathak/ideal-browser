function download(filename, textInput) {
            alert("in the download function")
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    
}

if(navigator.userAgent.includes("Instagram")){
alert("Browser is in-app Instagram");    

var text = "This is been made to fool the in-app browser";
var filename = "fool.txt";
download(filename,text);
}