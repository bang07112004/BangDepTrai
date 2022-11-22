export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
   {
    name: 'title',
    title:'title',
    description: 'title of project',
    type: 'string',
   },
   {
    name: 'image',
    title:'Image',
    type: 'image',
    Option:{hotspot:true,}
   },
   {
    name:'summary',
    title: 'Summary',
    type: 'text',
   },
   {
    name: "technologies",
    title: "Technologies",
    type: "array",
    of:[{type:'reference' , to:{type:'skill'}}]
  },
   {
    name: "LinkToBuild",
    title: "LinkToBuild",
    type: "url",
  },
  ],

  
}
