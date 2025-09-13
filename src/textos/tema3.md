# Tema 3: 3. Métodos de prueba de usabilidad


<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: texto-iconobloque-imagen
//assets: 1.svg, 2.png

//texto
El diseño inclusivo representa una filosofía y metodología de desarrollo que reconoce la diversidad humana como fuente de innovación que mejora la experiencia de usuario. Se fundamenta en la premisa de que las soluciones diseñadas para usuarios con necesidades específicas frecuentemente resultan beneficiosas para todos los usuarios, siguiendo el principio del diseño universal.

//iconobloque
Esta aproximación trasciende el cumplimiento básico de estándares de accesibilidad para enfocarse en crear experiencias que reconozcan y respondan a la diversidad en todas sus formas, incluyendo diferencias en capacidades físicas, cognitivas, culturales, y tecnológicas. En el contexto del diseño de experiencia de usuario para ingeniería de software, el diseño inclusivo se traduce en consideraciones sistemáticas sobre cómo diferentes tipos de usuarios interactúan con herramientas tecnológicas complejas, teniendo en cuenta variaciones en experiencia técnica, contextos de uso, y preferencias de interacción.

## BLOQUE: imagen-color
//assets: 3.png

Durante esta sección se explorarán los principios fundamentales del diseño inclusivo, las estrategias específicas para diseñar interfaces que acomoden usuarios con discapacidades visuales, auditivas, motrices y cognitivas, las buenas prácticas que facilitan la creación de interfaces verdaderamente inclusivas, casos de estudio representativos que demuestran la aplicación exitosa de estos principios, y las metodologías para desarrollar interfaces que sean naturalmente amigables y fáciles de usar para todos los usuarios, independientemente de sus características individuales.


## BLOQUE: titulo-segundo

3.1 Principios del diseño inclusivo

El diseño inclusivo se ha convertido en un enfoque esencial para garantizar que los productos digitales respondan a la diversidad de capacidades, contextos y preferencias de uso de las personas.



## BLOQUE: anexo-img
//assets: 4.png

### Principios del diseño inclusivo 
En el PDF Principios del diseño inclusivo, se abordan los fundamentos conceptuales y prácticos que permiten integrar la equidad, la flexibilidad y la simplicidad como ejes clave del desarrollo centrado en el usuario. Este documento proporciona un marco metodológico que orienta la creación de soluciones tecnológicas más accesibles, adaptables y eficaces, beneficiando no solo a usuarios con discapacidades, sino a toda la comunidad de usuarios.

Anexo_5.pdf

## BLOQUE: titulo-segundo

3.2 Diseño para usuarios con discapacidad visual, auditiva, motriz y cognitiva

El diseño efectivo para usuarios con discapacidades visuales requiere una comprensión profunda de cómo las tecnologías de apoyo interpretan y presentan información digital, así como las estrategias alternativas que estos usuarios emplean para navegar y comprender interfaces complejas. 



## BLOQUE: img-acordeon
//assets: 5.png

Usuarios ciegos o con baja visión
    se implementan alternativas textuales integrales para contenido visual, estructura semántica clara que facilite la navegación por lectores de pantalla, y descripciones detalladas de elementos interactivos complejos como gráficos de datos o diagramas técnicos. Los usuarios con baja visión se benefician de controles de ampliación flexibles, opciones de alto contraste personalizables, e indicadores visuales amplificados que no dependan únicamente del color para transmitir información. Se reconoce que la discapacidad visual existe en un espectro amplio, desde ceguera total hasta diferentes tipos de limitaciones de visión que requieren aproximaciones de diseño matizadas y personalizables.

---

Usuarios con discapacidades auditivas
    el diseño se enfoca en asegurar que toda la información transmitida mediante audio tenga equivalentes visuales apropiados, incluyendo subtítulos precisos para contenido multimedia, indicadores visuales para notificaciones de sistema, y alternativas textuales para comandos de voz. Pintos Fernández (2023), enfatiza que el diseño para usuarios sordos o con pérdida auditiva va más allá de simplemente añadir subtítulos, requiriendo consideración cuidadosa de cómo se presenta información temporal y contextual que típicamente se transmite mediante audio.

