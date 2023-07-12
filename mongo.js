//SOCIAL NETWORK
//Este proyecto consiste en desarrollar una red social y configurar la **base de datos** necesaria utilizando las colecciones adecuadas.

//BASE DE DATOS
//El primer paso es crear una base de datos para nuestra red social. En este caso, utilizaremos MongoDB y crearemos una base de datos llamada `socialNetwork`. Puedes utilizar el siguiente comando para seleccionarla:
`$ use socialNetwork`

//COLECCIONES
//A continuación, crearemos las colecciones necesarias para nuestro proyecto. En este caso, utilizaremos dos colecciones: users y posts. Puedes crearlas utilizando los siguientes comandos:
`$ db.createCollection("users")`
`$ db.createCollection("posts")`
//Estas colecciones almacenarán la información de los usuarios y las publicaciones de la red social, respectivamente.

//INSERTAR DATOS
//Después de crear las colecciones, es momento de insertar datos en ellas. A continuación, se muestran las consultas para insertar al menos 15 publicaciones con 2 comentarios por publicación:
db.posts.insertMany([
    {
        title: "Viaje a las montañas", 
        body: "Hoy quiero compartir mi increíble experiencia en un viaje a las montañas. Disfruté de hermosos paisajes, aire fresco y muchas aventuras emocionantes.",
        username: "mountainlover",
        comments: [
        {
            username: "natureenthusiast",
            body: "Me encantan las montañas. ¡Qué experiencia increíble debiste tener!"
        },
        {
            username: "hikingfanatic",
            body: "Las montañas son mi lugar favorito. ¿Cuál fue tu ruta de senderismo favorita?"
        }
        ]
    },
    {
        title: "Receta de pasta alfredo", 
        body: "Hoy quiero compartir mi receta casera de pasta alfredo. Es cremosa, deliciosa y muy fácil de hacer. ¡Aquí está la lista de ingredientes y el paso a paso!",
        username: "foodiechef",
        comments: [
        {
            username: "pastalover",
            body: "La pasta alfredo es mi plato favorito. ¡Definitivamente probaré tu receta!"
        },
        {
            username: "cookingenthusiast",
            body: "¡Gracias por compartir! Estoy emocionado de probar esta receta en casa."
        }
        ]
    },
    {
        title: "Consejos para mejorar la productividad",
        body: "Si estás buscando formas de aumentar tu productividad, aquí tienes algunos consejos que te pueden ayudar. Desde la gestión del tiempo hasta la organización, ¡estos consejos realmente funcionan!",
        username: "productivityguru",
        comments: [
        {
            username: "efficiencyseeker",
            body: "¡Nunca hay suficientes consejos de productividad! Gracias por compartir tus recomendaciones."
        },
        {
            username: "workaholic",
            body: "Definitivamente necesito mejorar mi productividad. ¡Voy a probar estos consejos de inmediato!"
        }
        ]
    },
    {
        title: "Mi experiencia en un concierto en vivo", 
        body: "Anoche tuve la suerte de asistir a un concierto en vivo de mi banda favorita. Fue una experiencia increíble llena de música, energía y emociones. ¡Aquí están algunas fotos y videos que capturé durante el evento!",
        username: "musicfestivalgoer",
        comments: [
        {
            username: "musiclover",
            body: "¡Los festivales de música son los mejores! Me alegra que hayas disfrutado del evento. Las fotos y los videos se ven geniales."
        },
        {
            username: "concertaddict",
            body: "¡Qué envidia! Me encantaría haber estado allí. Gracias por compartir tu experiencia con nosotros."
        }
        ]
    },
    {
        title: "Consejos para el cuidado de las plantas de interior",
        body: "Si tienes plantas de interior, aquí tienes algunos consejos para mantenerlas saludables y felices.",
        username: "plantlover",
        comments: [
        {
            username: "greenthumb",
            body: "¡Gracias por los consejos! Siempre estoy buscando formas de mejorar el cuidado de mis plantas de interior."
        },
        {
            username: "indoorjungle",
            body: "Me encantan las plantas de interior. Estos consejos serán muy útiles para mantenerlas saludables. ¡Gracias!"
        }
        ]
    },
    {
        title: "Reseña de un libro inspirador", 
        body: "Hoy quiero compartir mi reseña de un libro que me inspiró profundamente. Su mensaje positivo y motivador realmente impactó mi vida. Aquí están mis pensamientos sobre el libro y por qué lo recomendaría a todos.",
        username: "bookworm",
        comments: [
        {
            username: "avidreader",
            body: "¡Me encantan los libros inspiradores! Gracias por compartir tu reseña. Definitivamente lo agregaré a mi lista de lecturas."
        },
        {
            username: "motivationseeker",
            body: "Estoy emocionado de probar estos consejos en mis próximas sesiones de fotografía de paisajes. ¡Gracias por compartir!"
        }
        ]
    },
    {
        title: "Consejos para fotografía de paisajes", 
        body: "Si te apasiona la fotografía de paisajes, aquí tienes algunos consejos útiles para capturar imágenes impresionantes. Desde la composición hasta el uso de la luz, estos consejos te ayudarán a mejorar tus habilidades fotográficas.",
        username: "photographyenthusiast",
        comments: [
        {
            username: "shutterbug",
            body: "¡Me encanta la fotografía de paisajes! Estos consejos serán muy útiles para mejorar mis fotos. ¡Gracias!"
        },
        {
            username: "naturephotographer",
            body: "Estoy emocionado de probar estos consejos en mis próximas sesiones de fotografía de paisajes. ¡Gracias por compartir!"
        }
        ]
    },
    {
        title: "Mi experiencia en un festival de música", 
        body: "Hace poco asistí a un festival de música y fue una experiencia increíble. Bailé, canté y disfruté de la música en vivo durante todo el fin de semana. ¡Aquí hay algunas fotos y videos que capturé durante el evento!",
        username: "musicfestivalgoer",
        comments: [
        {
            username: "musiclover",
            body: "¡Los festivales de música son los mejores! Me alegra que hayas disfrutado del evento. Las fotos y los videos se ven geniales."
        },
        {
            username: "concertaddict",
            body: "¡Qué envidia! Me encantaría haber estado allí. Gracias por compartir tu experiencia con nosotros."
        }
        ]
    },
    {
        title: "Receta de batido energizante", 
        body: "Hoy quiero compartir mi receta de batido energizante. Es perfecto para comenzar el día con energía o como un impulso antes de hacer ejercicio. Aquí están los ingredientes y la forma de prepararlo.",
        username: "smoothieking",
        comments: [
        {
            username: "healthnut",
            body: "¡Me encantan los batidos energizantes! Definitivamente probaré tu receta."
        },
        {
            username: "fitnesslover",
            body: "Necesito una dosis extra de energía. ¡Gracias por compartir la receta!"
        }
        ]
    },
    {
        title: "Consejos para la fotografía de paisajes", 
        body: "Si te apasiona la fotografía de paisajes, aquí tienes algunos consejos útiles para capturar imágenes impresionantes. Desde la composición hasta el uso de la luz, estos consejos te ayudarán a mejorar tus habilidades fotográficas.",
        username: "photographyenthusiast",
        comments: [
        {
            username: "shutterbug",
            body: "¡Me encanta la fotografía de paisajes! Estos consejos serán muy útiles para mejorar mis fotos. ¡Gracias!"
        },
        {
            username: "naturephotographer",
            body: "Estoy emocionado de probar estos consejos en mis próximas sesiones de fotografía de paisajes. ¡Gracias por compartir!"
        }
        ]
    },
    {
        title: "Mi experiencia en un festival de música", 
        body: "Hace poco asistí a un festival de música y fue una experiencia increíble. Bailé, canté y disfruté de la música en vivo durante todo el fin de semana. ¡Aquí hay algunas fotos y videos que capturé durante el evento!",
        username: "musicfestivalgoer",
        comments: [
        {
            username: "musiclover",
            body: "¡Los festivales de música son los mejores! Me alegra que hayas disfrutado del evento. Las fotos y los videos se ven geniales."
        },
        {
            username: "concertaddict",
            body: "¡Qué envidia! Me encantaría haber estado allí. Gracias por compartir tu experiencia con nosotros."
        }
        ]
    },
    {
        title: "Consejos para mejorar la concentración",
        body: "Si tienes problemas para concentrarte en tus tareas, aquí tienes algunos consejos para mejorar tu enfoque y productividad. Desde la eliminación de distracciones hasta la práctica de técnicas de atención plena, estos consejos te ayudarán a mantener la concentración.",
        username: "focusmaster",
        comments: [
        {
            username: "productivitygeek",
            body: "¡Nunca puedo concentrarme lo suficiente! Gracias por compartir estos consejos. Definitivamente los pondré en práctica."
        },
        {
            username: "distractedmind",
            body: "La concentración es algo en lo que siempre he tenido problemas. Espero que estos consejos me ayuden a mejorar. ¡Gracias!"
        }
        ]
    },
    {
        title: "Receta de ensalada de verano",
        body: "¡Esta ensalada de verano es refrescante y deliciosa! Es perfecta para los días calurosos. Aquí está la lista de ingredientes y la forma de prepararla...",
        username: "saladlover99",
        comments: [
        {
            username: "healthyeater",
            body: "Me encantan las ensaladas y esta se ve deliciosa. Definitivamente la probaré."
        },
        {
            username: "veggiefoodie",
            body: "¡Las ensaladas son mi comida favorita en el verano! Gracias por compartir la receta."
        }
        ]
    }
    ]); 

