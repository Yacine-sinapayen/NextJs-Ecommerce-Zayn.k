export default {
    name: "aboutMe",
    title: "AboutMe",
    type: "document",
    fields: [
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "aboutMeTitle",
        title: "aboutMeTitle",
        type: "string",
      },
      {
        name: "aboutMeDesc",
        title: "aboutMeDesc",
        type: "string",
      },
    ],
  };
  