$(function () {



    $("#order").click(function () {

        var storageRef = firebase.storage().ref();
        var productPhotoRef = storageRef.child('photos/' + $("#name").val() + '.jpg'+ '.PNG');
        //var file = $('#photo')[0];
        const file = document.querySelector('#imagebroswer').files[0];
        var photoURL = "";
        productPhotoRef.put(file).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
            snapshot.ref.getDownloadURL()
                .then(function (url) {
                    console.log(url);
                    photoURL = url;
                    console.log("#order");
                    db.collection("orderdeign").add({

                        name: $("#name").val(),
                        lastname: $("#last").val(),
                        phone: Number($("#tot").val()),
                        idline: $("#id").val(),
                        facebook: $("#face").val(),
                        home: $("#home").val(),
                        photoURL: photoURL
                    })
                        .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);

                        })
                        .catch(function (error) {
                            console.error("Error adding document: ", error);
                        });
                });
        });
    });
});