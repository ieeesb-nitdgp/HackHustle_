import type { MetadataRoute } from 'next'
import ieeeLogo from '@/public/ieeesb_logo_theme.svg'
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'HackHustle | IEEE 24-Hour Hackathon',
        short_name: 'HackHustle',
        description: 'Code. Compete. Conquer. The ultimate 24-hour innovation marathon.',
        start_url: '/',
        display: 'standalone',
        background_color: '#05010a',
        theme_color: '#05010a',
        icons: [
            {
                src: ieeeLogo,
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