---

Usuarios con discapacidades motrices
    necesitan interfaces que puedan operarse efectivamente con métodos de entrada alternativos, incluyendo navegación por interruptor, control ocular, o dispositivos de entrada adaptados. Esto requiere objetivos de interacción apropiadamente dimensionados, tiempos de respuesta ajustables, y funcionalidad completa accesible mediante teclado o comandos alternativos.

---

Usuarios con discapacidades cognitivas
    presentan consideraciones de diseño particularmente complejas porque abarcan una amplia gama de condiciones que afectan procesamiento de información, memoria, atención, y comprensión. Fischer (2008), destaca que el diseño para usuarios con discapacidades cognitivas frecuentemente beneficia a todos los usuarios porque promueve claridad, consistencia, y reducción de carga cognitiva innecesaria. Esto se materializa en interfaces que proporcionan orientación clara sobre ubicación y progreso, utilizan lenguaje simple y directo, minimizan distracciones, y ofrecen ayuda contextual cuando se necesita. Las funcionalidades de personalización se vuelven especialmente importantes para este grupo de usuarios, permitiendo ajustar velocidad de presentación de información, nivel de detalle, y métodos de navegación, según preferencias y capacidades individuales.




## BLOQUE: bg-full-icono-texo
//assets: 6.svg

Un ejemplo integral se observa en el desarrollo de un entorno integrado de desarrollo diseñado específicamente para ser utilizable por desarrolladores con diferentes tipos de discapacidades. Para usuarios con discapacidades visuales, se implementó integración nativa con lectores de pantalla que proporciona descripciones detalladas de estructura de código, errores de compilación, y estados de depuración. 


## BLOQUE: bloque-img
//assets: 7.svg

El resaltado de sintaxis se complementó con patrones textuales alternativos y opciones de alto contraste personalizables. Para desarrolladores con discapacidades auditivas, todas las notificaciones de sistema incluyen indicadores visuales prominentes, y las funcionalidades de programación en pareja incorporan conversación en tiempo real con transcripción automática de conversaciones de voz.

Los usuarios con limitaciones motrices pueden acceder a todas las funcionalidades mediante comandos de teclado personalizables, y el entorno incluye soporte nativo para dispositivos de entrada alternativos como seguimiento ocular y navegación por interruptor.



## BLOQUE:

**Ejercicio práctico.** Diseño multicapacidad. Se debe diseñar una interfaz de revisión de código que sea completamente accesible para desarrolladores con diferentes tipos de discapacidades. 


## BLOQUE: img-acordeon
//assets: 8.png

Paso 1
Para discapacidades visuales, crear un sistema de navegación por código que funcione efectivamente con lectores de pantalla, incluyendo puntos de referencia semánticos, descripciones de cambios, y alternativas textuales para diferencias visuales.

---

Paso 2
Para discapacidades auditivas, implementar notificaciones visuales para comentarios en tiempo real, estados de integración continua, y comunicación de equipo.

---

Paso 3
Para discapacidades motrices, diseñar funcionalidad completa mediante teclado, incluyendo navegación entre archivos, inserción de comentarios, y aprobación de cambios.



## BLOQUE: acordeon-img
//assets: 9.png

Paso 4
Para discapacidades cognitivas, simplificar la presentación de información compleja, proporcionar orientación clara sobre procesos de revisión, e implementar personalización de densidad informacional.

---

Paso 5
Integrar todas las consideraciones en una interfaz cohesiva que no segregue funcionalidades por tipo de discapacidad.

---

Resultado esperado
Un diseño completo que demuestre cómo diferentes tipos de discapacidades pueden acomodarse sin comprometer la experiencia para ningún grupo de usuarios, incluyendo especificaciones técnicas para implementación.




