export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string",
    },

    {
      name: "mastery",
      title: "Mastery",
      type: "string",
      description: "Mastery of champion from 1 to 7",
      validation: (Rule) => Rule.min(1).max(7),
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      Option: {
        hotspot: true,
      }
    },

  ], 
}