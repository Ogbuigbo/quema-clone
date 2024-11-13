import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return [
        {
            url: `${baseUrl}/about`,
            lastModified: '2024-11-13', // Use specific dates if possible
        },
        {
            url: `${baseUrl}/services`,
            lastModified: '2024-11-13', // Update dates as needed
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: '2024-11-13',
        }
    ];
}
