import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAHrWcoy5adyXj18_kqXsnCzglF-gathyM",
	authDomain: "fir-test-fd267.firebaseapp.com",
	databaseURL: "https://fir-test-fd267.firebaseio.com",
	projectId: "fir-test-fd267",
	storageBucket: "fir-test-fd267.appspot.com",
	messagingSenderId: "58183460873",
	appId: "1:58183460873:web:352ead00c243453f1c70d8"
};

// Initialize Firebase
firebase.initializeApp(config);

export const database = firebase.database();

