# Real Estate News CMS

A Sanity-powered content management system for real estate news articles and local restaurant features. Built with TypeScript and modern web technologies.

## 🏗️ Features

### Content Management
- **News Articles**: Create and manage real estate news content
- **Local Eats**: Create and manage local restaurant features
- **Rich Text Editor**: Full-featured content editor with image support
- **Image Management**: Hotspot-enabled image cropping and optimization
- **Categories**: Predefined categories for easy content organization
- **Tags**: Flexible tagging system for additional classification
- **SEO Optimization**: Built-in SEO fields and metadata management

### Article Schema (News Article)
- **Title**: Article headline (max 100 characters)
- **Slug**: URL-friendly identifier (auto-generated from title)
- **Description**: Article summary (max 250 characters)
- **Content**: Rich text content with images and formatting
- **Main Image**: Primary article image with hotspot cropping
- **Published Date**: Publication timestamp
- **Author/Source**: Article author or source attribution
- **Source URL**: Link to original article (optional)
- **Featured**: Mark articles as featured for prominent display
- **Categories**: Select from predefined categories:
  - Market Analysis
  - Buyer Tips
  - Seller Tips
  - Investment
  - Trends
  - Lifestyle
  - Legal & Finance
  - Design
  - Security
  - Maintenance
  - Psychology
  - First time investors
  - Property management
  - Fixture upper homes
- **Tags**: Additional free-form tags for flexible classification

### Local Eats Schema
- **Title**: Restaurant headline (max 100 characters)
- **Slug**: URL-friendly identifier (auto-generated from title)
- **Description**: Restaurant summary (max 250 characters)
- **Content**: Rich text content with images and formatting
- **Main Image**: Primary image with hotspot cropping
- **Published Date**: Publication timestamp
- **Author/Source**: Author or source attribution
- **Restaurant's Website**: Official website (optional)
- **Yelp Link**: Yelp page (optional)
- **Instagram URL**: Instagram profile (optional)
- **Source URL**: Link to original article (optional)
- **Featured**: Mark as featured for prominent display
- **Categories**: Select from predefined categories:
  - Sonoma County
  - Napa Valley
  - San Francisco
  - Marin County
  - Culver City
  - Santa Monica
  - Malibu
- **Tags**: Additional free-form tags for flexible classification

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Phanx091/client-real-estate-news-sanity-cms.git
   cd client-real-estate-news-sanity-cms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open Sanity Studio**
   Navigate to `http://localhost:3333` in your browser

### Deployment

Deploy the Sanity Studio to make it accessible to content editors:

```bash
npm run deploy
```

This will create a public URL that can be shared with your team.

## 📁 Project Structure

```
real-estate-news/
├── schemaTypes/
│   ├── index.ts          # Schema registry
│   └── postTypes.ts      # News article and Local Eats schemas
├── static/               # Static assets
├── sanity.config.ts      # Sanity configuration
├── sanity.cli.ts         # CLI configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Content Management

### Creating Content

1. **Access the Studio**: Open the deployed Sanity Studio URL
2. **Create New Content**: Click "Create" → choose either "News Article" or "Local Eats"
3. **Fill Required Fields**:
   - Title (required)
   - Description (required, max 250 characters)
   - Main Image (required)
   - Published Date (required)
   - Author/Source (required)
   - Categories (select at least one)
   - For Local Eats: Restaurant's Website, Yelp Link, Instagram URL (all optional)
4. **Add Content**: Use the rich text editor for article or restaurant content
5. **Publish**: Save and publish your entry

### Image Guidelines

- **Primary Image**: 1200x630px recommended for optimal display
- **Hotspot Cropping**: Use hotspot feature to control image focus
- **File Formats**: JPG, PNG, WebP supported
- **File Size**: Keep under 10MB for optimal performance

### Categories

#### News Article Categories
- **Market Analysis**: Market trends, analysis, and insights
- **Buyer Tips**: Advice for homebuyers
- **Seller Tips**: Guidance for home sellers
- **Investment**: Real estate investment content
- **Trends**: Industry trends and predictions
- **Lifestyle**: Home lifestyle and design content
- **Legal & Finance**: Legal and financial aspects
- **Design**: Home design and architecture
- **Security**: Home security and safety
- **Maintenance**: Home maintenance tips
- **Psychology**: Real estate psychology and decision-making
- **First time investors**: Tips for new investors
- **Property management**: Property management advice
- **Fixture upper homes**: Information on fixer-upper properties

#### Local Eats Categories
- **Sonoma County**
- **Napa Valley**
- **San Francisco**
- **Marin County**
- **Culver City**
- **Santa Monica**
- **Malibu**

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Start production server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Sanity's CDN
- `npm run deploy-graphql` - Deploy GraphQL API

### Schema Modifications

To modify the content schema:

1. Edit `schemaTypes/postTypes.ts`
2. Add new fields or modify existing ones
3. Restart the development server
4. Test changes in the Studio

### Adding New Content Types

1. Create a new schema file in `schemaTypes/`
2. Export the schema definition
3. Import and add to `schemaTypes/index.ts`
4. Restart the development server

## 🌐 API Integration

### Frontend Integration

Use Sanity's client libraries to fetch content:

```typescript
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
})

// Fetch all articles
const articles = await client.fetch(`
  *[_type == "newsArticle"] | order(publishedAt desc)
`)

// Fetch articles by category
const marketArticles = await client.fetch(`
  *[_type == "newsArticle" && "Market Analysis" in categories] | order(publishedAt desc)
`)

// Fetch all local eats
const eats = await client.fetch(`
  *[_type == "localEats"] | order(publishedAt desc)
`)
```

### Image URLs

Generate optimized image URLs:

```typescript
import { urlFor } from './lib/sanity'

const imageUrl = urlFor(article.mainImage)
  .width(1200)
  .height(630)
  .fit('crop')
  .crop('center')
  .url()
```

## 📊 Content Analytics

Sanity provides built-in analytics for:
- Content performance
- Editor activity
- API usage
- Image optimization

Access analytics through the Sanity dashboard.

## 🔒 Security

- **Authentication**: Sanity handles user authentication
- **Permissions**: Role-based access control
- **API Security**: Secure API endpoints with CORS protection
- **Content Validation**: Built-in validation rules

## 📞 Support

For technical support or questions:
- Check Sanity documentation: https://www.sanity.io/docs
- Review project issues on GitHub
- Contact the development team

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

**Jason Phan**
- **GitHub**: [@Phanx091](https://github.com/Phanx091)
- **Email**: [Jason.jayphan@gmail.com]

---

**Built with ❤️ using Sanity CMS**


