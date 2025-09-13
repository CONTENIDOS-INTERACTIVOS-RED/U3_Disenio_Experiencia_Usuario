# Tema 4: 4. Creación de usuarios (user persona)


<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: 

Las herramientas para evaluación de accesibilidad constituyen un ecosistema diverso de soluciones tecnológicas diseñadas para identificar, analizar y monitorear barreras de accesibilidad en interfaces digitales. La evaluación efectiva requiere una aproximación multicapa que combine pruebas automatizadas, inspección manual, y pruebas de usuario con personas que utilizan tecnologías de apoyo.

## BLOQUE: color-imagen-color 4:4:4
//assets: 1.png

//color 4
Esta categoría de herramientas ha evolucionado significativamente para abordar la complejidad creciente de aplicaciones web modernas y la sofisticación de los estándares de accesibilidad. En el contexto de desarrollo de software, estas herramientas se integran en flujos de trabajo de desarrollo continuo, proporcionando retroalimentación inmediata a desarrolladores y facilitando el mantenimiento de estándares de accesibilidad durante todo el ciclo de vida del producto.

//color 2
En esta sección se explorarán herramientas específicas de evaluación como Axe y WAVE que han ganado adopción amplia en la industria, metodologías para realizar pruebas efectivas de accesibilidad tanto en código como en diseño visual, la importante distinción entre evaluación automatizada y manual y cuándo aplicar cada aproximación, análisis sistemático de errores comunes en accesibilidad que frecuentemente impactan experiencia de usuario, estrategias probadas para corregir problemas de accesibilidad de manera eficiente y sostenible en interfaces de producción.


## BLOQUE: titulo-segunfo

4.1 Herramientas de evaluación de accesibilidad (Axe, WAVE)

La evaluación automatizada de la accesibilidad es una estrategia clave para garantizar que los productos digitales sean utilizables por todas las personas desde las etapas tempranas del desarrollo.



## BLOQUE: anexo-img
//assets:2.png

### Herramientas de evaluación de accesibilidad (Axe, WAVE)
En el PDF Herramientas de evaluación de accesibilidad, se exploran soluciones como Axe y WAVE que permiten identificar de manera eficiente barreras técnicas que afectan la inclusión digital. Este documento ofrece un enfoque práctico para integrar estas herramientas en los flujos de trabajo de desarrollo, destacando sus capacidades, limitaciones y el valor de combinarlas con revisiones manuales y pruebas con usuarios reales.

Anexo_7.pdf

## BLOQUE: titulo-segundo

4.2 Pruebas de accesibilidad en el código y diseño visual

Las pruebas de accesibilidad en código y diseño visual requieren metodologías especializadas que aborden diferentes capas de la experiencia de usuario, desde la estructura semántica del marcado hasta la presentación visual de información. 


## BLOQUE: slyderf-cards
//assets: 3.png, 4.png

### Pruebas de accesibilidad a nivel de código
Se enfocan en evaluar la semántica HTML, implementaciones ARIA, lógica de navegación por teclado, y características programáticas de accesibilidad que permiten a tecnologías de apoyo interpretar y presentar contenido de manera precisa a usuarios. Este tipo de pruebas requiere comprensión de cómo lectores de pantalla, navegación por teclado, y otras tecnologías de apoyo interactúan con tecnologías web, así como familiaridad con estándares técnicos como especificaciones de accesibilidad HTML y mejores prácticas ARIA.

---

### Pruebas de accesibilidad de diseño visual
Evalúan aspectos como proporciones de contraste de color, jerarquía visual, claridad de iconografía, efectividad de disposición para usuarios con varias capacidades visuales, requiriendo combinación de herramientas automatizadas y juicio humano para evaluar accesibilidad visual general.




## BLOQUE: bloque-img
//assets: 5.png

El proceso de realizar pruebas efectivas de accesibilidad en código involucra revisión sistemática de estructura de marcado, validación de atributos ARIA, pruebas de rutas de navegación por teclado, y verificación de etiquetas y descripciones programáticas. Torres Burriel (2018), enfatiza que las pruebas de accesibilidad de código deben integrarse temprano en el proceso de desarrollo más que tratarse como un paso de validación posterior al desarrollo, permitiendo a desarrolladores construir consideraciones de accesibilidad directamente en la arquitectura de la aplicación. 


## BLOQUE: imagen-iconobloque-color 4:8
//assets: 6.png, 7.svg

