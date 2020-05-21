$(function () {

    getProducts();

    function getProducts() {
        $("#data").empty();
        db.collection("products").orderBy("name", 'asc')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().name);

                    var card = `
                     <div class="shop-item">
                   <img class="shop-item-image" src="${doc.data().photoURL}"> 
                   <br> 
                   <br> 
                   <span class="shop-item-title">${doc.data().name}</span>
                   <br>
                
                    <div class="shop-item-details">
                        <span class="shop-item-price">${doc.data().price}</span>
                       
                    </div>
                </div>`
                   
                    $("#data").append(card)
                   
                }); 
                
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }
    
});
