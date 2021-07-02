export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type:'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'availability',
            title: 'Availability',
            type:'number',
        }
    ],
    preview:{
        select:{
            title: 'name',
            media:'image',
            availability: 'availability',
        }
    }
}