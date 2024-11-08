import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "Barber Shop",
    "short_name": "Barber Shop",
    "description": "Barber Shop",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#322659",
    "theme_color": "#322659",
    "icons": [
        {
            "src": "/images/icon.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/images/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
}