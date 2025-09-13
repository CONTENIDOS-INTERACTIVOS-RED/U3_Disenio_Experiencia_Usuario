<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Estándares de accesibilidad (WCAG)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/19: img-bloque
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los estándares de accesibilidad web constituyen el marco normativo fundamental que guía el desarrollo de interfaces digitales inclusivas en el contexto del diseño de experiencia de usuario. Se establece que estas directrices proporcionan criterios objetivos y medibles para evaluar qué tan accesible resulta una interfaz para usuarios con diferentes tipos de discapacidades.

    // Bloque 2/19: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los estándares de accesibilidad web constituyen el marco normativo fundamental que guía el desarrollo de interfaces digitales inclusivas en el contexto del diseño de experiencia de usuario. Se establece que estas directrices proporcionan criterios objetivos y medibles para evaluar qué tan accesible resulta una interfaz para usuarios con diferentes tipos de discapacidades.

        p(data-aos="fade-left") En esta sección se abordarán las normativas y estándares de accesibilidad WCAG, la aplicación práctica de los principios WCAG en el diseño de experiencia de usuario, las metodologías para integrar la accesibilidad desde las fases tempranas del diseño, las herramientas especializadas para evaluar la accesibilidad de interfaces, y finalmente las técnicas de revisión de accesibilidad en plataformas digitales. Cada uno de estos subtemas contribuye a construir una comprensión integral de cómo implementar efectivamente los estándares de accesibilidad en proyectos reales de desarrollo.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")

    // Bloque 3/19: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Normativas y estándares de accesibilidad (WCAG)

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") El conocimiento de las normativas y estándares de accesibilidad es fundamental para garantizar el desarrollo de productos digitales inclusivos y conformes con las exigencias legales y éticas actuales.

    // Bloque 4/19: img-anexo
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Normativas y estándares de accesibilidad (WCAG)
            p.mb-4(data-aos="fade-right") En el PDF Normativas y estándares de accesibilidad, se estudian las Pautas de Accesibilidad para el Contenido Web como marco de referencia internacional, analizando sus niveles de conformidad, evolución técnica y aplicación práctica en entornos reales. Este enfoque proporciona a los estudiantes criterios sólidos para evaluar la calidad y accesibilidad de las interfaces digitales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Normativas y estándares de accesibilidad (WCAG)

    // Bloque 5/19: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aplicación de los principios WCAG en el diseño de experiencia de usuario

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") La aplicación práctica de los principios WCAG en el diseño de experiencia de usuario, requiere una comprensión profunda de cómo cada uno de los cuatro principios fundamentales se traduce en decisiones concretas de diseño e interacción.

    // Bloque 6/19: infografia
    .bg-full-width.bg-color-info.mb-5
      .px-4.px-md-5.pb-0.pt-md-5
        .row.justify-content-start.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 507px;").mx-auto

              .bg-color-white.box-shadow.p-3(x="48%" y="78%" numero="+")
                p.mb-0 El principio de "Perceptible" 8implica que toda la información y componentes de la interfaz deben presentarse de manera que los usuarios puedan percibirlos a través de al menos uno de sus sentidos, lo que se materializa en alternativas textuales para contenido no textual, subtítulos para videos, y suficiente contraste de colores.

              .bg-color-white.box-shadow.p-3(x="56%" y="78%" numero="+")
                p.mb-0 El principio "Operable" establece que los componentes de la interfaz y navegación deben ser operables por todos los usuarios, incluyendo aquellos que dependen de tecnologías de apoyo o métodos de entrada alternativos.

              .bg-color-white.box-shadow.p-3(x="64%" y="78%" numero="+")
                p.mb-0 La característica "Comprensible" garantiza que la información y operación de la interfaz sea entendible.

              .bg-color-white.box-shadow.p-3(x="72%" y="78%" numero="+")
                p.mb-0 La característica "Robusto" asegura que el contenido sea interpretable por una amplia variedad de agentes de usuario, incluyendo tecnologías de apoyo.

    // Bloque 7/19: color-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-6.p-4.p-lg-5(data-aos="fade-left")
          p.mb-0 La integración de estos principios en metodologías contemporáneas de diseño de experiencia de usuario, se facilita cuando se comprende que no constituyen restricciones adicionales, sino consideraciones fundamentales que enriquecen el proceso de diseño. Fernández Casado (2018), destaca que la aplicación efectiva de estos principios desde las fases iniciales del diseño resulta significativamente más eficiente que intentar reacondicionar la accesibilidad en productos ya desarrollados. Labrador y Márquez Moreno (2023), amplían esta perspectiva argumentando que los principios WCAG, cuando se aplican correctamente, mejoran la experiencia general del usuario y contribuyen a crear productos más innovadores y usables. La clave radica en desarrollar un enfoque mental de diseño inclusivo donde estos principios se consideran oportunidades creativas más que limitaciones técnicas.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")

    // Bloque 8/19: párrafo normal
    p(data-aos="fade-left").mb-5 Un ejemplo ilustrativo se encuentra en el diseño de una plataforma de aprendizaje electrónico para ingeniería de software, donde los principios WCAG se aplicaron sistemáticamente durante todo el proceso de desarrollo.

    .row.mb-5.justify-content-center
      .col-lg-10
        // Bloque 9/19: iconobloque 10
        .bg-color-12.p-4(data-aos="fade-left").mb-0
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg").mx-auto
            .col-lg
              p.mb-0 Para el principio "Perceptible", se implementaron transcripciones automáticas para todos los videos técnicos, descripciones alternativas detalladas para diagramas de arquitectura de software, y un sistema de paleta de colores que mantiene contraste suficiente incluso para usuarios con daltonismo.

        // Bloque 10/19: iconobloque 10
        .bg-color-14.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg
              p.mb-4 El principio "Operable" se materializó en navegación completa por teclado, tiempo ajustable para completar ejercicios de programación, y control de reproducción accesible para contenido multimedia.

              p.mb-0 La "Comprensibilidad" se logró mediante un lenguaje consistente en toda la plataforma, instrucciones claras para cada actividad, y mensajes de error específicos en los entornos de programación integrados.
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg").mx-auto

    // Bloque 11/19: párrafo normal
    p(data-aos="fade-left").mb-5 #[strong Ejercicio práctico.] Diseño de formulario accesible. Se solicita diseñar un formulario de registro para una aplicación de desarrollo de software que cumpla con los cuatro principios WCAG.

    // Bloque 12/19: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Aplicar el principio "Perceptible" creando etiquetas descriptivas para cada campo, mensajes de error visualmente distinguibles, e indicadores claros de campos obligatorios.
          .div(titulo="Paso 2")
            p Implementar "Operable" asegurando orden lógico de tabulación, tiempo suficiente para completar el formulario, y funcionalidad completa mediante teclado.
          .div(titulo="Paso 3")
            p Garantizar "Comprensible" con instrucciones claras, validación en tiempo real con mensajes específicos, y terminología consistente.
          .div(titulo="Paso 4")
            p Asegurar "Robusto" utilizando HTML semántico apropiado y atributos ARIA cuando sea necesario.
          .div(titulo="Resultado esperado")
            p Un formulario funcional que demuestre la aplicación práctica de cada principio WCAG, acompañado de documentación que explique las decisiones de diseño tomadas para cumplir con cada criterio.

    // Bloque 13/19: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Cómo integrar la accesibilidad en las fases tempranas del diseño

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left").mb-5 La incorporación temprana de la accesibilidad en el diseño de experiencias digitales es clave para asegurar soluciones inclusivas y sostenibles desde sus primeras etapas.

    // Bloque 14/19: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Cómo integrar la accesibilidad en las fases tempranas del diseño
            p.mb-4(data-aos="fade-right") En el PDF Cómo integrar la accesibilidad en las fases tempranas del diseño, se presentan estrategias prácticas para incluir criterios de accesibilidad desde la investigación con usuarios hasta la creación de prototipos, fortaleciendo así la calidad y usabilidad del producto final. Este enfoque permite anticipar barreras y diseñar experiencias más equitativas y eficientes para una diversidad real de usuarios.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cómo integrar la accesibilidad en las fases tempranas del diseño

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')

    // Bloque 15/19: titulo-segundo
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Herramientas para evaluar la accesibilidad de interfaces

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left").mb-5 La evaluación de accesibilidad es un componente esencial en el diseño de interfaces digitales inclusivas, ya que permite identificar y corregir barreras que afectan la experiencia de usuarios con discapacidades.

    // Bloque 16/19: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Herramientas para evaluar la accesibilidad de interfaces
            p.mb-4(data-aos="fade-right") En el PDF Herramientas para evaluar la accesibilidad de interfaces, se presentan estrategias y tecnologías clave que permiten realizar evaluaciones efectivas desde múltiples perspectivas, combinando pruebas automatizadas, manuales y con usuarios reales. Este enfoque integral garantiza una mayor cobertura de los posibles problemas de accesibilidad y contribuye al desarrollo de productos digitales más usables, equitativos y sostenibles.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas para evaluar la accesibilidad de interfaces

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')

    // Bloque 17/19: titulo-segundo
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Revisión de accesibilidad en plataformas digitales

    .row.justify-content-center
      .col-12
        p(data-aos="fade-left").mb-5 La revisión de accesibilidad en plataformas digitales es un proceso clave para asegurar que las soluciones tecnológicas sean inclusivas y respondan a las necesidades de todos los usuarios, incluyendo aquellos con discapacidades.

    // Bloque 18/19: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Revisión de accesibilidad en plataformas digitales
            p.mb-4(data-aos="fade-right") En el PDF Revisión de accesibilidad en plataformas digitales, se presentan enfoques, metodologías y buenas prácticas para implementar evaluaciones continuas que garanticen el cumplimiento de estándares y la mejora progresiva de la experiencia de usuario. Este material proporciona herramientas esenciales para integrar la accesibilidad como parte estructural del ciclo de vida del desarrollo digital, promoviendo la calidad y equidad en los productos tecnológicos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Revisión de accesibilidad en plataformas digitales

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')

    // Bloque 19/19: bloque-material-complementario
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
              a(href="https://youtu.be/Mu46IwnhAJM" target="_blank" rel="noopener noreferrer") Edu. Vitual y a Distancia de la U. de Cundinamarca. (2024, 10 de diciembre). Principios de accesibilidad y Diseño Universal. [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/bO-EftW88pY" target="_blank" rel="noopener noreferrer") Flat 101. (2020, 14 de mayo). Diversidad funcional: Accesibilidad e inclusión en el diseño - FLAT 101 | Digital Sessions. [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/0SksWosx2YE" target="_blank" rel="noopener noreferrer") Growth: el podcast de Product Hackers. (2022, 3 de febrero). Herramientas de accesibilidad. [Vídeo]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
