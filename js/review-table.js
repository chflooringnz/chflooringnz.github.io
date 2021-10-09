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
    fetch('https://docs.google.com/spreadsheets/d/1FpcFJtoyGMJ4RRbrAXqFsSqQ78CxYRewasIzgzW8j8U/gviz/tq?tqx=out:json'),
    true
  );
  xmlhttp.send();
}

update_table();
