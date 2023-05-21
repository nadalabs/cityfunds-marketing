import Image from 'next/image';
import { Overline } from '../elements/Typography';

export default function FeaturedPublicity({}) {
  const FEATURED = [
    { name: 'Forbes', imageUrl: '/icons/forbes.svg', link: '' },
    { name: 'The Motley Fool', imageUrl: '/icons/motley-fool.svg', link: '' },
    { name: 'TechCrunch', imageUrl: '/icons/techcrunch.svg', link: '' },
    { name: 'Yahoo Finance', imageUrl: '/icons/yahoo-finance.svg', link: '' },
  ];

  return (
    <div style={{ padding: '76px 196px' }}>
      <Overline>Featured In</Overline>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {FEATURED.map(({ name, imageUrl, link }) => (
          <Image
            key={name}
            width={145}
            height={40}
            alt={name}
            src={imageUrl}
            sizes="100vw"
            // priority={priority}
          />
        ))}
      </div>
    </div>
  );
}
