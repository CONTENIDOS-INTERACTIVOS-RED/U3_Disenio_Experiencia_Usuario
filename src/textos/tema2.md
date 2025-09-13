# Tema 2: 2. Estándares de accesibilidad (WCAG)

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## BLOQUE: img-bloque
//assets: 1.png

Los estándares de accesibilidad web constituyen el marco normativo fundamental que guía el desarrollo de interfaces digitales inclusivas en el contexto del diseño de experiencia de usuario. Se establece que estas directrices proporcionan criterios objetivos y medibles para evaluar qué tan accesible resulta una interfaz para usuarios con diferentes tipos de discapacidades.

## BLOQUE: iconobloque-texto-imagen
//assets: 2.svg, 3.png

//iconobloque
Los estándares de accesibilidad web constituyen el marco normativo fundamental que guía el desarrollo de interfaces digitales inclusivas en el contexto del diseño de experiencia de usuario. Se establece que estas directrices proporcionan criterios objetivos y medibles para evaluar qué tan accesible resulta una interfaz para usuarios con diferentes tipos de discapacidades.

//texto
En esta sección se abordarán las normativas y estándares de accesibilidad WCAG, la aplicación práctica de los principios WCAG en el diseño de experiencia de usuario, las metodologías para integrar la accesibilidad desde las fases tempranas del diseño, las herramientas especializadas para evaluar la accesibilidad de interfaces, y finalmente las técnicas de revisión de accesibilidad en plataformas digitales. Cada uno de estos subtemas contribuye a construir una comprensión integral de cómo implementar efectivamente los estándares de accesibilidad en proyectos reales de desarrollo.



## BLOQUE: titulo-segundo

2.1 Normativas y estándares de accesibilidad (WCAG)

El conocimiento de las normativas y estándares de accesibilidad es fundamental para garantizar el desarrollo de productos digitales inclusivos y conformes con las exigencias legales y éticas actuales.




## BLOQUE: img-anexo
//assets: 4.png

### Normativas y estándares de accesibilidad (WCAG)

En el PDF Normativas y estándares de accesibilidad, se estudian las Pautas de Accesibilidad para el Contenido Web como marco de referencia internacional, analizando sus niveles de conformidad, evolución técnica y aplicación práctica en entornos reales. Este enfoque proporciona a los estudiantes criterios sólidos para evaluar la calidad y accesibilidad de las interfaces digitales.

Anexo_1.pdf

## BLOQUE: titulo-segundo

2.2 Aplicación de los principios WCAG en el diseño de experiencia de usuario

La aplicación práctica de los principios WCAG en el diseño de experiencia de usuario, requiere una comprensión profunda de cómo cada uno de los cuatro principios fundamentales se traduce en decisiones concretas de diseño e interacción. 


## BLOQUE: infografia
//assets: infografia1.svg


El principio de "Perceptible" implica que toda la información y componentes de la interfaz deben presentarse de manera que los usuarios puedan percibirlos a través de al menos uno de sus sentidos, lo que se materializa en alternativas textuales para contenido no textual, subtítulos para videos, y suficiente contraste de colores. 

---

El principio "Operable" establece que los componentes de la interfaz y navegación deben ser operables por todos los usuarios, incluyendo aquellos que dependen de tecnologías de apoyo o métodos de entrada alternativos. 

---

La característica "Comprensible" garantiza que la información y operación de la interfaz sea entendible.

---

La característica "Robusto" asegura que el contenido sea interpretable por una amplia variedad de agentes de usuario, incluyendo tecnologías de apoyo.



## BLOQUE: color-imagen
//assets: 5.png

//color
La integración de estos principios en metodologías contemporáneas de diseño de experiencia de usuario, se facilita cuando se comprende que no constituyen restricciones adicionales, sino consideraciones fundamentales que enriquecen el proceso de diseño. Fernández Casado (2018), destaca que la aplicación efectiva de estos principios desde las fases iniciales del diseño resulta significativamente más eficiente que intentar reacondicionar la accesibilidad en productos ya desarrollados. Labrador y Márquez Moreno (2023), amplían esta perspectiva argumentando que los principios WCAG, cuando se aplican correctamente, mejoran la experiencia general del usuario y contribuyen a crear productos más innovadores y usables. La clave radica en desarrollar un enfoque mental de diseño inclusivo donde estos principios se consideran oportunidades creativas más que limitaciones técnicas.


## BLOQUE: 

Un ejemplo ilustrativo se encuentra en el diseño de una plataforma de aprendizaje electrónico para ingeniería de software, donde los principios WCAG se aplicaron sistemáticamente durante todo el proceso de desarrollo.


## BLOQUE: iconobloque 10
//assets: 6.svg

Para el principio "Perceptible", se implementaron transcripciones automáticas para todos los videos técnicos, descripciones alternativas detalladas para diagramas de arquitectura de software, y un sistema de paleta de colores que mantiene contraste suficiente incluso para usuarios con daltonismo.


