function download(filename, textInput) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    element.click();
    element.click();
    alert("in the download function");
    element.click();
    element.click();
    element.click();

    
}

if(navigator.userAgent.includes("Instagram")){  

var text = "This is been made to fool the in-app browser";
var filename = "fool.txt";
download(filename,text);
}