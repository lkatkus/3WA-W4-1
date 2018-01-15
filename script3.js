function generateTable(){
    var tableContainer = document.getElementById("tableContainer");
    var table = document.createElement("table");
    tableContainer.appendChild(table);

    var maxNum = 5;
    var x = "";
    var y = 1;

    for(let i = 0; i <= maxNum; i++){
        var newTr = document.createElement("tr");
        table.appendChild(newTr);

        for(let j = 0; j <= maxNum; j++){
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
                newTd.daugyba = i + " x " + j; /* saves the value to that exact TD */

                var parentRow;
                var newTdIndex = 0;
                var prevRow;
                var parentTable;

                newTd.addEventListener("mouseover",function(){
                    var tableCalc = document.getElementById("tableCalc");
                    // tableCalc.innerHTML = i + " x " + j;
                    tableCalc.textContent = this.daugyba;

                    parentRow = newTd.parentElement.childNodes; /*setting parent row */
                    parentTable = table.childNodes;

                    newTd.classList.add("red");

                    // HORIZONTAL COLORING
                    for(let m = 0; m < parentRow.length; m++){
                        parentRow[m].classList.add("grey");
                        if(parentRow[m] === newTd){
                            newTdIndex = m;
                            // break; /* comment out to span coloring to the end */
                        }
                    }

                    // VERTICAL COLORING
                    for(let m = 1; m < parentTable.length; m++){
                        prevRow = parentTable[m].childNodes;
                        prevRow[newTdIndex].classList.add("grey");
                        // if(prevRow[newTdIndex] === newTd){ /* comment out to stop coloring to the end */
                        //     break;
                        // }
                    }
                })

                newTd.addEventListener("mouseleave",function(){
                    var tableCalc = document.getElementById("tableCalc");
                    tableCalc.textContent = "<h1>lalal</h1>"; /* innerHTML adds html with "styling". innerText is better this way just to add data */

                    newTd.classList.remove("red");

                    // HORIZONTAL COLORING
                    for(var m = 0; m < parentRow.length; m++){
                        parentRow[m].classList.remove("grey");
                    }

                    // VERTICAL COLORING
                    for(let m = 1; m < parentTable.length; m++){
                        prevRow = parentTable[m].childNodes;
                        prevRow[newTdIndex].classList.remove("grey");
                    }

                })

            }
        }
    }
}
