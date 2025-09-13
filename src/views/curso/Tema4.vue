<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Creación de usuarios (user persona)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/31: párrafo normal
    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") Las herramientas para evaluación de accesibilidad constituyen un ecosistema diverso de soluciones tecnológicas diseñadas para identificar, analizar y monitorear barreras de accesibilidad en interfaces digitales. La evaluación efectiva requiere una aproximación multicapa que combine pruebas automatizadas, inspección manual, y pruebas de usuario con personas que utilizan tecnologías de apoyo.

    // Bloque 2/31: color-imagen-color 4:4:4
    .row.mb-5
      .col-lg-4
        .bg-color-4.p-4(data-aos="fade-left").h-100.tarjeta
          p.mb-0 Esta categoría de herramientas ha evolucionado significativamente para abordar la complejidad creciente de aplicaciones web modernas y la sofisticación de los estándares de accesibilidad. En el contexto de desarrollo de software, estas herramientas se integran en flujos de trabajo de desarrollo continuo, proporcionando retroalimentación inmediata a desarrolladores y facilitando el mantenimiento de estándares de accesibilidad durante todo el ciclo de vida del producto.
      
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      
      .col-lg-4
        .bg-color-2.p-4(data-aos="fade-left").h-100.tarjeta
          p.mb-0 En esta sección se explorarán herramientas específicas de evaluación como Axe y WAVE que han ganado adopción amplia en la industria, metodologías para realizar pruebas efectivas de accesibilidad tanto en código como en diseño visual, la importante distinción entre evaluación automatizada y manual y cuándo aplicar cada aproximación, análisis sistemático de errores comunes en accesibilidad que frecuentemente impactan experiencia de usuario, estrategias probadas para corregir problemas de accesibilidad de manera eficiente y sostenible en interfaces de producción.

    // Bloque 3/31: titulo-segundo
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Herramientas de evaluación de accesibilidad (Axe, WAVE)

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") La evaluación automatizada de la accesibilidad es una estrategia clave para garantizar que los productos digitales sean utilizables por todas las personas desde las etapas tempranas del desarrollo.

    // Bloque 4/31: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Herramientas de evaluación de accesibilidad (Axe, WAVE)
            p.mb-4(data-aos="fade-right") En el PDF Herramientas de evaluación de accesibilidad, se exploran soluciones como Axe y WAVE que permiten identificar de manera eficiente barreras técnicas que afectan la inclusión digital. Este documento ofrece un enfoque práctico para integrar estas herramientas en los flujos de trabajo de desarrollo, destacando sus capacidades, limitaciones y el valor de combinarlas con revisiones manuales y pruebas con usuarios reales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas de evaluación de accesibilidad (Axe, WAVE)

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/2.png', alt='')

    // Bloque 5/31: titulo-segundo
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Pruebas de accesibilidad en el código y diseño visual

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") Las pruebas de accesibilidad en código y diseño visual requieren metodologías especializadas que aborden diferentes capas de la experiencia de usuario, desde la estructura semántica del marcado hasta la presentación visual de información.

    // Bloque 6/31: slyder-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/3.png")
            .col-lg-7
              h4 Pruebas de accesibilidad a nivel de código
              p Se enfocan en evaluar la semántica HTML, implementaciones ARIA, lógica de navegación por teclado, y características programáticas de accesibilidad que permiten a tecnologías de apoyo interpretar y presentar contenido de manera precisa a usuarios. Este tipo de pruebas requiere comprensión de cómo lectores de pantalla, navegación por teclado, y otras tecnologías de apoyo interactúan con tecnologías web, así como familiaridad con estándares técnicos como especificaciones de accesibilidad HTML y mejores prácticas ARIA.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/4.png")
            .col-lg-7
              h4 Pruebas de accesibilidad de diseño visual
              p Evalúan aspectos como proporciones de contraste de color, jerarquía visual, claridad de iconografía, efectividad de disposición para usuarios con varias capacidades visuales, requiriendo combinación de herramientas automatizadas y juicio humano para evaluar accesibilidad visual general.

    // Bloque 7/31: bloque-img
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El proceso de realizar pruebas efectivas de accesibilidad en código involucra revisión sistemática de estructura de marcado, validación de atributos ARIA, pruebas de rutas de navegación por teclado, y verificación de etiquetas y descripciones programáticas. Torres Burriel (2018), enfatiza que las pruebas de accesibilidad de código deben integrarse temprano en el proceso de desarrollo más que tratarse como un paso de validación posterior al desarrollo, permitiendo a desarrolladores construir consideraciones de accesibilidad directamente en la arquitectura de la aplicación.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/5.png', alt='')

    // Bloque 8/31: imagen-iconobloque-color 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-15.px-4.mb-0(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/7.svg").mx-auto
            .col-lg
              p.mb-0 Las #[strong pruebas de accesibilidad de diseño visual] requieren atención para dependencias de color, elecciones tipográficas, espaciado visual, y jerarquía de información que pueden impactar usuarios con discapacidades visuales o cognitivas.

        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 Fischer (2008), señala que las pruebas efectivas de accesibilidad visual frecuentemente revelan problemas de diseño que benefician a todos los usuarios, como contraste insuficiente que impacta legibilidad en entornos brillantes o disposiciones abarrotadas que aumentan carga cognitiva innecesariamente.

    // Bloque 9/31: párrafo normal
    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") En el desarrollo de un entorno integrado de desarrollo colaborativo diseñado para equipos de software distribuidos, las pruebas comprehensivas de accesibilidad de código y elementos de diseño visual revelaron conocimientos críticos que moldearon el producto final.

    // Bloque 10/31: slyder-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7
              h4 Pruebas a nivel de código
              p Utilizando herramientas como axe-core y secuencias de comandos de prueba personalizados identificaron problemas con elementos de interfaz complejos como resaltado de sintaxis, plegado de código, e interfaces de depuración que requerían etiquetado ARIA sofisticado para proporcionar información significativa a usuarios de lectores de pantalla. El equipo desarrolló funciones de prueba de accesibilidad personalizadas que podían evaluar resaltado de código dinámico, información sobre herramientas de inspección de variables, y características de colaboración en tiempo real para asegurar marcado semántico apropiado y accesibilidad por teclado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/9.png")
            .col-lg-7
              h4 Pruebas de diseño visual
              p Revelaron que los indicadores tradicionales de solo color para errores de sintaxis, advertencias, y estados de éxito eran insuficientes para usuarios con deficiencias de visión de color, llevando a la implementación de indicadores visuales adicionales usando patrones, formas, y modificaciones tipográficas que proporcionaban información equivalente a través de múltiples canales visuales.

    // Bloque 11/31: párrafo normal
    .row.justify-content-center.mb-5
      .col-12
        p(data-aos="fade-left") #[strong Ejercicio práctico.] Pruebas comprehensivas de código y visuales. Se solicita desarrollar un protocolo comprehensivo de pruebas de accesibilidad para una herramienta de administración de bases de datos basada en web.

    // Bloque 12/31: img-acordeon
    .row.align-items-start.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Crear pruebas automatizadas de accesibilidad de código que evalúen estructura semántica HTML, implementación ARIA, y navegación por teclado para interfaces complejas como constructores de consultas, componentes de visualización de datos, y editores de esquemas de bases de datos.
          .div(titulo="Paso 2")
            p Desarrollar procedimientos de prueba manual para evaluar aspectos de accesibilidad visual incluyendo proporciones de contraste de color, efectividad de jerarquía visual, y claridad de iconos e indicadores visuales utilizados en toda la aplicación.
          .div(titulo="Paso 3")
            p Diseñar pruebas especializadas para contenido dinámico como resultados de consultas en tiempo real, notificaciones de error, e indicadores de progreso que aseguren que la información de accesibilidad se actualice y anuncie apropiadamente a tecnologías de apoyo.

    // Bloque 13/31: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 4")
            p Crear plantillas de documentación que capturen hallazgos de accesibilidad tanto de código como visuales, incluyendo capturas de pantalla, fragmentos de código, y recomendaciones específicas de corrección.
          .div(titulo="Paso 5")
            p Establecer métricas para rastrear mejoras en accesibilidad tanto de código como visual a lo largo de múltiples ciclos de pruebas.
          .div(titulo="Resultado esperado")
            p Un protocolo completo de pruebas que aborde aspectos técnicos y visuales de accesibilidad, junto con resultados de pruebas de muestra y recomendaciones para implementar mejoras identificadas.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/11.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 14/31: titulo-segundo
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Evaluación automática y manual de la accesibilidad

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") La combinación de métodos automáticos y manuales es esencial para llevar a cabo una evaluación de accesibilidad completa y efectiva.

    // Bloque 15/31: img-anexo
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/12.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Evaluación automática y manual de la accesibilidad
            p.mb-4(data-aos="fade-right") En el PDF Evaluación automática y manual de la accesibilidad, se describe cómo ambos enfoques abordan distintos aspectos de la experiencia de usuario, desde errores técnicos detectables automáticamente hasta barreras más complejas que requieren interpretación humana. A través de ejemplos y pasos detallados, se proporciona un protocolo práctico para implementar una estrategia de evaluación de doble pista que optimice la inclusión digital en productos de software.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación automática y manual de la accesibilidad

    // Bloque 16/31: titulo-segundo
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Análisis de errores comunes en accesibilidad

    .row.justify-content-center.mb-5
      .col-12
        p(data-aos="fade-left") El análisis sistemático de errores comunes en accesibilidad proporciona conocimientos valiosos para prevención, detección temprana, y corrección efectiva de barreras que frecuentemente impactan la experiencia de usuario para personas con discapacidades. Los errores comunes de accesibilidad típicamente caen en categorías predecibles relacionadas con marcado semántico inadecuado, consideraciones insuficientes de diseño visual, diseño deficiente de interacción por teclado, y contenido alternativo faltante o inapropiado para elementos no textuales.

    // Bloque 17/31: acordeon-img
    .row.align-items-start.mb-4
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Texto alternativo faltante")
            p Para imágenes representa una de las violaciones más frecuentes, pero el análisis revela que el problema subyacente frecuentemente se extiende más allá de simple omisión para incluir texto alternativo inapropiado que no transmite información equivalente, imágenes decorativas que no están apropiadamente marcadas, e imágenes complejas que carecen de descripciones detalladas adecuadas.
          .div(titulo="Entrega de información de solo color")
            p Representa otro problema penetrante donde información crítica como estados de error, indicadores de estado, o señales de navegación dependen exclusivamente de distinción de color, creando barreras para usuarios con deficiencias de visión de color.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 18/31: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los errores de accesibilidad por teclado frecuentemente se manifiestan como elementos de interfaz inalcanzables, indicadores de foco invisibles, violaciones de orden lógico de tabulación, y atajos de teclado faltantes para interacciones complejas, reflejando consideración inadecuada de patrones de interacción no adecuados durante fases de diseño y desarrollo.

    .row.mb-5.justify-content-center
      .col-10
        // Bloque 19/31: iconobloque
        .bg-color-9.p-4(data-aos="fade-left").mb-0
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/15.svg").mx-auto
            .col-lg
              p.mb-0 Torres Burriel (2018), observa que muchos problemas de accesibilidad por teclado surgen de la comprensión incompleta de desarrolladores de cómo usuarios de teclado navegan por interfaces complejas, llevando a diseños que técnicamente proporcionan acceso por teclado pero crean experiencias de usuario ineficientes o confusas.

        // Bloque 20/31: bloque-img
        .bg-color-4.mb-0(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg
              .p-4
                p(data-aos="fade-up") Los errores relacionados con formularios constituyen otra categoría principal, incluyendo etiquetas faltantes, mensajería de error inadecuada, indicadores de campo requerido poco claros, y validación de formulario inaccesible que puede prevenir a usuarios de completar exitosamente tareas críticas.
                p.mb-0(data-aos="fade-up") Fernández Casado (2018), señala que los errores de accesibilidad de formulario frecuentemente se componen, creando barreras acumulativas que pueden hacer flujos de trabajo de usuario completos inaccesibles incluso cuando elementos de formulario individuales podrían cumplir técnicamente con requisitos básicos de accesibilidad.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema4/16.svg', alt='')

    // Bloque 21/31: párrafo normal
    p(data-aos="fade-left").mb-5 Durante la evaluación de accesibilidad de un sistema importante de planificación de recursos empresariales, el análisis sistemático de errores reveló patrones que eran particularmente problemáticos para usuarios de tecnologías de apoyo.

    // Bloque 22/31: slyder-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/17.png")
            .col-lg-7
              h4 Visualización de datos
              p Los componentes de visualización de datos consistentemente fallaron en proporcionar métodos alternativos de acceso, dependiendo exclusivamente de gráficos y diagramas visuales para transmitir métricas comerciales críticas sin datos tabulares equivalentes o descripciones textuales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/18.png")
            .col-lg-7
              h4 Interfaces de navegación
              p Las interfaces de navegación en todo el sistema sufrieron de etiquetado ARIA inadecuado, haciendo difícil para usuarios de lectores de pantalla comprender relaciones jerárquicas entre diferentes módulos del sistema y mantener orientación espacial durante flujos de trabajo complejos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/19.png")
            .col-lg-7
              h4 Interacciones de formulario
              p Las interacciones de formulario a través de múltiples módulos del sistema mostraron patrones consistentes de mecanismos de recuperación de errores faltantes, donde fallas de validación proporcionaban retroalimentación visual, pero fallaron en anunciar programáticamente errores a tecnologías de apoyo, creando situaciones donde usuarios podrían enviar formularios repetidamente sin entender por qué sus envíos estaban fallando.

    // Bloque 23/31: párrafo normal
    .row.justify-content-center.mb-5
      .col-12
        p(data-aos="fade-left") #[strong Ejercicio práctico. Análisis de patrones de error.] Se solicita realizar análisis integral de patrones de error para una suite de herramientas de desarrollo y crear estrategias de prevención.

    // Bloque 24/31: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Analizar reportes de evaluación de accesibilidad de al menos cinco herramientas de desarrollo diferentes (entornos integrados de desarrollo, marcos de pruebas, plataformas de despliegue) para identificar patrones de error recurrentes y su frecuencia a través de diferentes tipos de interfaces.
          .div(titulo="Paso 2")
            p Categorizar errores identificados por severidad de impacto, grupo de usuarios afectado, y complejidad técnica requerida para corrección, creando matriz de priorización para abordar diferentes tipos de problemas de accesibilidad.
          .div(titulo="Paso 3")
            p Investigar causas raíz para patrones de error más comunes, examinando si los problemas surgen de decisiones de diseño, limitaciones técnicas, brechas de proceso, o deficiencias de conocimiento.
          .div(titulo="Paso 4")
            p Desarrollar estrategias específicas de prevención para cada categoría principal de error, incluyendo directrices de diseño, listas de verificación de desarrollo, y aproximaciones de pruebas automatizadas que pueden prevenir que estos errores ocurran.
          .div(titulo="Paso 5")
            p Crear materiales de capacitación que ayuden a los equipos de desarrollo reconocer y evitar errores comunes de accesibilidad durante el flujo de trabajo de desarrollo regular.
          .div(titulo="Resultado esperado")
            p Documento integral de análisis de patrones de error junto con estrategias accionables de prevención, materiales de capacitación, y directrices de implementación que los equipos pueden usar para reducir errores de accesibilidad en sus propios procesos de desarrollo.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/20.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 25/31: titulo-segundo
    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Corrección de problemas de accesibilidad en interfaces

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") La identificación oportuna de barreras de accesibilidad en interfaces digitales debe ir acompañada de estrategias de corrección eficaces y sostenibles que garanticen experiencias inclusivas.

    // Bloque 26/31: img-anexo
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Corrección de problemas de accesibilidad en interfaces
            p.mb-4(data-aos="fade-right") En el PDF Corrección de problemas de accesibilidad en interfaces, se expone un enfoque integral que orienta el proceso de diagnóstico, priorización y solución de problemas de accesibilidad, destacando la importancia de atacar tanto los errores técnicos visibles como sus causas estructurales. A través de recomendaciones prácticas y un ejercicio aplicado, se invita a diseñar planes de acción que incorporen soluciones reutilizables, validación con usuarios reales y mejoras continuas en los procesos de desarrollo.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Corrección de problemas de accesibilidad en interfaces

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/21.png', alt='')

    // Bloque 27/31: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El estudio integral del diseño de interfaces accesibles revela que la accesibilidad constituye mucho más que un requisito técnico o cumplimiento normativo; representa una filosofía fundamental de desarrollo que reconoce y abraza la diversidad humana como impulsor de innovación y excelencia en ingeniería de software.

        .bg-color-11.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través del análisis detallado de estándares WCAG, principios de diseño inclusivo, y herramientas de evaluación especializadas, se comprende que la implementación efectiva de accesibilidad requiere integración sistemática en todo el proceso de desarrollo, desde investigación inicial hasta mantenimiento continuo de productos en producción.

        p(data-aos="fade-left") La relevancia profesional de estas competencias se magnifica cuando se considera que la industria de software reconoce cada vez más la accesibilidad como indicador de calidad general y sofisticación técnica, no como restricción o consideración adicional. Las organizaciones que implementan exitosamente prácticas integrales de accesibilidad típicamente demuestran capacidades superiores de ingeniería, procesos más robustos de pruebas, y mayor atención a calidad de experiencia de usuario a través de todas las poblaciones de usuarios.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/23.png", data-aos="zoom-in")

    // Bloque 28/31: color
    .bg-color-4.p-4(data-aos="fade-left").mb-5
      p.mb-0 En el contexto laboral contemporáneo, los profesionales que combinan experiencia técnica con conocimiento de accesibilidad poseen ventajas competitivas significativas, particularmente como los requisitos legales y expectativas sociales para tecnología inclusiva continúan expandiéndose globalmente.

    // Bloque 29/31: img-bloque
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center.text-white
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/24.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las metodologías y herramientas exploradas en esta unidad proporcionan base sólida para desarrollar carreras que pueden contribuir significativamente a crear tecnología que empodera más que excluye, reconociendo que el diseño accesible beneficia a todos y frecuentemente lleva a innovaciones que avanzan campos completos de interacción humano-computadora. El futuro de la ingeniería de software requerirá cada vez más profesionales que puedan integrar sin problemas consideraciones de accesibilidad en proyectos técnicos complejos, haciendo este conocimiento esencial para cualquiera que aspire a roles de liderazgo en desarrollo de tecnología asegurando que su trabajo contribuya a un mundo digital más inclusivo y equitativo.

    // Bloque 30/31: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque 31/31: material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1" target="_blank" rel="noopener noreferrer") Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9" target="_blank" rel="noopener noreferrer") Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487" target="_blank" rel="noopener noreferrer") Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1" target="_blank" rel="noopener noreferrer") Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/msJI4Z5Ra0E" target="_blank" rel="noopener noreferrer") WordPress. (2023, 16 de junio). Evaluación de la accesibilidad. Cuando los test automáticos son insuficientes. [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/ff854s90oRA" target="_blank" rel="noopener noreferrer") WordPress. (2020, 26 de mayo). Iñaki Martín: Herramientas automáticas para la accesibilidad web. [Vídeo]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema4,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
