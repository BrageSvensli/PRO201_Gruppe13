'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');
const name = form.querySelector('#name');
const solarPanel = form.querySelector('#solarPanel');
const battery = form.querySelector('#battery');


var firebaseConfig = {
  apiKey: "AIzaSyAqkSRzsoAW_9KLqCT2_Pawk6Tf-rT_pls",
  authDomain: "smidig-prosjekt-4f82f.firebaseapp.com",
  databaseURL: "https://smidig-prosjekt-4f82f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smidig-prosjekt-4f82f",
  storageBucket: "smidig-prosjekt-4f82f.appspot.com",
  messagingSenderId: "788034635286",
  appId: "1:788034635286:web:58d82ccd9e3557abed1737",
  measurementId: "G-2C7QB00MEP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create a functions to push
    function firebasePush() {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        if(solarPanel.checked === true){

        //push itself
        var repairRef = firebase.database().ref('repair').push().set(
            {   
                userID: userId.value,
                solarpanel: solarPanel.value, 
            }
        );
        }else if(battery.checked === true){
            var repairRef = firebase.database().ref('repair').push().set(
                {   
                    userID: userId.value,
                    battery: battery.value, 
                }
            ); 
        }

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush();

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }


/*let userId = document.getElementById('userId').value;
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;

function writeUserData() {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}
*/