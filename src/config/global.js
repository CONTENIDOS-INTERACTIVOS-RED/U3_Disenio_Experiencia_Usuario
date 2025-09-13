export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Diseño de interfaces accesibles',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Diseño de interfaces accesibles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estándares de accesibilidad (WCAG)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normativas y estándares de accesibilidad (WCAG)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Aplicación de los principios WCAG en el diseño de experiencia de usuario',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Cómo integrar la accesibilidad en las fases tempranas del diseño',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Herramientas para evaluar la accesibilidad de interfaces',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Revisión de accesibilidad en plataformas digitales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño inclusivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios del diseño inclusivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Diseño para usuarios con discapacidad visual, auditiva, motriz y cognitiva',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Buenas prácticas para crear interfaces inclusivas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Casos de estudio de diseño inclusivo',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Desarrollo de interfaces amigables y fáciles de usar para todos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Creación de usuarios (user persona)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Herramientas de evaluación de accesibilidad (Axe, WAVE)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Pruebas de accesibilidad en el código y diseño visual',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Evaluación automática y manual de la accesibilidad',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Análisis de errores comunes en accesibilidad',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Corrección de problemas de accesibilidad en interfaces',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1',
    },
    {
      referencia:
        'Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9',
    },
    {
      referencia:
        'Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487',
    },
    {
      referencia:
        'Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1',
    },
    {
      referencia:
        'Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad web',
      significado:
        'Práctica de diseño y desarrollo que garantiza que sitios web, herramientas y tecnologías sean utilizables por personas con discapacidades, eliminando barreras que impiden la interacción o el acceso al contenido digital.',
    },
    {
      termino: 'ARIA (Accessible Rich Internet Applications)',
      significado:
        'Conjunto de atributos HTML que proporcionan información semántica adicional a tecnologías de apoyo, especialmente útil para hacer accesibles elementos interactivos complejos que no tienen equivalentes nativos en HTML.',
    },
    {
      termino: 'Axe',
      significado:
        'Herramienta automatizada de evaluación de accesibilidad desarrollada por Deque Systems, ampliamente reconocida por su precisión técnica y capacidad de integración en flujos de trabajo de desarrollo continuo para detectar violaciones de estándares WCAG.',
    },
    {
      termino: 'CI/CD (Continuous Integration/Continuous Deployment)',
      significado:
        'Metodología de desarrollo que automatiza la integración y despliegue de código, permitiendo la incorporación sistemática de verificaciones de accesibilidad en cada etapa del proceso de desarrollo de software.',
    },
    {
      termino: 'Contraste de color',
      significado:
        'Diferencia de luminosidad entre elementos de primer plano (como texto) y elementos de fondo, medida según estándares específicos para garantizar legibilidad adecuada para usuarios con diferentes capacidades visuales.',
    },
    {
      termino: 'Daltonismo',
      significado:
        'Condición visual que afecta la percepción de ciertos colores, requiriendo que las interfaces no dependan exclusivamente del color para transmitir información crítica o indicar estados del sistema.',
    },
    {
      termino: 'Diseño inclusivo',
      significado:
        'Filosofía de desarrollo que reconoce y abraza la diversidad humana como fuente de innovación, creando soluciones que acomodan diferentes capacidades, contextos culturales y preferencias de interacción desde su concepción inicial.',
    },
    {
      termino: 'Diseño universal',
      significado:
        'Principio que establece que productos y entornos deben ser utilizables por todas las personas en la mayor medida posible, sin necesidad de adaptación o diseño especializado, beneficiando tanto a usuarios con discapacidades como a la población general.',
    },
    {
      termino: 'HTML semántico',
      significado:
        'Uso apropiado de elementos HTML que transmiten significado estructural y contextual del contenido, facilitando la interpretación correcta por parte de tecnologías de apoyo y mejorando la accesibilidad general de las interfaces.',
    },
    {
      termino: 'Lector de pantalla',
      significado:
        'Tecnología de apoyo que convierte texto digital y elementos de interfaz en salida de voz o braille, permitiendo a usuarios ciegos o con baja visión navegar y utilizar contenido digital de manera efectiva.',
    },
    {
      termino: 'Lighthouse',
      significado:
        'Herramienta automatizada de Google que audita rendimiento, accesibilidad, mejores prácticas y optimización para motores de búsqueda en aplicaciones web, proporcionando puntuaciones específicas y recomendaciones de mejora.',
    },
    {
      termino: 'Navegación por teclado',
      significado:
        'Método de interacción que permite a usuarios operar interfaces digitales utilizando exclusivamente el teclado, esencial para personas con discapacidades motoras o aquellas que no pueden utilizar dispositivos de señalización como el ratón.',
    },
    {
      termino: 'Principios WCAG',
      significado:
        'Cuatro fundamentos básicos de accesibilidad web que establecen que el contenido debe ser perceptible, operable, comprensible y robusto, formando la base conceptual sobre la cual se construyen todas las directrices específicas de accesibilidad.',
    },
    {
      termino: 'Prototipo de alta fidelidad',
      significado:
        'Representación detallada de una interfaz que incluye elementos visuales finales, interacciones complejas y contenido real, utilizada para validar decisiones de diseño específicas y comunicar la visión final del producto.',
    },
    {
      termino: 'Prototipo de baja fidelidad',
      significado:
        'Representación simplificada de una interfaz que se enfoca en estructura, flujo de navegación y conceptos fundamentales, sin incluir detalles visuales específicos, facilitando iteración rápida y validación de ideas conceptuales.',
    },
    {
      termino: 'Tecnologías de apoyo',
      significado:
        'Dispositivos, software o equipamiento utilizados para aumentar, mantener o mejorar las capacidades funcionales de personas con discapacidades, incluyendo lectores de pantalla, dispositivos de entrada alternativos y software de reconocimiento de voz.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Medida de qué tan fácil, eficiente y satisfactorio resulta para usuarios completar tareas específicas utilizando una interfaz digital, evaluada mediante métricas de efectividad, eficiencia y satisfacción subjetiva.',
    },
    {
      termino: 'WAVE (Web Accessibility Evaluation Tool)',
      significado:
        'Herramienta de evaluación de accesibilidad desarrollada por WebAIM que proporciona análisis visual de problemas de accesibilidad directamente en páginas web, utilizando iconografía y codificación de colores para facilitar identificación de barreras.',
    },
    {
      termino: 'WCAG (Web Content Accessibility Guidelines)',
      significado:
        'Estándares internacionales desarrollados por el W3C que proporcionan recomendaciones para hacer contenido web accesible a personas con discapacidades, organizados en tres niveles de conformidad (A, AA, AAA) con criterios específicos y verificables.',
    },
    {
      termino: 'Wireframes interactivos',
      significado:
        'Evolución de wireframes estáticos que incluyen funcionalidad básica de navegación e interacción, permitiendo simular comportamientos de usuario y validar flujos de trabajo antes de invertir recursos en desarrollo o diseño visual completo.',
    },
    {
      termino: 'Wireframes',
      significado:
        'Representaciones esquemáticas de interfaces que muestran la estructura, disposición y jerarquía de elementos sin incluir detalles visuales específicos, utilizados para planificar arquitectura de información y flujos de interacción antes del diseño visual detallado.',
    },
  ],
}
