
var client = contentful.createClient({
    space: 'ccedifzo8u73',
    accessToken: 'hxmLKSggwUc1PsqEWUqtmtOiuusjB2sy0YTsVVGukyE',
  });


  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      console.log(entry);
         console.log(entry.fields.title);
        console.log(entry.fields.description);
        console.log(entry.fields.images);
        console.log(entry.fields.fabricMaterial);
      });
    });
  

      client.getEntries({content_type: 'product'}).then(function (entries) {
      entries.items.forEach(function (entry) {
  
      console.log(entry);
      var item = document.createElement("div");
      item.classList.add("gallery-card");
  
    
      var title = document.createElement("h3");
      var title = document.createElement("a");
      title.innerHTML = entry.fields.title;
      title.href = "details.html?id=" + entry.sys.id;
      item.append(title);
      products.appendChild(item)
      
     var description = document.createElement("p");
      description.innerHTML = entry.fields.mainDescription;
      item.append(description);
      products.appendChild(item)

      var fabric = document.createElement("p");
      fabric.innerHTML = entry.fields.fabricMaterial;
      item.append(fabric);
      products.appendChild(item)

      var price = document.createElement("p");
      price.innerHTML = entry.fields.priceRange;
      item.append(price);
      products.appendChild(item)

      var ratings = document.createElement("p");
      ratings.innerHTML = entry.fields.ratings;
      item.append(ratings);
      products.appendChild(item)


      var img = document.createElement("img");
      console.log("entry", entry);
      img.src = "https:" + entry.fields.images.fields.file.url;
      item.append(img);
      products.appendChild(item)
    
    });
  });


document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});