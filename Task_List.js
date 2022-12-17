let table = document.getElementById("table");
const parsedArr = JSON.parse(localStorage.getItem("session"));
const parsedArr2 = JSON.parse(localStorage.getItem("session2"));
const parsedArr3 = JSON.parse(localStorage.getItem("session3"));

function select() {
  let currentRow = table.insertRow(-1);
  let Cell0 = currentRow.insertCell(0);
  let Cell1 = currentRow.insertCell(1);
  let Cell2 = currentRow.insertCell(2);

  Cell0.innerHTML = document.getElementById("select1").value;
  Cell1.innerHTML = document.getElementById("select2").value;
  Cell2.innerHTML = document.getElementById("select3").value;

  let a1 = JSON.parse(localStorage.getItem("session")) || [];
  a1.push(document.getElementById("select1").value);
  localStorage.setItem("session", JSON.stringify(a1));

  let a2 = JSON.parse(localStorage.getItem("session2")) || [];
  a2.push(document.getElementById("select2").value);
  localStorage.setItem("session2", JSON.stringify(a2));

  let a3 = JSON.parse(localStorage.getItem("session3")) || [];
  a3.push(document.getElementById("select3").value);
  localStorage.setItem("session3", JSON.stringify(a3));
}

for (let i = 0; i < parsedArr.length; i++) {
  table.insertRow(-1);
  let currentRow = table.insertRow(-1);
  let Cell0 = currentRow.insertCell(0);
  let Cell1 = currentRow.insertCell(1); 
  let Cell2 = currentRow.insertCell(2);

  Cell0.innerHTML = parsedArr[i];
  Cell1.innerHTML = parsedArr2[i];
  Cell2.innerHTML = parsedArr3[i];
}

function deleteRows(){
    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    localStorage.clear();
}


