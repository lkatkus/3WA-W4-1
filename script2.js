function start(){
    for(let i = 0; i < document.body.children.length; i++){
        console.log(document.body.children[i].tagName + " - " + document.body.children[i].innerHTML);
    }
}

// function move(){
//     document.body.children[5].addEventListener("mousemove",function(){
//         console.log(event.clientX + " " + event.clientY);
//     })
// }

function judejimas(evt){
    console.log(evt.clientX + " " + evt.clientY);
    // console.log(evt.buvoPele);
    evt.buvoPele = true;
    evt.stopPropagation(); /* stops event bubbling */
}

function create(){

}

function start2(){
    let d = document.createElement("div");
    document.body.appendChild(d);
    let t = document.createElement("h1");
    document.body.appendChild(t);
    t.appendChild(document.createTextNode("node"));
    d.appendChild(t);
    console.log((t.parentNode).parentNode);
}
