const REPO_OWNER = 'gdgoc-usc';
const REPO_NAME = 'gdgoc-website-gallery';

export const fetchEventImages = async (
  event_slug: string
): Promise<string[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${event_slug}`
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data
      .filter((file: any) => /\.(webp|jpg|jpeg|png)$/i.test(file.name))
      .map((file: any, index: number) => {
        const originalUrl = `https://cdn.jsdelivr.net/gh/gdgoc-usc/gdgoc-website-gallery@master/${event_slug}/${file.name}`;
        const optimizedUrl = `https://res.cloudinary.com/your-cloud-name/image/fetch/w_800,f_auto,q_auto/${originalUrl}`;

        return {
          id: index,
          img: optimizedUrl,
          height: 400 + (index % 4) * 150,
          url: '#',
        };
      });
  } catch (error) {
    console.error('Failed to fetch images: ', error);
    return [];
  }
};
