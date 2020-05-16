$(function () {

    getProducts();

    function getProducts() {
        $("#data").empty();
        db.collection("products").where("name", ">", 0)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().name);
                    'beforeend',  `
                <div class="card" style="width: 18rem;" >				
                <img src="${doc.data().photoURL}" width="200px" height="200px">
                <h2 class="product__name">${doc.data().name}</h2>
                <h3 class="product__price">${doc.data().price}</h3>
                <button class="btn btn--primary" data-action="ADD_TO_CART">Add To Cart</button></div>`

                    $("#data").append()
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }
});