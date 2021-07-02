export default{
    name:'footer',
    title:'Footer',
    type:'document',
    fields:[
        {
            name: 'name',
            title:'footer',
            type:'string',
        },
        {
            name: 'sideImage',
            title:'SideImage',
            type:'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'row1',
            title:'Row1',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name: 'row2',
            title:'Row2',
            type:'array',
            of:[{type:'string'}]
        }    
    ],
    preview:{
        select:{
            title:'name'
        }
    }
}