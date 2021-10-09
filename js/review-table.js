function update_table() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = $.csv.toArrays(this.responseText);
  
      document.getElementById("demo").innerHTML = "";

      let i;
      for (i = 1; i < data.length; i++) {
        let time = data[i][0];
        let name = data[i][1];
        let review = data[i][2];
  
        document.getElementById("demo").innerHTML +=
  	    "<tr>" +
  		"<td>" +
  		time +
  		"</td>" +
  		"<td>" +
  		name + 
  		"</td>" +
  		"<td>" +
  		review +
  		"</td>" +
  		"</tr>";
      }
    }
  };
  
    xmlhttp.open(
    "GET",
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1XUtiaDSvawsF1SH_9I-TVC4F04y5xu4VMG8tZv_KbNmjG69H4KRRsSHWxw7U9wfxV72vqqD88fJF/pub?gid=0&single=true&output=csv",
    true
  );
  xmlhttp.send();
}

update_table();
