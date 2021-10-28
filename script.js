var hs=[0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4,4.5,5,5.5,6,6.5,7,7.5,8];

window.onload=function table(){
  for(i=0;i<hs.length;i++){
    var table = document.getElementById("table");
    var tr = table.tBodies[0].insertRow(-1);
    var cell1 = tr.insertCell(0);
    var cell2 = tr.insertCell(1);
    cell2.id="cell"+i;
    cell1.appendChild(document.createTextNode(hs[i].toFixed(2)));
    cell2.appendChild(document.createTextNode("-"));
  }
}

function calc(){
  let value=document.getElementById("input").value;
  for(i=0;i<hs.length;i++){
        var cell = document.getElementById("cell"+i);
        cell.innerText=(value*hs[i]).toFixed(2);
  }
}
