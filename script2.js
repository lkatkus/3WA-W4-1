function start(){
    for(let i = 0; i < document.body.children.length; i++){
        console.log(document.body.children[i].tagName + " - " + document.body.children[i].innerHTML);
    }
}
