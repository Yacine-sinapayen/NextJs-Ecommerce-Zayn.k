export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image du produit",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Nom du produit",
      type: "string",
    },
    {
      name: "slug",
      title: "Identifiant du produit",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Prix",
      type: "number",
    },
    {
      name: "description",
      title: "Phrase d'accroche",
      type: "string",
    },
    {
      name: "details",
      title: "Description détaillée",
      type: "string",
    },
    {
      name: "place",
      title: "Lieu",
      type: "string",
    },
    {
      name: 'classement',
      title: 'Classement du produit',
      type: 'number'
    },
    {
      name: 'firstDate',
      title: 'Première date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      } 
    },
    {
      name: "staffOne",
      title: "Effectif de la première date",
      type: "string",
    },
    {
      name: 'secondDate',
      title: 'Seconde date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      } 
    },
    {
      name: "staffTwo",
      title: "Effectif de la seconde date",
      type: "string",
    },
  ],
};