//iconobloque
Las pruebas de accesibilidad de diseño visual requieren atención para dependencias de color, elecciones tipográficas, espaciado visual, y jerarquía de información que pueden impactar usuarios con discapacidades visuales o cognitivas.

//color
Fischer (2008), señala que las pruebas efectivas de accesibilidad visual frecuentemente revelan problemas de diseño que benefician a todos los usuarios, como contraste insuficiente que impacta legibilidad en entornos brillantes o disposiciones abarrotadas que aumentan carga cognitiva innecesariamente.


## BLOQUE: 

En el desarrollo de un entorno integrado de desarrollo colaborativo diseñado para equipos de software distribuidos, las pruebas comprehensivas de accesibilidad de código y elementos de diseño visual revelaron conocimientos críticos que moldearon el producto final. 


## BLOQUE: slyderf-cards
//assets: 8.png, 9.png

### Pruebas a nivel de código
Utilizando herramientas como axe-core y secuencias de comandos de prueba personalizados identificaron problemas con elementos de interfaz complejos como resaltado de sintaxis, plegado de código, e interfaces de depuración que requerían etiquetado ARIA sofisticado para proporcionar información significativa a usuarios de lectores de pantalla. El equipo desarrolló funciones de prueba de accesibilidad personalizadas que podían evaluar resaltado de código dinámico, información sobre herramientas de inspección de variables, y características de colaboración en tiempo real para asegurar marcado semántico apropiado y accesibilidad por teclado.

---

### Pruebas de diseño visual
Revelaron que los indicadores tradicionales de solo color para errores de sintaxis, advertencias, y estados de éxito eran insuficientes para usuarios con deficiencias de visión de color, llevando a la implementación de indicadores visuales adicionales usando patrones, formas, y modificaciones tipográficas que proporcionaban información equivalente a través de múltiples canales visuales.



## BLOQUE: 

**Ejercicio práctico.** Pruebas comprehensivas de código y visuales. Se solicita desarrollar un protocolo comprehensivo de pruebas de accesibilidad para una herramienta de administración de bases de datos basada en web. 

## BLOQUE: img-acordeon
//assets: 10.png

//acordeon
Paso 1
Crear pruebas automatizadas de accesibilidad de código que evalúen estructura semántica HTML, implementación ARIA, y navegación por teclado para interfaces complejas como constructores de consultas, componentes de visualización de datos, y editores de esquemas de bases de datos.

---

Paso 2
Desarrollar procedimientos de prueba manual para evaluar aspectos de accesibilidad visual incluyendo proporciones de contraste de color, efectividad de jerarquía visual, y claridad de iconos e indicadores visuales utilizados en toda la aplicación.

---

Paso 3
Diseñar pruebas especializadas para contenido dinámico como resultados de consultas en tiempo real, notificaciones de error, e indicadores de progreso que aseguren que la información de accesibilidad se actualice y anuncie apropiadamente a tecnologías de apoyo.




## BLOQUE: acordeon-img
//assets: 11.png

//acordeon
Paso 4
Crear plantillas de documentación que capturen hallazgos de accesibilidad tanto de código como visuales, incluyendo capturas de pantalla, fragmentos de código, y recomendaciones específicas de corrección.

---

Paso 5
Establecer métricas para rastrear mejoras en accesibilidad tanto de código como visual a lo largo de múltiples ciclos de pruebas.

---

Resultado esperado
Un protocolo completo de pruebas que aborde aspectos técnicos y visuales de accesibilidad, junto con resultados de pruebas de muestra y recomendaciones para implementar mejoras identificadas.




## BLOQUE: titulo-segundo

4.3 Evaluación automática y manual de la accesibilidad

La combinación de métodos automáticos y manuales es esencial para llevar a cabo una evaluación de accesibilidad completa y efectiva.


## BLOQUE: img-anexo
//assets: 12.png

### Evaluación automática y manual de la accesibilidad 
En el PDF Evaluación automática y manual de la accesibilidad, se describe cómo ambos enfoques abordan distintos aspectos de la experiencia de usuario, desde errores técnicos detectables automáticamente hasta barreras más complejas que requieren interpretación humana. A través de ejemplos y pasos detallados, se proporciona un protocolo práctico para implementar una estrategia de evaluación de doble pista que optimice la inclusión digital en productos de software.

Anexo_8.pdf

## BLOQUE: titulo-segundo

4.4 Análisis de errores comunes en accesibilidad

