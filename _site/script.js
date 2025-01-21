function openPage(evt, yearPage) {
  var i, tabcontent, tablinks;

  // hide tabcontent
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // remove active from tablinks
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // add active to current tab
  document.getElementById(yearPage).style.display = "block";
  evt.currentTarget.className += " active";
}

//default open tab
document.getElementById("defaultOpen").click();