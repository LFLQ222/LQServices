import React from "react";
import { HiOutlineMail } from "react-icons/hi";
export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/contract.jpg',
    title: 'Análisis Confidencial de Viabilidad de Beneficios de Pacientes',
    description: 'Identificamos que los pacientes cuenten con aseguranza y con cobertura de los servicios ofrecidos por la clínica',
  },
  {
    id: 'world-2',
    imgUrl: '/contract2.jpg',
    title: 'Gestión Personalizada de Cobranza con Aseguradoras',
    description: 'LQ Services se asegura que las clínicas cumplan con todos los requisitos que se necesita para el trámite de los cobros.',
  },
  {
    id: 'world-3',
    imgUrl: '/contract3.jpg',
    title: 'Asesoría en Cobranza con Pacientes',
    description: 'Te llevamos de la mano para poder generar los registros correctos para el éxito de tu cobranza americana, validando la información de soporte de los reclamos.',
  },
  {
    id: 'world-4',
    imgUrl: '/contract4.jpg',
    title: 'Plataforma GCDental de Gestión de Pacientes',
    description: 'Tendrás acceso a una plataforma con la mayor seguridad en datos e información de pacientes, agenda y alertas de cobranza, médicas y personalizadas.',
  },
  
];

export const startingFeatures = [
  'Incremento de ingresos',
  'Incremento de pacientes',
  'Crecimiento de la clínica en general',
  'Acompañamiento de nuestros expertos',
];

export const newFeatures = [
  {

    title: 'Investigaciones de los seguros dentales en menos de una hora',
  },
  {
    title: 'Envio de los reclamos dentro de las 24 horas una vez recibida la inforamcion completa',
  },
  {
    title: 'Claridad en el manejo de los seguros dentales',
  },
  {
    title: 'En caso de que un Seguro no pague / o el paciente no entregue el pago correspondiente, nosotros tampoco recibimos pago',
  },
  {
    title: 'Se podra observar en el sistema los cobros enviados y su estatus.',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: "mail",
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:contacto.lqservices@gmail.com",
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