//Seguidamente, se muestran las consultas para insertar al menos 10 nuevos usuarios
db.users.insertMany([
    {
        username: "mountainlover",
        email: "mountainlover@example.com",
        age: 28
    },
    {
        username: "foodiechef",
        email: "foodiechef@example.com",
        age: 35
    },
    {
        username: "productivityguru",
        email: "productivityguru@example.com",
        age: 32
    },
    {
        username: "musicfestivalgoer",
        email: "musicfestivalgoer@example.com",
        age: 27
    },
    {
        username: "focusmaster",
        email: "focusmaster@example.com",
        age: 30
    },
    {
        username: "plantlover",
        email: "plantlover@example.com",
        age: 29
    },
    {
        username: "bookworm",
        email: "bookworm@example.com",
        age: 33
    },
    {
        username: "saladlover99",
        email: "saladlover99@example.com",
        age: 26
    },
    {
        username: "photographyenthusiast",
        email: "photographyenthusiast@example.com",
        age: 31
    },
    {
        username: "smoothieking",
        email: "smoothieking@example.com",
        age: 24
    }
    ]);


//ACTUALIZAR DATOS
//Actualizar todos los campos de una publicación. 
db.posts.updateOne(
  {
    title: "Viaje a las montañas"
  },
  {
    $set: {
      title: "Nuevo Viaje a las montañas",
      body: "¡Este viaje es rápido y fácil de preparar! Perfecto para refrescar los días calurosos.",
      username: "natureenthusiast'",
      comments: [
        {
          username: "natureenthusiast'",
          body: "Me encanta probar nuevas rutas. Definitivamente la haré."
        },
        {
          username: "hikingfanatic",
          body: "Gracias por compartir este viaje."
        }
      ]
    }
  }
);

