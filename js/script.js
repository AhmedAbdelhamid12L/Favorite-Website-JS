var bookmarkName = document.getElementById("bookmarkName");
var websiteURL = document.getElementById("websiteURL");
var submitBtn = document.getElementById("submitBtn");
var listWeb = document.getElementById("listWeb");

if(localStorage.getItem("website")==null) {
  var websiteList =[];
}
else {
  var websiteList = JSON.parse(localStorage.getItem("website"));
}

function addWebsite() {
  var inputeValue = {
    bookmarkNameValue: bookmarkName.value ,
    websiteURLValue: websiteURL.value ,
  }

  websiteList.push(inputeValue);

  var strListOne = JSON.stringify(websiteList);

  localStorage.setItem( "website" , strListOne);



  displayInpute();
  clearInpute();
}

displayInpute();

function clearInpute() {
  bookmarkName.value = "";
  websiteURL.value  = "";
}

function displayInpute() {
  var str = "";
  for(var i = 0 ; i < websiteList.length ; i++) {
    str += `
    <div class="bg-darkgreen p-3 my-4 mx-3 text-danger fs-4">
      <div class="row">
        <h3 class="col-md-6">${websiteList[i].bookmarkNameValue}</h3>
        <div class="col-md-3">
          <a href="http://${websiteList[i].websiteURLValue}" target="_blank">
          <button class="btn btn-warning">Visit</button></a>
          <button onclick="deleteData(${i})" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
    `
  };
  listWeb.innerHTML = str ;
}

submitBtn.addEventListener("click" , function(){
  addWebsite();
})

function deleteData(index) {
  websiteList.splice(index,1);

  var strListTwo = JSON.stringify(websiteList);

  localStorage.setItem( "website" , strListTwo);

  displayInpute();

}



