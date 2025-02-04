1. Descripcion del proyecto:
Es una landing page de una empresa que se dedica a crear soluciones empresariales con inteligencia artificial. La pagina es una SPA y cuenta con 5 secciones:

-Hero: Una sección hero en la que viene una descripcion breve de lo que hace la empresa y con 2 botones de call to action
-Caracteristicas: Un seccion de caracteristicas en donde se pueden observar las 3 principales caracteristicas de los servicion ofrecidos
-Contacto: En esta seccion se tiene un formulario en el que los posibles clientes pueden introducir sus datos, mismos que se envian a una base de datos en firestore para que posteriormente puedan ser contactados.
-Testimonio: En esta seccion se muestran testimonios de algunos altos ejecutivos de empresas que son clientes y que describen de que manera NeuralEdge ha ayudado a susempresas, se muestran foto, cargo, empresa y testimonio, esto se ve en un carrusel interactivo que va mostrando automaticamente uno por uno los testimonios
-Footer: En el footer podemos encontrar las redes sociales de la empresa, un enlace a los terminos y condiciones, y los datos de contacto de la empresa.

2. Tecnologias usadas: Este proyecto esta creado con React en Vite, cada sección es un componente individual, se utilizó una paleta de colores creada en adobe color, las ilustraciones fueron obtenidas de storyset en formato svg. Los estilos fueron dados utilizando Tailwind css y las animaciones fueron creadas con Framer Motion. Para finalizar, el carrusel interactivo donde se muestran los testimonios fue creado con Swiper.js. Los datos que se obtienen mediante el formulario son enviados a una base de datos de firebase en donde las personas con autorizacion pueden obtenerlos para ponerse en contacto con los posibles clientes. Ademas para la nvegacion entre secciones desde el header y los botones de call to action se utilizó React scroll. Los iconos fueron obtenidos de react icons. 

3. Como ejecutar localmente: Para ejecutar esta SPA en un entorno local se necesita estar en un entorno node y ejecutar el comando "npm install", que instalara todas las dependencias necesarias para ejecutar el proyecto. Una vez instaladas las dependencias se ejecuta el comando "npm run dev", que inicializa el servidor de desarrollo.
