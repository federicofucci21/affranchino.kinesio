import acupuntura from "../IMG/acupuntura.jpg";
import rpg from "../IMG/rpg.jpg";
import calistenia from "../IMG/calistenia.jpg";
import rehabilitacion from "../IMG/rehabilitacion.jpg";
import terapiamanual from "../IMG/terapiamanual.png";

export const serviceArray = [
  {
    id: 1,
    tittle: "Acupuntura",
    img: acupuntura,
    description: [
      "Es una técnica terapéutica basada en la Teoría de la Medicina Tradicional China, consiste en la inserción de agujas finas de acero inoxidable desechables, de un uso, en puntos específicos de la superficie del cuerpo a diferentes profundidades según la zona y musculatura local.",
      "El objetivo principal es fomentar el equilibrio del organismo para prevenir o tratar disfunciones del mismo.",
      "Beneficios: 1- Manejo de ansiedad y stress, 2- Modulacion de dolores agudos y crónicos, 3- Favorece el sistema inmune y desminuye la inflamación.",
    ],
  },
  {
    id: 2,
    tittle: "RPG",
    img: rpg,
    description: [
      "RPG es Reeducación Postural Global: una forma de evaluación, diagnóstico y tratamiento de las patologías del sistema Neuro-Músculo-Esquelético",
      "Los objetivos generales son recuperar la flexibilidad muscular, modificar el estado de retracción del sistema miofascial, liberar las articulaciones bloqueadas, eliminar el dolor y reestablecer la función, mejorando así la calidad de vida.",
      "¿Quiénes pueden beneficiarse? Debido a la dosificación y delicadeza en el abordaje la RPG puede ser aplicada sin contraindicaciones tanto a niños como adultos que necesiten mejorar la postura, el funcionamiento del cuerpo o aliviar dolores, tanto agudos como crónicos.",
    ],
  },
  {
    id: 3,
    tittle: "Calistenia terapeutica o inicial",
    img: calistenia,
    description: [
      "La calistenia es una disciplina que consiste en ejercitar las cualidades físicas con el propio peso del cuerpo.",
      "La calistenia terapéutica tiene como objetivo fomentar la alineación postural a través de ejercicios ,  principalmente que trabajen la fuerza y flexibilidad a nivel global para mantener o mejorar hábitos posturales Saludables.",
      "Se pueden beneficiar personas con alteraciones posturales asintomáticos (sin dolor) o que terminaron un tratamiento de R.P.G y quieren mantener o potenciar las mejoras obtenidas.",
    ],
  },
  {
    id: 4,
    tittle: "Rehabilitacion motora a domicilio",
    img: rehabilitacion,
    description: [
      "Permite aplicar tratamientos terapéuticos para aquellas personas que sufren dificultades motoras o disponen de poco tiempo.",
      "Tiene como objetivos restablecer la función, mejorar la autonomía y la calidad de vida del paciente.",
      "Se pueden beneficiar pacientes con patologías crónicas que estén complicados para el traslado a instituciones de rehabilitación o persona que busquen una atención personalizada en la comodidad de su hogar.",
    ],
  },
  {
    id: 5,
    tittle: "Terapia manual",
    img: terapiamanual,
    description: [
      "Las técnicas de Terapia Manual, consisten en un amplio grupo de maniobras, en las que el kinesiólogo usa sus MANOS.",
      "A través de la manualidad del terapeuta, se busca liberar aquellas restricciones y bloqueos que le quitaron movilidad al tejido.",
      "Su aplicación, ayuda  también a disminuir o eliminar la inflamación, modular el dolor, inducir a la relajación, mejorar la elasticidad facilitando así el movimiento y mejorando la calidad de vida.",
    ],
  },
  {
    id: 6,
    tittle: "Punción seca",
    img: terapiamanual,
    description: [
      "La punción seca es una innovadora técnica fisioterapéutica que utiliza agujas de acupuntura para tratar ciertas dolencias, especialmente el síndrome de dolor miofascial.",
      "Su principal objetivo es devolverle al musculo Eficiencia y eficacia contráctil a través de la inhibición de puntos dolorosos (Puntos gatillo) en un músculo en particular.",
      "Se benefician pacientes con contracturas, fatigas post- esfuerzos, dolores irradiados, etc.",
    ],
  },
];

