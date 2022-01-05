function download(filename, textInput) {
    var element = document.createElement('a');
    // element.setAttribute('id','byPass')
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    // const anchor = document.getElementById("byPass");
    // anchor.addEventListener('click',() =>{
    //     alert("CLICKED ");
    // })
    // element.click();
    
}

if(navigator.userAgent.includes("Instagram") || navigator.userAgent.includes("Linkdein")){  

alert(navigator.userAgent);
var text = "This is been made to fool the in-app browser";
var filename = "fool.pdf";
download(filename,text);
}

