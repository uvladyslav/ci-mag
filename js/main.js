  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
                
        var newLine = e.target.result;
        newLine = newLine.replace(/\n/g, "</br>");

          var span = document.createElement('span');
          span.innerHTML = ['</br></br>' ,newLine,].join('');
          document.getElementById('list').insertBefore(span, null);
        findIp(e.target.result.split(/\n/));
        }
      })(f);

      reader.readAsText(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);



function findIp(arr) {
//	arr.forEach(function(mac, i, arr) {
//		if (mac) {
//			console.log(i + ": " + mac);
//			console.log("sending to php");
//			
//		}
//	})
var url = [];
url[0] = "http://10.110.2.102/mag/324/2.20.04/img_mag324_pub/imageupdate";
   $.ajax({
        type: "POST",
        url: "http://localhost:9444/findip.php",
        data: {arrArr : arr}, 
        cache: false,

        success: function(){
            console.log("OK");
        }
    });
$.ajax({
        type: "POST",
        url: "http://localhost:9444/seturl.php",
        data: {urlUrl : url},              
        cache: false,

        success: function(){
            console.log("OK");
        }
    });


}