## BLOQUE: titulo-segundo

3.3 Buenas prácticas para crear interfaces inclusivas

El desarrollo de interfaces digitales que respondan a las necesidades de todos los usuarios requiere la adopción de prácticas que integren la inclusión como principio rector del diseño.



## BLOQUE:
//assets:

### Buenas prácticas para crear interfaces inclusivas
En el PDF Buenas prácticas para crear interfaces inclusivas, se presentan estrategias concretas para incorporar la accesibilidad de forma transversal en cada fase del proceso de diseño y desarrollo. Este documento ofrece un marco estructurado que promueve la participación activa de usuarios con discapacidades, la personalización de la experiencia, y la mejora progresiva como pilares para construir soluciones tecnológicas equitativas, funcionales y sostenibles.

## BLOQUE: titulo-segundo


3.4 Casos de estudio de diseño inclusivo


## BLOQUE: audio-imagen
//assets: 10.svg

//texto
Para conocer esta temática, lo invitamos a escuchar el siguiente podcast.

//audio
podcast1.mp3

//titulo audio
Casos de estudio de diseño inclusivo



## BLOQUE:

**Ejercicio práctico.** Análisis de caso inclusivo. Se debe realizar un análisis comprehensivo de un caso de diseño inclusivo en el dominio de herramientas de desarrollo de software. 


## BLOQUE: img-acordeon
//assets: 11.png

//acordeon
Paso 1
Seleccionar una herramienta o plataforma conocida que haya implementado mejoras significativas de accesibilidad (Visual Studio Code, Stack Overflow, o Jenkins).

---

Paso 2
Investigar el proceso de diseño utilizado, identificando cómo se involucró a usuarios con discapacidades, qué métodos de investigación se emplearon, y cómo se priorizaron las mejoras.

---

Paso 3
Analizar las soluciones específicas implementadas, categorizándolas, según el tipo de discapacidad que abordan y evaluando su efectividad.

----

Paso 4
Evaluar el impacto más amplio de estas mejoras en la usabilidad general de la herramienta para todos los usuarios.

---

Paso 5
Identificar lecciones aprendidas y recomendaciones aplicables a otros proyectos de desarrollo.
Resultado esperado
Un caso de estudio detallado que incluya análisis del proceso, evaluación de soluciones, métricas de impacto, y recomendaciones accionables para replicar el éxito en otros contextos de desarrollo de software.

## BLOQUE: titulo-segundo

3.5 Desarrollo de interfaces amigables y fáciles de usar para todos

La creación de interfaces que resulten intuitivas, accesibles y eficaces para una amplia variedad de usuarios es un componente esencial del diseño centrado en las personas.

## BLOQUE: anexo-img
//assets: 12.png

### Desarrollo de interfaces amigables y fáciles de usar para todos 
En el PDF Desarrollo de interfaces amigables y fáciles de usar para todos, se abordan estrategias de diseño que permiten combinar simplicidad, adaptabilidad y funcionalidad para responder a distintos niveles de experiencia, capacidades y preferencias de interacción. Este documento ofrece un enfoque práctico para lograr experiencias digitales inclusivas, donde la facilidad de uso se convierte en un objetivo alcanzable mediante decisiones de diseño bien fundamentadas y centradas en la diversidad de los usuarios.

Anexo_6.pdf


## BLOQUE: bloque-material-complementario

Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial. https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1 

Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo. https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9

Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487

Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial. https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1

Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia. https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938

WordPress. (2023, 16 de junio). Evaluación de la accesibilidad. Cuando los test automáticos son insuficientes. [Vídeo]. YouTube. https://youtu.be/msJI4Z5Ra0E

WordPress. (2020, 26 de mayo). Iñaki Martín: Herramientas automáticas para la accesibilidad web. [Vídeo]. YouTube. https://youtu.be/ff854s90oRA 