El análisis sistemático de errores comunes en accesibilidad proporciona conocimientos valiosos para prevención, detección temprana, y corrección efectiva de barreras que frecuentemente impactan la experiencia de usuario para personas con discapacidades. Los errores comunes de accesibilidad típicamente caen en categorías predecibles relacionadas con marcado semántico inadecuado, consideraciones insuficientes de diseño visual, diseño deficiente de interacción por teclado, y contenido alternativo faltante o inapropiado para elementos no textuales. 



## BLOQUE: acordeon-img
//assets: 13.png

Texto alternativo faltante
Para imágenes representa una de las violaciones más frecuentes, pero el análisis revela que el problema subyacente frecuentemente se extiende más allá de simple omisión para incluir texto alternativo inapropiado que no transmite información equivalente, imágenes decorativas que no están apropiadamente marcadas, e imágenes complejas que carecen de descripciones detalladas adecuadas.

---

Entrega de información de solo color
Representa otro problema penetrante donde información crítica como estados de error, indicadores de estado, o señales de navegación dependen exclusivamente de distinción de color, creando barreras para usuarios con deficiencias de visión de color.




## BLOQUE: bg-full-icono-texto
//assets: 14.svg

Los errores de accesibilidad por teclado frecuentemente se manifiestan como elementos de interfaz inalcanzables, indicadores de foco invisibles, violaciones de orden lógico de tabulación, y atajos de teclado faltantes para interacciones complejas, reflejando consideración inadecuada de patrones de interacción no adecuados durante fases de diseño y desarrollo.


## BLOQUE: iconobloque
//assets: 15.svg

Torres Burriel (2018), observa que muchos problemas de accesibilidad por teclado surgen de la comprensión incompleta de desarrolladores de cómo usuarios de teclado navegan por interfaces complejas, llevando a diseños que técnicamente proporcionan acceso por teclado pero crean experiencias de usuario ineficientes o confusas.


## BLOQUE: bloque-img
//assets: 16.svg

Los errores relacionados con formularios constituyen otra categoría principal, incluyendo etiquetas faltantes, mensajería de error inadecuada, indicadores de campo requerido poco claros, y validación de formulario inaccesible que puede prevenir a usuarios de completar exitosamente tareas críticas. 

Fernández Casado (2018), señala que los errores de accesibilidad de formulario frecuentemente se componen, creando barreras acumulativas que pueden hacer flujos de trabajo de usuario completos inaccesibles incluso cuando elementos de formulario individuales podrían cumplir técnicamente con requisitos básicos de accesibilidad.

## BLOQUE: 

Durante la evaluación de accesibilidad de un sistema importante de planificación de recursos empresariales, el análisis sistemático de errores reveló patrones que eran particularmente problemáticos para usuarios de tecnologías de apoyo. 

## BLOQUE: slyderf-cards
//assets: 17.png, 18.png, 19.png

Los componentes de visualización de datos consistentemente fallaron en proporcionar métodos alternativos de acceso, dependiendo exclusivamente de gráficos y diagramas visuales para transmitir métricas comerciales críticas sin datos tabulares equivalentes o descripciones textuales. 

---

Las interfaces de navegación en todo el sistema sufrieron de etiquetado ARIA inadecuado, haciendo difícil para usuarios de lectores de pantalla comprender relaciones jerárquicas entre diferentes módulos del sistema y mantener orientación espacial durante flujos de trabajo complejos. 

---

Las interacciones de formulario a través de múltiples módulos del sistema mostraron patrones consistentes de mecanismos de recuperación de errores faltantes, donde fallas de validación proporcionaban retroalimentación visual, pero fallaron en anunciar programáticamente errores a tecnologías de apoyo, creando situaciones donde usuarios podrían enviar formularios repetidamente sin entender por qué sus envíos estaban fallando.


## BLOQUE: 
**Ejercicio práctico. Análisis de patrones de error.** Se solicita realizar análisis integral de patrones de error para una suite de herramientas de desarrollo y crear estrategias de prevención. 

## BLOQUE: acordeon-img
//assets: 20.png

//acordeon
Paso 1
Analizar reportes de evaluación de accesibilidad de al menos cinco herramientas de desarrollo diferentes (entornos integrados de desarrollo, marcos de pruebas, plataformas de despliegue). para identificar patrones de error recurrentes y su frecuencia a través de diferentes tipos de interfaces.

Paso 2
Categorizar errores identificados por severidad de impacto, grupo de usuarios afectado, y complejidad técnica requerida para corrección, creando matriz de priorización para abordar diferentes tipos de problemas de accesibilidad.

