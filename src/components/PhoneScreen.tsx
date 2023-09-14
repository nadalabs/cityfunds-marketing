import Image from 'next/image';

interface PhoneScreenProps {
  imageUrl: string;
}

export default function PhoneScreen({ imageUrl }: PhoneScreenProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '35%',
        position: 'relative',
        left: '100px',
      }}
    >
      <div
        style={{
          height: '400px',
          minWidth: '400px',
          backgroundColor: '#48DC95',
          borderRadius: '120px',
          zIndex: -1,
          position: 'absolute',
          top: '150px',
          left: '-70px',
        }}
      />

      <Image width={300} height={500} alt={'Phone Screen'} src={imageUrl} />
    </div>
  );
}