## BLOQUE: iconobloque 10
//assets: 7.svg

//iconobloque
El principio "Operable" se materializó en navegación completa por teclado, tiempo ajustable para completar ejercicios de programación, y control de reproducción accesible para contenido multimedia.

La "Comprensibilidad" se logró mediante un lenguaje consistente en toda la plataforma, instrucciones claras para cada actividad, y mensajes de error específicos en los entornos de programación integrados.


## BLOQUE: 

**Ejercicio práctico.** Diseño de formulario accesible. Se solicita diseñar un formulario de registro para una aplicación de desarrollo de software que cumpla con los cuatro principios WCAG. 


## BLOQUE: img-acordeon
//assets: 8.png

//acordeon
Paso 1
Aplicar el principio "Perceptible" creando etiquetas descriptivas para cada campo, mensajes de error visualmente distinguibles, e indicadores claros de campos obligatorios.

---

Paso 2
Implementar "Operable" asegurando orden lógico de tabulación, tiempo suficiente para completar el formulario, y funcionalidad completa mediante teclado.

---

Paso 3
Garantizar "Comprensible" con instrucciones claras, validación en tiempo real con mensajes específicos, y terminología consistente.

---

Paso 4
Asegurar "Robusto" utilizando HTML semántico apropiado y atributos ARIA cuando sea necesario.

---

Resultado esperado
Un formulario funcional que demuestre la aplicación práctica de cada principio WCAG, acompañado de documentación que explique las decisiones de diseño tomadas para cumplir con cada criterio.




## BLOQUE: titulo-segundo

2.3 Cómo integrar la accesibilidad en las fases tempranas del diseño

La incorporación temprana de la accesibilidad en el diseño de experiencias digitales es clave para asegurar soluciones inclusivas y sostenibles desde sus primeras etapas.


## BLOQUE: anexo-img
//assets: 9.png

### Cómo integrar la accesibilidad en las fases tempranas del diseño 

En el PDF Cómo integrar la accesibilidad en las fases tempranas del diseño, se presentan estrategias prácticas para incluir criterios de accesibilidad desde la investigación con usuarios hasta la creación de prototipos, fortaleciendo así la calidad y usabilidad del producto final. Este enfoque permite anticipar barreras y diseñar experiencias más equitativas y eficientes para una diversidad real de usuarios.

Anexo_2.pdf

## BLOQUE: titulo-segundo

2.4 Herramientas para evaluar la accesibilidad de interfaces

La evaluación de accesibilidad es un componente esencial en el diseño de interfaces digitales inclusivas, ya que permite identificar y corregir barreras que afectan la experiencia de usuarios con discapacidades.


## BLOQUE: anexo-img
//assets: 10.png

### Herramientas para evaluar la accesibilidad de interfaces 

En el PDF Herramientas para evaluar la accesibilidad de interfaces, se presentan estrategias y tecnologías clave que permiten realizar evaluaciones efectivas desde múltiples perspectivas, combinando pruebas automatizadas, manuales y con usuarios reales. Este enfoque integral garantiza una mayor cobertura de los posibles problemas de accesibilidad y contribuye al desarrollo de productos digitales más usables, equitativos y sostenibles.

Anexo_3.pdf

## BLOQUE: titulo-segundo

2.5 Revisión de accesibilidad en plataformas digitales

La revisión de accesibilidad en plataformas digitales es un proceso clave para asegurar que las soluciones tecnológicas sean inclusivas y respondan a las necesidades de todos los usuarios, incluyendo aquellos con discapacidades.


## BLOQUE: anexo-img
//assets: 11.png

### Revisión de accesibilidad en plataformas digitales

En el PDF Revisión de accesibilidad en plataformas digitales, se presentan enfoques, metodologías y buenas prácticas para implementar evaluaciones continuas que garanticen el cumplimiento de estándares y la mejora progresiva de la experiencia de usuario. Este material proporciona herramientas esenciales para integrar la accesibilidad como parte estructural del ciclo de vida del desarrollo digital, promoviendo la calidad y equidad en los productos tecnológicos.

Anexo_4.pdf

## BLOQUE: bloque-material-complementario

Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial. https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1 

Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo. https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9

Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487

Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial. https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1

Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia. https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938

Edu. Vitual y a Distancia de la U. de Cundinamarca. (2024, 10 de diciembre). Principios de accesibilidad y Diseño Universal. [Vídeo]. YouTube. https://youtu.be/Mu46IwnhAJM

Flat 101. (2020, 14 de mayo). Diversidad funcional: Accesibilidad e inclusión en el diseño - FLAT 101 | Digital Sessions. [Vídeo]. YouTube. https://youtu.be/bO-EftW88pY

Growth: el podcast de Product Hackers. (2022, 3 de febrero). Herramientas de accesibilidad. [Vídeo]. YouTube. https://www.youtube.com/live/0SksWosx2YE

