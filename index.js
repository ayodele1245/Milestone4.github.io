let collectedData = [];
let table = document.getElementById("table");

function AddDatatoJson(event) {
  event.preventDefault();

  let memberData = {
    Id: Date.now(),
    FirstName: document.getElementById("fname").value,
    Surname: document.getElementById("sname").value,
    Age: document.getElementById("age").value,
    CurrentLevel: document.getElementById("level").value,
    FavoriteClub: document.getElementById("fclub").value,
  };

  collectedData.push(memberData);
  document.querySelector("form").reset(); //Clear the form for next input
  localStorage.setItem("dataList", JSON.stringify(collectedData)); //saving to local storage

  // Since data is not permanently persisted, we can display on as we receive. No need for loop
  PopulateTable(memberData);
}

function PopulateTable(member) {
 
    let row = table.insertRow(-1); // Add a new row at the end of the table

    //Create Cells with the new rows
    var idCell = row.insertCell(0);
    var firstNameCell = row.insertCell(1);
    var surname = row.insertCell(2);
    var ageCell = row.insertCell(3);
    var currentLevelCell = row.insertCell(4);
    var favoriteClubCell = row.insertCell(5);

    //Assign each value to the cells
    idCell.innerHTML = member.Id;
    firstNameCell.innerHTML = member.FirstName;
    surname.innerHTML = member.Surname;
    ageCell.innerHTML = member.Age;
    currentLevelCell.innerHTML = member.CurrentLevel;
    favoriteClubCell.innerHTML = member.FavoriteClub;
  
}

function DeleteRow() {
  var tablerows = table.rows.length;

  // Prevent deleting Table  header
  if (tablerows > 1) {
    table.deleteRow(-1);
  }
}


