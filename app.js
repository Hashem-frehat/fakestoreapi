function FakeProduct(title, price, description, image) {
    this.Title = title;
    this.Price = price;
    this.Description = description;
    this.Image = image;
}

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((json) => {
      
        const productsArray = json.map(item => new FakeProduct(item.title, item.price, item.description, item.image));
        
        
        
        
        
        let a = document.getElementById("mo"); 
        
        productsArray.forEach(ele => {
            let x = document.createElement("div");
                x.className = "card";
                let val = `  
                    <h2>${ele.Title}</h2>
                    <p>Price: ${ele.Price}</p>
                    <p>Description: ${ele.Description}</p>
                    <img src="${ele.Image}" alt="${ele.Title}"style = width:500px;hight:500px; >
                    `;
                    x.innerHTML = val;
                    a.appendChild(x);
                });
                
            })

  
        
           
      

    