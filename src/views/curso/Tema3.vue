<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Diseño inclusivo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/20: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El diseño inclusivo representa una filosofía y metodología de desarrollo que reconoce la diversidad humana como fuente de innovación que mejora la experiencia de usuario. Se fundamenta en la premisa de que las soluciones diseñadas para usuarios con necesidades específicas frecuentemente resultan beneficiosas para todos los usuarios, siguiendo el principio del diseño universal.

        .bg-color-11.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta aproximación trasciende el cumplimiento básico de estándares de accesibilidad para enfocarse en crear experiencias que reconozcan y respondan a la diversidad en todas sus formas, incluyendo diferencias en capacidades físicas, cognitivas, culturales, y tecnológicas. En el contexto del diseño de experiencia de usuario para ingeniería de software, el diseño inclusivo se traduce en consideraciones sistemáticas sobre cómo diferentes tipos de usuarios interactúan con herramientas tecnológicas complejas, teniendo en cuenta variaciones en experiencia técnica, contextos de uso, y preferencias de interacción.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")

    // Bloque 2/20: imagen-color
    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-3.p-4.p-lg-5(data-aos="fade-left").text-white
          p.mb-0 Durante esta sección se explorarán los principios fundamentales del diseño inclusivo, las estrategias específicas para diseñar interfaces que acomoden usuarios con discapacidades visuales, auditivas, motrices y cognitivas, las buenas prácticas que facilitan la creación de interfaces verdaderamente inclusivas, casos de estudio representativos que demuestran la aplicación exitosa de estos principios, y las metodologías para desarrollar interfaces que sean naturalmente amigables y fáciles de usar para todos los usuarios, independientemente de sus características individuales.

    // Bloque 3/20: titulo-segundo
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principios del diseño inclusivo

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") El diseño inclusivo se ha convertido en un enfoque esencial para garantizar que los productos digitales respondan a la diversidad de capacidades, contextos y preferencias de uso de las personas.

    // Bloque 4/20: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Principios del diseño inclusivo
            p.mb-4(data-aos="fade-right") En el PDF Principios del diseño inclusivo, se abordan los fundamentos conceptuales y prácticos que permiten integrar la equidad, la flexibilidad y la simplicidad como ejes clave del desarrollo centrado en el usuario. Este documento proporciona un marco metodológico que orienta la creación de soluciones tecnológicas más accesibles, adaptables y eficaces, beneficiando no solo a usuarios con discapacidades, sino a toda la comunidad de usuarios.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principios del diseño inclusivo

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')

    // Bloque 5/20: titulo-segundo
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Diseño para usuarios con discapacidad visual, auditiva, motriz y cognitiva

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") El diseño efectivo para usuarios con discapacidades visuales requiere una comprensión profunda de cómo las tecnologías de apoyo interpretan y presentan información digital, así como las estrategias alternativas que estos usuarios emplean para navegar y comprender interfaces complejas.

    // Bloque 6/20: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Usuarios ciegos o con baja visión")
            p se implementan alternativas textuales integrales para contenido visual, estructura semántica clara que facilite la navegación por lectores de pantalla, y descripciones detalladas de elementos interactivos complejos como gráficos de datos o diagramas técnicos. Los usuarios con baja visión se benefician de controles de ampliación flexibles, opciones de alto contraste personalizables, e indicadores visuales amplificados que no dependan únicamente del color para transmitir información. Se reconoce que la discapacidad visual existe en un espectro amplio, desde ceguera total hasta diferentes tipos de limitaciones de visión que requieren aproximaciones de diseño matizadas y personalizables.
          .div(titulo="Usuarios con discapacidades auditivas")
            p el diseño se enfoca en asegurar que toda la información transmitida mediante audio tenga equivalentes visuales apropiados, incluyendo subtítulos precisos para contenido multimedia, indicadores visuales para notificaciones de sistema, y alternativas textuales para comandos de voz. Pintos Fernández (2023), enfatiza que el diseño para usuarios sordos o con pérdida auditiva va más allá de simplemente añadir subtítulos, requiriendo consideración cuidadosa de cómo se presenta información temporal y contextual que típicamente se transmite mediante audio.
          .div(titulo="Usuarios con discapacidades motrices")
            p necesitan interfaces que puedan operarse efectivamente con métodos de entrada alternativos, incluyendo navegación por interruptor, control ocular, o dispositivos de entrada adaptados. Esto requiere objetivos de interacción apropiadamente dimensionados, tiempos de respuesta ajustables, y funcionalidad completa accesible mediante teclado o comandos alternativos.
          .div(titulo="Usuarios con discapacidades cognitivas")
            p presentan consideraciones de diseño particularmente complejas porque abarcan una amplia gama de condiciones que afectan procesamiento de información, memoria, atención, y comprensión. Fischer (2008), destaca que el diseño para usuarios con discapacidades cognitivas frecuentemente beneficia a todos los usuarios porque promueve claridad, consistencia, y reducción de carga cognitiva innecesaria. Esto se materializa en interfaces que proporcionan orientación clara sobre ubicación y progreso, utilizan lenguaje simple y directo, minimizan distracciones, y ofrecen ayuda contextual cuando se necesita. Las funcionalidades de personalización se vuelven especialmente importantes para este grupo de usuarios, permitiendo ajustar velocidad de presentación de información, nivel de detalle, y métodos de navegación, según preferencias y capacidades individuales.

    // Bloque 7/20: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Un ejemplo integral se observa en el desarrollo de un entorno integrado de desarrollo diseñado específicamente para ser utilizable por desarrolladores con diferentes tipos de discapacidades. Para usuarios con discapacidades visuales, se implementó integración nativa con lectores de pantalla que proporciona descripciones detalladas de estructura de código, errores de compilación, y estados de depuración.

    // Bloque 8/20: bloque-img
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p(data-aos="fade-up") El resaltado de sintaxis se complementó con patrones textuales alternativos y opciones de alto contraste personalizables. Para desarrolladores con discapacidades auditivas, todas las notificaciones de sistema incluyen indicadores visuales prominentes, y las funcionalidades de programación en pareja incorporan conversación en tiempo real con transcripción automática de conversaciones de voz.
            p.mb-0(data-aos="fade-up") Los usuarios con limitaciones motrices pueden acceder a todas las funcionalidades mediante comandos de teclado personalizables, y el entorno incluye soporte nativo para dispositivos de entrada alternativos como seguimiento ocular y navegación por interruptor.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/7.svg', alt='')

    // Bloque 9/20: párrafo normal
    p(data-aos="fade-left").mb-5 #[strong Ejercicio práctico.] Diseño multicapacidad. Se debe diseñar una interfaz de revisión de código que sea completamente accesible para desarrolladores con diferentes tipos de discapacidades.

    // Bloque 10/20: img-acordeon
    .row.align-items-start.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Para discapacidades visuales, crear un sistema de navegación por código que funcione efectivamente con lectores de pantalla, incluyendo puntos de referencia semánticos, descripciones de cambios, y alternativas textuales para diferencias visuales.
          .div(titulo="Paso 2")
            p Para discapacidades auditivas, implementar notificaciones visuales para comentarios en tiempo real, estados de integración continua, y comunicación de equipo.
          .div(titulo="Paso 3")
            p Para discapacidades motrices, diseñar funcionalidad completa mediante teclado, incluyendo navegación entre archivos, inserción de comentarios, y aprobación de cambios.

    // Bloque 11/20: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b").mb-5
          .div(titulo="Paso 4")
            .row.justify-content-center.align-items-center
              .col-lg-3.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/9.png', alt='')
              .col-lg-9
                p Para discapacidades cognitivas, simplificar la presentación de información compleja, proporcionar orientación clara sobre procesos de revisión, e implementar personalización de densidad informacional.
          .div(titulo="Paso 5")
            p Integrar todas las consideraciones en una interfaz cohesiva que no segregue funcionalidades por tipo de discapacidad.
          .div(titulo="Resultado esperado")
            p Un diseño completo que demuestre cómo diferentes tipos de discapacidades pueden acomodarse sin comprometer la experiencia para ningún grupo de usuarios, incluyendo especificaciones técnicas para implementación.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/9.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 12/20: titulo-segundo
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Buenas prácticas para crear interfaces inclusivas

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") El desarrollo de interfaces digitales que respondan a las necesidades de todos los usuarios requiere la adopción de prácticas que integren la inclusión como principio rector del diseño.

    // Bloque 13/20: párrafo normal con título
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/10.png', alt='')
    
          .col-lg-8
            h3.mb-4(data-aos="flip-up") Buenas prácticas para crear interfaces inclusivas
            p.mb-4(data-aos="fade-right") En el PDF Buenas prácticas para crear interfaces inclusivas, se presentan estrategias concretas para incorporar la accesibilidad de forma transversal en cada fase del proceso de diseño y desarrollo. Este documento ofrece un marco estructurado que promueve la participación activa de usuarios con discapacidades, la personalización de la experiencia, y la mejora progresiva como pilares para construir soluciones tecnológicas equitativas, funcionales y sostenibles.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Buenas prácticas para crear interfaces inclusivas
    

    // Bloque 14/20: titulo-segundo
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Casos de estudio de diseño inclusivo

    // Bloque 15/20: audio-imagen
    .bg-full-width.bg-gradiente-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para conocer esta temática, lo invitamos a escuchar el siguiente podcast.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Casos de estudio de diseño inclusivo"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/11.svg", data-aos="zoom-in")

    // Bloque 16/20: párrafo normal
    p(data-aos="fade-left").mb-5 #[strong Ejercicio práctico.] Análisis de caso inclusivo. Se debe realizar un análisis comprehensivo de un caso de diseño inclusivo en el dominio de herramientas de desarrollo de software.

    // Bloque 17/20: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Seleccionar una herramienta o plataforma conocida que haya implementado mejoras significativas de accesibilidad (Visual Studio Code, Stack Overflow, o Jenkins).
          .div(titulo="Paso 2")
            p Investigar el proceso de diseño utilizado, identificando cómo se involucró a usuarios con discapacidades, qué métodos de investigación se emplearon, y cómo se priorizaron las mejoras.
          .div(titulo="Paso 3")
            p Analizar las soluciones específicas implementadas, categorizándolas, según el tipo de discapacidad que abordan y evaluando su efectividad.
          .div(titulo="Paso 4")
            p Evaluar el impacto más amplio de estas mejoras en la usabilidad general de la herramienta para todos los usuarios.
          .div(titulo="Paso 5")
            p Identificar lecciones aprendidas y recomendaciones aplicables a otros proyectos de desarrollo. Resultado esperado: Un caso de estudio detallado que incluya análisis del proceso, evaluación de soluciones, métricas de impacto, y recomendaciones accionables para replicar el éxito en otros contextos de desarrollo de software.

    // Bloque 18/20: titulo-segundo
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Desarrollo de interfaces amigables y fáciles de usar para todos

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") La creación de interfaces que resulten intuitivas, accesibles y eficaces para una amplia variedad de usuarios es un componente esencial del diseño centrado en las personas.

    // Bloque 19/20: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Desarrollo de interfaces amigables y fáciles de usar para todos
            p.mb-4(data-aos="fade-right") En el PDF Desarrollo de interfaces amigables y fáciles de usar para todos, se abordan estrategias de diseño que permiten combinar simplicidad, adaptabilidad y funcionalidad para responder a distintos niveles de experiencia, capacidades y preferencias de interacción. Este documento ofrece un enfoque práctico para lograr experiencias digitales inclusivas, donde la facilidad de uso se convierte en un objetivo alcanzable mediante decisiones de diseño bien fundamentadas y centradas en la diversidad de los usuarios.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Desarrollo de interfaces amigables y fáciles de usar para todos

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='')

    // Bloque 20/20: bloque-material-complementario
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
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
