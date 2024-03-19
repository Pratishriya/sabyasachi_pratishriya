var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
  space: 'ccedifzo8u73',
  accessToken: 'hxmLKSggwUc1PsqEWUqtmtOiuusjB2sy0YTsVVGukyE',
  });

  client.getEntry(id).then(function (entry){
  console.log(entry)

  var item = document.createElement("div");
      item.classList.add("about");
      
      var description = document.createElement("p");
      description.innerHTML = entry.fields.productDescription;
      item.append(description);
      about.appendChild(item)

      var img = document.createElement("img");
      console.log("entry", entry);
      img.src = "https:" + entry.fields.productImages.fields.file.url;
      item.append(img);
      about.appendChild(item)

  
  });

 




document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});