export const serviceArrayDetail = {
  acupuntura: {
    id: 1,
    tittle: "Acupuntura",
    img: acupuntura,
    description: [
      "Es una técnica terapéutica basada en la Teoría de la Medicina Tradicional China, consiste en la inserción de agujas finas de acero inoxidable desechables, de un uso, en puntos específicos de la superficie del cuerpo a diferentes profundidades según la zona y musculatura local.",
      "El objetivo principal es fomentar el equilibrio del organismo para prevenir o tratar disfunciones del mismo.",
      "Beneficios: 1- Manejo de ansiedad y stress, 2- Modulacion de dolores agudos y crónicos, 3- Favorece el sistema inmune y desminuye la inflamación.",
    ],
  },
  rpg: {
    id: 2,
    tittle: "RPG",
    img: rpg,
    description: [
      "RPG es Reeducación Postural Global: una forma de evaluación, diagnóstico y tratamiento de las patologías del sistema Neuro-Músculo-Esquelético",
      "Los objetivos generales son recuperar la flexibilidad muscular, modificar el estado de retracción del sistema miofascial, liberar las articulaciones bloqueadas, eliminar el dolor y reestablecer la función, mejorando así la calidad de vida.",
      "Quiénes pueden beneficiarse? Debido a la dosificación y delicadeza en el abordaje la RPG puede ser aplicada sin contraindicaciones tanto a niños como adultos que necesiten mejorar la postura, el funcionamiento del cuerpo o aliviar dolores, tanto agudos como crónicos.",
    ],
  },
  calistenia: {
    id: 3,
    tittle: "Calistenia terapeutica o inicial",
    img: calistenia,
    description: [
      "Permite aplicar tratamientos terapéuticos para aquellas personas que sufren dificultades motoras o disponen de poco tiempo.",
      "Tiene como objetivos restablecer la función, mejorar la autonomía y la calidad de vida del paciente.",
      "Se pueden beneficiar pacientes con patologías crónicas que estén complicados para el traslado a instituciones de rehabilitación o persona que busquen una atención personalizada en la comodidad de su hogar.",
    ],
  },
  rehabilitacion: {
    id: 4,
    tittle: "Rehabilitacion motora (a domicilio)",
    img: rehabilitacion,
    description: [
      "Permite aplicar tratamientos terapéuticos para aquellas personas que sufren dificultades motoras o disponen de poco tiempo.",
      "Tiene como objetivos restablecer la función, mejorar la autonomía y la calidad de vida del paciente.",
      "Se pueden beneficiar pacientes con patologías crónicas que estén complicados para el traslado a instituciones de rehabilitación o persona que busquen una atención personalizada en la comodidad de su hogar.",
    ],
  },
  terapia: {
    id: 5,
    tittle: "Terapia manual",
    img: terapiamanual,
    description: [
      "Las técnicas de Terapia Manual, consisten en un amplio grupo de maniobras, en las que el kinesiólogo usa sus MANOS.",
      "A través de la manualidad del terapeuta, se busca liberar aquellas restricciones y bloqueos que le quitaron movilidad al tejido.",
      "Su aplicación, ayuda  también a disminuir o eliminar la inflamación, modular el dolor, inducir a la relajación, mejorar la elasticidad facilitando así el movimiento y mejorando la calidad de vida.",
    ],
  },
  puncion: {
    id: 6,
    tittle: "Punción seca",
    img: terapiamanual,
    description: [
      "La punción seca es una innovadora técnica fisioterapéutica que utiliza agujas de acupuntura para tratar ciertas dolencias, especialmente el síndrome de dolor miofascial.",
      "Su principal objetivo es devolverle al musculo Eficiencia y eficacia contráctil a través de la inhibición de puntos dolorosos (Puntos gatillo) en un músculo en particular.",
      "Se benefician pacientes con contracturas, fatigas post- esfuerzos, dolores irradiados, etc.",
    ],
  },
};
