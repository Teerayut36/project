$(function () {

    // var thumbnail;



    // var fileButton = document.getElementById("fileButton")
    // fileButton.addEventListener('change', function (e) {
    //     var file = e.target.files[0];
    //     //put img
    //     var storageRef = firebase.storage().ref(file.name);
    //     storageRef.put(file);
    //     thumbnail = "https://firebasestorage.googleapis.com/v0/b/" + firebaseconfig["storageBucket"] + "/o/" + file.name + "?alt=media";
    // });

    $("#addproduct").click(function () {

        var storageRef = firebase.storage().ref();
        var productPhotoRef = storageRef.child('photos/' + $("#name").val() + '.jpg');
        //var file = $('#photo')[0];
        const file = document.querySelector('#photo').files[0];
        var photoURL = "";
        productPhotoRef.put(file).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
            snapshot.ref.getDownloadURL()
                .then(function (url) {
                    console.log(url);
                    photoURL = url;
                    console.log("#addproduct");
                    db.collection("products").add({

                        name: $("#name").val(),
                        price: Number($("#price").val()),
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
