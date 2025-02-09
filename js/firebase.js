// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVpdeCeDcr_S3MwfGGqIpwOplKkDrCRFc",
  authDomain: "oscar-dc6d5.firebaseapp.com",
  projectId: "oscar-dc6d5",
  storageBucket: "oscar-dc6d5.firebasestorage.app",
  messagingSenderId: "768197790290",
  appId: "1:768197790290:web:e334659a7a5692b80fed8b",
  measurementId: "G-FZZZP86SVS"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener la instancia de Firebase Messaging
const messaging = firebase.messaging();

// Solicitar permiso para recibir notificaciones
Notification.requestPermission().then(function(permission) {
  if (permission === "granted") {
    console.log("Permiso para notificaciones concedido");
    messaging.getToken().then(function(currentToken) {
      if (currentToken) {
        console.log("Token de FCM: " + currentToken);
        // Aquí puedes enviar el token al servidor para asociarlo con el usuario
      } else {
        console.log("No se pudo obtener el token.");
      }
    }).catch(function(err) {
      console.log("Error al obtener el token: ", err);
    });
  } else {
    console.log("Permiso denegado para notificaciones.");
  }
    
    //Enviar push al presionar el boton
    document.getElementById("notifyButton").addEventListener("click", function() {
  // Aquí puedes configurar la notificación
  const options = {
    body: "¡Has presionado el botón!",
    icon: "icono.png",
    vibrate: [200, 100, 200]
  };
  
  // Crear una notificación local
  new Notification("Notificación Push", options);
});
const fetch = require("node-fetch");

const serverKey = "YOUR_SERVER_KEY";
const fcmUrl = "https://fcm.googleapis.com/fcm/send";

const message = {
  notification: {
    title: "Notificación Push",
    body: "¡Has presionado el botón en la web!"
  },
  to: "USER_FCM_TOKEN"  // El token FCM que obtuviste antes
};

fetch(fcmUrl, {
  method: 'POST',
  headers: {
    'Authorization': `key=${serverKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(message)
}).then(response => response.json())
  .then(data => console.log("Notificación enviada:", data))
  .catch(error => console.log("Error al enviar notificación:", error));

});
