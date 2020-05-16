$(function () {

    getProducts();
    

    function getProducts() {
        $("#adddata").empty();
        db.collection("orderdeign").orderBy("name", 'asc')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().name);
                    var row = ` <tr>
                    <th scope="row">${doc.id}</th>
                    <td><img src="${doc.data().photoURL}" width="150px" height="100px"></td>
                    <td>${doc.data().name}</td>
                    <td>${doc.data().lastname}</td>
                    <td>${doc.data().phone}</td>
                    <td>${doc.data().idline}</td>
                    <td>${doc.data().facebook}</td>
                    <td>${doc.data().home}</td> 
                    <td>990฿</td> 
                    <td><button class="btn btn-danger"onclick="Delete('${doc.id}')" >delete</button></td>`

                    $("#adddata").append(row)
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

});
function Delete(id) {
    db.collection("orderdeign").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    


    
}
