let plantsContaner = document.getElementById('product-list')

plants.forEach(function(plant){
    plantsContaner.insertAdjacentHTML('beforeend',`
        <article class="plant-card" style="--accent:`+ plant.color + `">
           <div class="plant-img">
             <img src="`+plant.img+`" alt="Monstera">
           </div>
           <div class="plant-body">
             <h3 class="plant-name">`+plant.name+`</h3>
             <div class="plant-footer">
               <span class="plant-price">`+ `$` +plant.price+`</span>
               <a href="product.html?id=`+plant.id+`" class="btn-view">View →</a>
             </div>
           </div>
         </article>`)  
})
