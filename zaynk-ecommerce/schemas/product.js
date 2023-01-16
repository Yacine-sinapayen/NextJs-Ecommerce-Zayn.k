export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Titre de la formation",
      type: "string",
    },
    {
      name: "slug",
      title: "identifiant unique du produit",
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
      title: "Phrase d'accroche homepage",
      type: "string",
    },
    {
      name: "detailsPartOne",
      title: "Partie 1 détails : titre",
      type: "string",
    },
    {
      name: "detailsPartOneParaOne",
      title: "Partie 1 détails : Paragraphe 1",
      type: "string",
    },
    {
      name: "detailsPartOneParaTwo",
      title: "Partie 1 détails : Paragraphe 2",
      type: "string",
    },
    {
      name: "detailsPartOneParaThree",
      title: "Partie 1 détails : Paragraphe 3",
      type: "string",
    },
    {
      name: "detailsPartOneParaFour",
      title: "Partie 1 détails : Paragraphe 4",
      type: "string",
    },
    {
      name: "detailsPartTwo",
      title: "Partie 2 détails : titre",
      type: "string",
    },
    {
      name: "detailsPartTwoParaOne",
      title: "Partie 2 détails : Paragraphe 1",
      type: "string",
    },
    {
      name: "detailsPartTwoParaTwo",
      title: "Partie 2 détails : Paragraphe 2",
      type: "string",
    },
    {
      name: "detailsPartTwoParaThree",
      title: "Partie 2 détails : Paragraphe 3",
      type: "string",
    },
    {
      name: "detailsPartTwoParaFour",
      title: "Partie 2 détails : Paragraphe 4",
      type: "string",
    },
    // {
    //   name: 'details',
    //   title: 'Détails du produit', 
    //   type: 'array', 
    //   of: [{type: 'block'}]
    // },
    {
      name: "place",
      title: "Lieu de la formation",
      type: "string",
    },
    {
      name: 'classement',
      title: 'Classement du produit sur la homepage',
      type: 'number'
    },
    {
      name: "firstDate",
      title: "Première date",
      type: "string",
    },
    // {
    //   name: 'firstDate',
    //   title: 'Première date',
    //   type: 'date',
    //   options: {
    //     dateFormat: 'DD-MM-YYYY',
    //     calendarTodayLabel: 'Today'
    //   } 
    // },
    {
      name: "staffOne",
      title: "Effectif de la première date",
      type: "string",
    },
    // {
    //   name: 'secondDate',
    //   title: 'Seconde date',
    //   type: 'date',
    //   options: {
    //     dateFormat: 'DD-MM-YYYY',
    //     calendarTodayLabel: 'Today'
    //   } 
    // },
    {
      name: "secondDate",
      title: "Seconde date",
      type: "string",
    },
    {
      name: "staffTwo",
      title: "Effectif de la seconde date",
      type: "string",
    },
  ],
};