Paso 3
Investigar causas raíz para patrones de error más comunes, examinando si los problemas surgen de decisiones de diseño, limitaciones técnicas, brechas de proceso, o deficiencias de conocimiento.

Paso 4
Desarrollar estrategias específicas de prevención para cada categoría principal de error, incluyendo directrices de diseño, listas de verificación de desarrollo, y aproximaciones de pruebas automatizadas que pueden prevenir que estos errores ocurran.

Paso 5
Crear materiales de capacitación que ayuden a los equipos de desarrollo reconocer y evitar errores comunes de accesibilidad durante el flujo de trabajo de desarrollo regular.

Resultado esperado
Documento integral de análisis de patrones de error junto con estrategias accionables de prevención, materiales de capacitación, y directrices de implementación que los equipos pueden usar para reducir errores de accesibilidad en sus propios procesos de desarrollo.




## BLOQUE: titulo-segundo
4.5 Corrección de problemas de accesibilidad en interfaces

La identificación oportuna de barreras de accesibilidad en interfaces digitales debe ir acompañada de estrategias de corrección eficaces y sostenibles que garanticen experiencias inclusivas.


## BLOQUE: img-anexo
//assets: 21.png


### Corrección de problemas de accesibilidad en interfaces 
En el PDF Corrección de problemas de accesibilidad en interfaces, se expone un enfoque integral que orienta el proceso de diagnóstico, priorización y solución de problemas de accesibilidad, destacando la importancia de atacar tanto los errores técnicos visibles como sus causas estructurales. A través de recomendaciones prácticas y un ejercicio aplicado, se invita a diseñar planes de acción que incorporen soluciones reutilizables, validación con usuarios reales y mejoras continuas en los procesos de desarrollo.

Anexo_9.pdf

## BLOQUE: texto-iconobloque-imagen
//assets: 22.svg, 23.png

//texto
El estudio integral del diseño de interfaces accesibles revela que la accesibilidad constituye mucho más que un requisito técnico o cumplimiento normativo; representa una filosofía fundamental de desarrollo que reconoce y abraza la diversidad humana como impulsor de innovación y excelencia en ingeniería de software. 

//iconobloque
A través del análisis detallado de estándares WCAG, principios de diseño inclusivo, y herramientas de evaluación especializadas, se comprende que la implementación efectiva de accesibilidad requiere integración sistemática en todo el proceso de desarrollo, desde investigación inicial hasta mantenimiento continuo de productos en producción.

//texto
La relevancia profesional de estas competencias se magnifica cuando se considera que la industria de software reconoce cada vez más la accesibilidad como indicador de calidad general y sofisticación técnica, no como restricción o consideración adicional. Las organizaciones que implementan exitosamente prácticas integrales de accesibilidad típicamente demuestran capacidades superiores de ingeniería, procesos más robustos de pruebas, y mayor atención a calidad de experiencia de usuario a través de todas las poblaciones de usuarios. 

## BLOQUE: color

En el contexto laboral contemporáneo, los profesionales que combinan experiencia técnica con conocimiento de accesibilidad poseen ventajas competitivas significativas, particularmente como los requisitos legales y expectativas sociales para tecnología inclusiva continúan expandiéndose globalmente.


## BLOQUE: img-bloque
//assets: 24.png

Las metodologías y herramientas exploradas en esta unidad proporcionan base sólida para desarrollar carreras que pueden contribuir significativamente a crear tecnología que empodera más que excluye, reconociendo que el diseño accesible beneficia a todos y frecuentemente lleva a innovaciones que avanzan campos completos de interacción humano-computadora. El futuro de la ingeniería de software requerirá cada vez más profesionales que puedan integrar sin problemas consideraciones de accesibilidad en proyectos técnicos complejos, haciendo este conocimiento esencial para cualquiera que aspire a roles de liderazgo en desarrollo de tecnología asegurando que su trabajo contribuya a un mundo digital más inclusivo y equitativo.

## BLOQUE: actividad

## BLOQUE: material-complementario


Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial. https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1 

Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo. https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9

Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487

Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial. https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1

Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia. https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938

WordPress. (2023, 16 de junio). Evaluación de la accesibilidad. Cuando los test automáticos son insuficientes. [Vídeo]. YouTube. https://youtu.be/msJI4Z5Ra0E

WordPress. (2020, 26 de mayo). Iñaki Martín: Herramientas automáticas para la accesibilidad web. [Vídeo]. YouTube. https://youtu.be/ff854s90oRA 

