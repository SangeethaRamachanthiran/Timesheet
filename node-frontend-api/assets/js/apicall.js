
function deleteTimesheet(id) {
    var raw = "";
    const taskid = id;
    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/timesheets/"+taskid, requestOptions)
      .then(window.location.reload());
    }

function createTimesheet() {
  event.preventDefault();
  let userName = document.getElementById("user_name").value;
  let date = document.getElementById("date").value;
  let noOfHours = document.getElementById("noOfHours").value;
  let taskname = document.getElementById("taskname").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let timesheetDetails = {
    "username": userName,
    "date": date,
    "noOfHours": noOfHours,
    "taskname": taskname
  }
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(timesheetDetails),
    redirect: 'follow'
  };
  let time = requestOptions.body.noOfHours;
  console.log(time);

  fetch("http://localhost:3000/api/timesheets", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    window.location.href = 'file:///home/sangeetha/Projects/node-frontend-api/show.html';
}

function updateTimesheet(id) {
  const taskid = id;
  let userName = document.getElementById("user_name").value;
  let date = document.getElementById("date").value;
  let noOfHours = document.getElementById("noOfHours").value;
  let taskname = document.getElementById("taskname").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": userName,
    "date": date,
    "noOfHours": noOfHours,
    "taskname": taskname
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:3000/api/timesheets/" + taskid, requestOptions).then(
      window.location.reload()
  )
}

function showContainer(id) {
  const taskid = id;
  var raw = "";

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/timesheets/"+taskid, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}