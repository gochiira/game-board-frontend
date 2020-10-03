import firebase from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAaFMipJfTFsl6UjX4WVsrGY5GiSFhOxJU',
    authDomain: 'gochiiraboard.firebaseapp.com',
    databaseURL: 'https://gochiiraboard.firebaseio.com',
    projectId: 'gochiiraboard',
    storageBucket: 'gochiiraboard.appspot.com',
    messagingSenderId: '403734551458',
    appId: '1:403734551458:web:8b04ed0861e00babe7b0fb'
  })
}

export default firebase
