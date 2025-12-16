import Package from '@root/package.json';

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#000000',
    description: Package.description,
    display: 'standalone',
    icons: [
      {
        src: '/app_icon.png',
        sizes: '950x716',
        type: 'image/png',
      },
    ],
    name: Package.name,
    short_name: Package.name,
    start_url: '/',
    theme_color: '#000000',
  };
}
