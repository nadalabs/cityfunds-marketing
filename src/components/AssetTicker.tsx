import { Caption, SecondaryText } from '@elements/Typography';
import Image from 'next/image';

interface BannerProps {
  totalAssets: number;
  appreciation: number;
}

export default function AssetTicker({
  totalAssets,
  appreciation,
}: BannerProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(152, 152, 152, 0.35)',
          borderRadius: '10px',
          padding: '4px 8px',
          marginRight: '8px',
        }}
      >
        <SecondaryText
          style={{
            color: 'white',
            fontWeight: 600,
            margin: '0 4px 0 0',
          }}
        >
          {appreciation}%
        </SecondaryText>
        <Image
          width={18}
          height={18}
          alt={'Arrow Up'}
          src={'/icons/arrow.svg'}
        />
      </div>
      <Caption style={{ color: 'white' }}>{totalAssets} Assets</Caption>
    </div>
  );
}
