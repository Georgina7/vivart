// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
$(document).ready(function () {
  $("#event_upload_file").click(function (){
  console.log("called");
      $("#eventPhoto").click();
  }); 
  $("#craft_upload_file").click(function (){
    console.log("called");
        $("#craft_photo").click();
    });            
  });
  function chooseEventFile() {
      
  }
  function chooseCraftFile() {
      
  }
