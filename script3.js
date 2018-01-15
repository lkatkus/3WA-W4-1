function generateTable(){
    var tableContainer = document.getElementById("tableContainer");
    var table = document.createElement("table");
    tableContainer.appendChild(table);

    var x = "";
    var y = 1;

    for(let i = 0; i < 10; i++){
        let newTr = document.createElement("tr");
        table.appendChild(newTr);

        for(let j = 0; j < 10; j++){
            if(i==0){
                let newTd = document.createElement("td");
                newTr.appendChild(newTd);
                newTd.appendChild(document.createTextNode(x));
                x++;
            }else if(j==0){
                let newTd = document.createElement("td");
                newTr.appendChild(newTd);
                newTd.appendChild(document.createTextNode(y));
                y++;
            }else{
                let newTd = document.createElement("td");
                newTr.appendChild(newTd);
                newTd.appendChild(document.createTextNode(i * j));
            }
        }
    }
}