// Cambiar el body de una publicación.
db.posts.updateOne({ title: "Viaje a las montañas" },
{
  $set: {
    body: "Hoy quiero compartir mi increíble experiencia en un viaje a las montañas."
}
});

// Actualizar el comentario de una publicación.
db.posts.updateOne({"comments.username": "pastalover"}, 
{
    $set: {"comments.$.body": "¡Me encanta tu receta!"
}
});

//Actualizar todos los campos de un usuario.
db.user.updateOne(
    { username: "mountainlover" },
    {
       $set: {
          email: "mountainlover97@example.com",
          age: 26,
       }
    }
 );
 
//Cambiar el email de dos usuarios es decir hacer la query dos veces.
db.user.updateOne(
    { username: "foodiechef" },
    { $set: { email: "foodiechef1@example.com" } }
 );
 
db.user.updateOne(
    { username: "saladlover99" },
    { $set: { email: "saladlover991@example.com" } }
 );
 
//Aumentar en 5 años la edad de un usuario
db.user.updateOne(
    { username: "photographyenthusiast" },
    { $inc: { age: 5 } }
 );

//OBTENER DATOS
//Seleccionar todas las publicaciones
db.posts.find();

//Seleccionar las publicaciones que coincidan con el username indicado
db.posts.find({ username: "smoothieking" });

//Seleccionar todos los usuarios con una edad mayor a 20
db.users.find({ age: { $gt: 20 } });

//Seleccionar todos los usuarios con una edad inferior a 23
db.users.find({ age: { $lt: 23 } });

//Seleccionar todos los usuarios que tengan una edad entre 25 y 30 años
db.users.find({ age: { $gte: 25, $lte: 30 } });

//Mostrar los usuarios de edad menor a mayor y viceversa
db.users.find().sort({ age: 1 });

//Ordenar usuarios por edad de mayor a menor
db.users.find().sort({ age: -1 });

//Seleccionar el número total de usuarios
db.users.countDocuments();
db.users.count();

//Seleccionar todas las publicaciones y mostrar con la siguiente estructura: Título de la publicación: "title one"


