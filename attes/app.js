let btn = document.getElementById('button');

btn.onclick = function() {
          fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                let products ='';
                let i = 0;
                data.forEach(product => {
                    products += `
                    <div class="col-lg-4">               
                      <div class="mt-4 card"">
                    <img id="image" class="card-img-top" src=${data[i].image} alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title name"> ${data[i].title}</h5>
                      <p class="card-text">category: ${data[i].category}</p>
                      <p class="card-text " id="description">description: ${data[i].description}</p>
                      <p class="card-text price" id="price">price: ${data[i].price} $</p>
                      <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                 </div> 
              </div>        
                             `
                    
                    document.getElementById('list').innerHTML = products;
                    i += 1;
                })
            })
            .catch(err => console.log(error))
}
