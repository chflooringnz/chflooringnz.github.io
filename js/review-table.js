function update_table() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText).feed.entry;
  
      document.getElementById("demo").innerHTML = "";

      let i;
      for (i = 0; i < data.length; i++) {
        let time = data[i]["gsx$time"]["$t"];
        let name = data[i]["gsx$name"]["$t"];
        let review = data[i]["gsx$review"]["$t"];
  
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
    "https://spreadsheets.google.com/feeds/list/1FpcFJtoyGMJ4RRbrAXqFsSqQ78CxYRewasIzgzW8j8U/od6/public/values?alt=json",
    true
  );
  xmlhttp.send();
}

update_table();
