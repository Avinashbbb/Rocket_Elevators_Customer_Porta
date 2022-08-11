// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let currentuser = $("#currentUser").text();

console.log(currentuser);
selectCustomer();
selectCustomerEmail();
buildingdetails();



function selectCustomerEmail() {
  fetch("https://apicsharpavinash.herokuapp.com/api/Customer")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      $("#selectedCustomerEmail").empty();
      for (let i = 0; i < json.length; i++) {
        $("#selectedCustomerEmail").append(
          "<option value =" + json[i].email + ">" + json[i].email + "</option>"
        );
      }
    });
}

async function buildingdetails() {
  let customerid;
  var buildingids = [];
  let batteryids = [];
  let columnids = [];
  await fetch(
    "https://apicsharpavinash.herokuapp.com/customerobj/" + currentuser
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      customerid = json[0].id;
    });
  await fetch("https://apicsharpavinash.herokuapp.com/building/" + customerid)
    .then((responce) => {
      return responce.json();
    })
    .then((json) => {
      console.log(json);
      $("#building").append(
        
          "<h5>No of Buildings Owned by Customer : " +
          json.length +
          "</h5>" +
          "<hr>"
      );
      for (i = 0; i < json.length; i++) {
        $("#building").append(
          "<div>" +
            "<h6> ID :" +
            json[i].id +
            "</h6>" +
            "<h6> Building Address : " +
            json[i].addressOfBuilding +
            "</h6>" +
            "<h6> Building Admin : " +
            json[i].fullNameBuildingAdmin +
            "</h6>" +
            "<h6> Building Authoriy : " +
            json[i].fullNameTechnicalAuthority +
            "</h6>" +
            "<h6> Building Admin Email : " +
            json[i].emailBuildingAdmin +
            "</h6>" +
            "<h6> Building Authoriy Email : " +
            json[i].emailTechnicalAuthority +
            "</h6>" +
            "</div>" +
            "<hr>"
        );
            buildingids.push(json[i].id);
      }
    });
    for (i = 0 ; i < buildingids.length ; i++){
    await fetch("https://apicsharpavinash.herokuapp.com/battery/" + buildingids[i])
            .then((responce) =>{
                return responce.json();
            })
            .then((json) =>{
                $("#battery").append(
                    "<h6> ID : " +
                    json[0].id +
                    "</h6>" +
                    "<h6> Type : " +
                    json[0].types +
                    "</h6>" +
                    "<h6> Status : " +
                    json[0].status +
                    "</h6>" +
                    "<h6> EmployeeId : " +
                    json[0].employeeId + "</h6>"+
                    "<h6> Building ID : " + json[0].buildingId + "</h6>"+"<hr>"
                );
                batteryids.push(json[0].id);
            })
    }
    for ( i = 0 ; i < batteryids.length; i ++){
        await fetch("https://apicsharpavinash.herokuapp.com/column/" + batteryids[i])
                .then((responce) =>{
                    return responce.json();
                })
                .then((json) =>{
                    $("#column").append(
                        "<h6> ID : "+ json[0].id + "</h6>"+
                        "<h6> Types : " + json[0].types + "</h6>"+
                        "<h6> Model : " + json[0].model + "</h6>"+
                        "<h6> No of Floors Served : " + json[0].numberFloorServed + "</h6>"+
                        "<h6> Status : " + json[0].status + "</h6>"+
                        "<h6> Notes : " + json[0].notes + "</h6>"+ "<hr>"
                    );
                    columnids.push(json[0].id);
                })
    }
    for (i = 0 ; i < columnids.length ; i++){
        await fetch("https://apicsharpavinash.herokuapp.com/elevator/" + columnids[i])
                .then((responce) =>{
                    return responce.json();
                })
                .then((json)=>{
                    console.log(json);
                    $("#elevator").append(
                        "<h6> ID : " + json[0].id + "</h6>"+
                        "<h6> Serial Number : " + json[0].serialNumber + "</h6>"+
                        "<h6> CompanyName : " + json[0].companyName + "</h6>" +
                        "<h6> Model : " + json[0].model + "</h6>"+
                        "<h6> Type : " + json[0].types + "</h6>"+
                        "<h6> Full Name : " + json[0].fullName + "</h6>" +
                        "<h6> Status : " + json[0].status + "</h6>" +
                        "<h6> Notes : " + json[0].notes + "</h6>"+ 
                        "<h6> Email : " + json[0].email + "</h6>"+
                        "<hr>"
                    );
                })
    }





}










































function selectCustomer() {
  fetch("https://apicsharpavinash.herokuapp.com/customerobj/" + currentuser)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      $("#selectedCustomer").empty();
      $("#selectedCustomer").append("<option value = 0 >N/A</option>");
      for (let i = 0; i < json.length; i++) {
        $("#selectedCustomer").append(
          "<option value =" + json[i].id + ">" + json[i].fullName + "</option>"
        );
      }
    });
}

function selectBuilding() {
  let selectedCustomer = $("#selectedCustomer").val();
  fetch("https://apicsharpavinash.herokuapp.com/building/" + selectedCustomer)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      $("#selectedBuilding").empty();
      $("#selectedBuilding").append("<option value = 0 >N/A</option>");
      for (let i = 0; i < json.length; i++) {
        $("#selectedBuilding").append(
          "<option value =" +
            json[i].id +
            ">" +
            json[i].addressOfBuilding +
            "</option>"
        );
      }
    });
}

function selectBuildingBatteries() {
  let selectedbuilding = $("#selectedBuilding").val();
  fetch("https://apicsharpavinash.herokuapp.com/battery/" + selectedbuilding)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      $("#selectedBattery").empty();
      $("#selectedBattery").append("<option value = 0 >N/A</option>");
      for (let i = 0; i < json.length; i++) {
        $("#selectedBattery").append(
          "<option value =" + json[i].id + ">" + json[i].id + "</option>"
        );
      }
    });
}

function selectColumn() {
  let selectedBattery = $("#selectedBattery").val();
  fetch("https://apicsharpavinash.herokuapp.com/column/" + selectedBattery)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      $("#selectedColumn").empty();
      $("#selectedColumn").append("<option value = 0 >N/A</option>");
      for (let i = 0; i < json.length; i++) {
        $("#selectedColumn").append(
          "<option value =" + json[i].id + ">" + json[i].id + "</option>"
        );
      }
    });
}

function selectElevator() {
  let selectedColumn = $("#selectedColumn").val();
  fetch("https://apicsharpavinash.herokuapp.com/elevator/" + selectedColumn)
    .then((responce) => {
      return responce.json();
    })
    .then((json) => {
      console.log(json);
      $("#selectedElevator").empty();
      $("#selectedElevator").append("<option value = 0 >N/A</option>");
      for (let i = 0; i < json.length; i++) {
        $("#selectedElevator").append(
          "<option value = " + json[i].id + ">" + json[i].id + "</option>"
        );
      }
    });
}

$("#selectedCustomer").change(function () {
  selectBuilding();
});
$("#selectedBuilding").change(function () {
  selectBuildingBatteries();
});
$("#selectedBattery").change(function () {
  selectColumn();
});
$("#selectedColumn").change(function (){
    selectElevator();
})