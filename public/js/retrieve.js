// $(document).ready(function(){
//   var rootRef = firebase.database().ref()
//
// });
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

var fireHeading = document.getElementById("fireHeading");

var fireHeadingRef = firebase.database().ref().child("Face");

fireHeadingRef.on('value',function(datasnapshot){
  fireHeading.src= datasnapshot.val();
});

// function submitClick(){
//   window.alert("Btn clicked");
//
//   var firebaseRef = firebase.database().ref();
//   firebaseRef.child("age").set("20");
//
// }
