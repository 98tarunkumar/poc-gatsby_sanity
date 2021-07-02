export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
      {
        name: "name",
        title: "HeaderName",
        type: "string",
      },
    {
      name: "logoImage",
      title: "LogoImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name:'navlinks',
      title:'Navlinks',
      type: 'array',
      of:[{type: 'string'}]
    }
    
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
