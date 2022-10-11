async function getApi(url) {
    const response = await fetch(url);
    let getData = await response.json();
    show(getData);
    console.log(response);
}
async function getApiSingleData(url) {
    const response = await fetch(url);
    let getOneData = await response.json();
    showUpdate(getOneData);
    console.log(getOneData);
}
function showUpdate(getOneData) {
    let displayUpdateContainer = ""
    // let totalTask = 0
    if (getOneData == 0) {
        displayUpdateContainer = `<div class="row g-3 m-auto">
          <div class="col">
            <h3 class = "text-center mt-5">No task Added</h3>
          </div>
        </div>`
    } else {
        let getOneDetail =
            `<div id="update_${getOneData.id}" class="container">
                <h1 class="text-center display-4 text-dark" id="text">Edit Time Sheet Value</h1>
                <form id="${getOneData.id}" onsubmit="updateTimesheet(this.id)">
                    <input class="form-control" id="user_name" type="text" name="user_name" value="${getOneData.username}"><br>
                    <input class="form-control" id="date" type="" name="date" value="${getOneData.date}"><br>
                    <input class="form-control" id="noOfHours" type="number" name="noOfHours" value="${getOneData.noOfHours}"><br>
                    <input class="form-control" id="taskname" type="text" name="taskname" value="${getOneData.taskname}"><br>
                    <button type="submit" id="${getOneData.id}" class="pe-3 ps-3 pb-2 pt-2 btn btn-outline-secondary" >Edit</button>
                </form>
            </div>`    
            displayUpdateContainer = displayUpdateContainer + getOneDetail
    }
    document.getElementById("edit_form").innerHTML = displayUpdateContainer;
}
function show(getData) {
    let htmlDisplayBox = ""
    if (getData.length == 0) {
        htmlDisplayBox = `<div class="row g-3 m-auto">
          <div class="col">
            <h3 class = "text-center mt-5">No task Added</h3>
          </div>
        </div>`
    } else {
        for (let data of getData) {
            let oneTodo =
                `<div class="row bg-white text-dark">
                <div class="col-sm- border border-light" style="padding: 9px;">${data.id}</div>
                <div class="col-md border border-light">${data.username}</div>
                <div class="col-md border border-light">${data.taskname}</div>
                <div class="col-md border border-light"> ${data.date}</div>
                <div class="col-md border border-light">${data.noOfHours}</div>
                <div class="col-md border border-light link-secondary"><button id="${data.id}" onclick="passingApi(this.id)" style="color: blue;" >Edit</button></div>
                <div class="col-md border border-light link-danger"><button id="${data.id}" onclick="deleteTimesheet(this.id)" style="color: red;" >Delete</button></div>
            </div>`
                
            htmlDisplayBox = htmlDisplayBox + oneTodo
        }
    }
    document.getElementById("content").innerHTML = htmlDisplayBox;
}

