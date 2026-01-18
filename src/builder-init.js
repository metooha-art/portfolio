import { builder } from '@builder.io/react';

// Use the public Builder API key stored in env
// Make sure REACT_APP_BUILDER_API_KEY is set in Builder's Environment Variables
const key = process.env.REACT_APP_BUILDER_API_KEY || 'YOUR_BUILDER_PUBLIC_API_KEY_HERE';
builder.init(key);
