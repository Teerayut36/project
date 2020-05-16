$(function () {

    
    $("#order").click(function () {
        
        console.log("#order");
        db.collection("order").add({
            
            name: $("#name").val(),
            lastname: $("#last").val(),
            phone: Number($("#tot").val()),
            idline: $("#id").val(),
            facebook: $("#face").val(),
            home: $("#home").val()
            
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                getProducts();
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

        
           
        });
    });

 


