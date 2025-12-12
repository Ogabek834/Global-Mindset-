// Minimal TinaCMS config placeholder — full schema to be added during integration
import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin'
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads'
    }
  },
  schema: {
    collections: [
      {
        name: 'posts',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          { type: 'string', name: 'title', label: 'Title' },
          { type: 'string', name: 'author', label: 'Author' },
          { type: 'datetime', name: 'date', label: 'Date' },
          { type: 'rich-text', name: 'body', label: 'Body' },
          { type: 'string', name: 'locale', label: 'Locale' }
        ]
      }
    ]
  }
});
