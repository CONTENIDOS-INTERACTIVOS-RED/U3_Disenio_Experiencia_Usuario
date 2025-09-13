export default {
  tema4: {
    tema: '4. Creación de usuarios (user persona)',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre herramientas de evaluación de accesibilidad y diseño inclusivo.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto: '¿Qué significan las siglas WCAG?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'World Content Association Guidelines',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Web Content Accessibility Guidelines',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Web Certified Application Group',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Wireless Connection Accessibility Guide',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! WCAG significa Web Content Accessibility Guidelines (Pautas de Accesibilidad para el Contenido Web).',
        mensaje_incorrecto:
          'Incorrecto. WCAG significa Web Content Accessibility Guidelines (Pautas de Accesibilidad para el Contenido Web).',
      },
      {
        id: 2,
        texto:
          'El diseño inclusivo considera las diferentes capacidades de las personas al usar tecnología.',
        imagen: '',
        barajarRespuestas: false,
        opciones: [
          {
            id: 'a',
            texto: 'Verdadero',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Falso',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El diseño inclusivo reconoce y abraza la diversidad humana como fuente de innovación.',
        mensaje_incorrecto:
          'Incorrecto. El diseño inclusivo sí considera las diferentes capacidades de las personas al usar tecnología.',
      },
      {
        id: 3,
        texto: '¿Cuál es una buena práctica de accesibilidad?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Usar solo colores brillantes',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Evitar etiquetas en los formularios',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Añadir texto alternativo a las imágenes',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Usar animaciones complejas',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Añadir texto alternativo a las imágenes es una práctica esencial de accesibilidad.',
        mensaje_incorrecto:
          'Incorrecto. Añadir texto alternativo a las imágenes es una buena práctica de accesibilidad.',
      },
      {
        id: 4,
        texto: '¿Qué tipo de usuario puede beneficiarse del diseño accesible?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Personas con discapacidad visual',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Personas mayores',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Personas con dificultades cognitivas',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Todas las anteriores',
            esCorrecta: true,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El diseño accesible beneficia a todos los usuarios, no solo a aquellos con discapacidades.',
        mensaje_incorrecto:
          'Incorrecto. El diseño accesible beneficia a todas las personas mencionadas y más.',
      },
      {
        id: 5,
        texto:
          '¿Qué herramienta se puede usar para evaluar la accesibilidad de una interfaz web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Paint',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'WAVE',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Outlook',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Google Maps',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! WAVE (Web Accessibility Evaluation Tool) es una herramienta especializada para evaluar accesibilidad.',
        mensaje_incorrecto:
          'Incorrecto. WAVE es la herramienta apropiada para evaluar la accesibilidad de una interfaz web.',
      },
    ],
  },
}
