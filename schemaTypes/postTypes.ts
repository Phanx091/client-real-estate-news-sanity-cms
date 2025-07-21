export const newsArticle = {
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(250),
      description: 'Article summary (max 250 characters)'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Main image for the article (recommended: 1200x630px)'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author/Source',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Link to the original article (optional)'
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark this as a featured article to appear prominently'
    },
    {
      name: 'featuredPosition',
      title: 'Featured Position',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(4),
      description: 'Position for featured display (1-4, only 4 items can be featured)',
      hidden: ({document}: any) => !document?.featured
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'Market Analysis',
              'Buyer Tips',
              'Seller Tips',
              'Investment',
              'Trends',
              'Lifestyle',
              'Legal & Finance',
              'Design',
              'Security',
              'Maintenance',
              'Psychology',
              'First time investors',
              'Property management',
              'Fixture upper homes'
            ]
          }
        }
      ],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      description: 'Additional free-form tags (optional)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

export const localEats = {
  name: 'localEats',
  title: 'Local Eats',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(250),
      description: 'Article summary (max 250 characters)'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Main image for the article (recommended: 1200x630px)'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author/Source',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'restaurantWebsite',
      title: "Restaurant's Website",
      type: 'url',
      description: 'Official website of the restaurant (optional)'
    },
    {
      name: 'yelpLink',
      title: 'Yelp Link',
      type: 'url',
      description: 'Yelp page for the restaurant (optional)'
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      description: 'Instagram profile for the restaurant (optional)'
    },
    {
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Link to the original article (optional)'
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark this as a featured article to appear prominently'
    },
    {
      name: 'featuredPosition',
      title: 'Featured Position',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(4),
      description: 'Position for featured display (1-4, only 4 items can be featured)',
      hidden: ({document}: any) => !document?.featured
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
      description: 'Price range (1-5). 1 indicates $ (least expensive), 5 indicates $$$$$ (most expensive).'
    },
    {
      name: 'cuisineType',
      title: 'Cuisine Type',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Type of cuisine or dining experience (e.g., Fine Dining, Casual, Fast Food, Cafe, etc.)'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'Sonoma County',
              'Napa Valley',
              'San Francisco',
              'Marin County',
              'Culver City',
              'Santa Monica',
              'Malibu'
            ]
          }
        }
      ],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      description: 'Additional free-form tags (optional)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
} 