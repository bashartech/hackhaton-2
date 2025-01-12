import { defineType } from "sanity"
export default defineType ({
    name: 'productList',
  title: 'ProductList',
  type: 'document',
  fields: [
    {
      name: 'Id',
      title: 'Id',
      type: 'number',
      
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price before discount'
    },
    {
      name:'rating',
      type:'number',
      title:'Rating',
      description:'Rating of the product'
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings'
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add tags like "new arrival", "bestseller", etc.'
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Add sizes like S , M , L , XL , XXL'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true // Enables cropping and focal point selection
      }
    }
 
  ]
})