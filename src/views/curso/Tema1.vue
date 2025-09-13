<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Diseño de interfaces accesibles'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/3: párrafo normal (## BLOQUE sin nombre)
    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") El diseño de interfaces accesibles representa uno de los pilares fundamentales en el desarrollo de experiencias de usuario efectivas y éticas en el contexto de la ingeniería de software moderna.

    // Bloque 2/3: slider-a (usando slyder-3 - 3 slides)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/1.png")
            .col-lg-7.order-lg-1
              h5 Accesibilidad integral
              p La accesibilidad no constituye únicamente un requisito técnico adicional, sino que forma parte integral del proceso de diseño centrado en el usuario, donde se busca crear productos digitales que puedan ser utilizados por la mayor cantidad de personas posible, independientemente de sus capacidades físicas, cognitivas o tecnológicas. La importancia de este enfoque se magnifica cuando se analiza que aproximadamente el 15 % de la población mundial vive con algún tipo de discapacidad, lo que significa que millones de usuarios potenciales pueden verse excluidos de las experiencias digitales cuando no se implementan principios de accesibilidad desde las fases tempranas del desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-lg-1
              h5 Demanda profesional
              p En el ámbito profesional de la ingeniería de software, se observa una creciente demanda por parte de organizaciones y gobiernos para que las aplicaciones y sistemas cumplan con estándares específicos de accesibilidad. Esta tendencia no solo responde a consideraciones éticas y de responsabilidad social, sino también a aspectos legales y comerciales significativos, dado que muchas jurisdicciones han establecido normativas que exigen el cumplimiento de directrices de accesibilidad en productos digitales. Además, se reconoce que el diseño accesible beneficia a todos los usuarios, no únicamente a aquellos con discapacidades, siguiendo el principio del diseño universal que mejora la usabilidad general de las interfaces. La implementación efectiva de estos principios requiere un entendimiento profundo de las tecnologías de apoyo, los patrones de interacción alternativos y las mejores prácticas de crecimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-lg-1
              h5 Competencias técnicas
              p Durante el desarrollo de esta unidad, se exploran los fundamentos teóricos y prácticos que permiten crear interfaces verdaderamente inclusivas y accesibles. Se examina cómo los estándares internacionales como las Pautas de Accesibilidad para el Contenido Web (WCAG). proporcionan un marco estructurado para evaluar y mejorar la accesibilidad de los productos digitales. Se analiza la importancia del diseño inclusivo como filosofía de desarrollo que considera la diversidad humana desde las etapas conceptuales del proyecto, y se investiga el uso de herramientas especializadas que facilitan la evaluación y corrección de problemas de accesibilidad. El objetivo principal se centra en desarrollar competencias técnicas y metodológicas que permitan integrar la accesibilidad como un componente natural del proceso de diseño de experiencia de usuario, garantizando que las soluciones desarrolladas sean utilizables por el mayor espectro posible de usuarios.

    // Bloque 3/3: bloque-material-complementario
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
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1" target="_blank" rel="noopener noreferrer") Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/gQIKQO41pME" target="_blank" rel="noopener noreferrer") Educar Portal. (2019, 11 de julio). Microaprendizaje: ¿Qué es la accesibilidad web?. [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/WYRYoATgTaI" target="_blank" rel="noopener noreferrer") Alfredo Profesor Ciclos. (2022, 19 de enero). Pruebas de Interfaz. Introducción al testing. [Vídeo]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
