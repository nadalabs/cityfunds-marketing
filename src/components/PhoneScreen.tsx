import Image from 'next/image';

export default function PhoneScreen({}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '35%', position: 'relative', left: '100px' }}>
      <div
        style={{
          height: '534px',
          minWidth: '534px',
          backgroundColor: '#48DC95',
          borderRadius: '120px',
          zIndex: -1,
          position: 'absolute', top: '250px', left: '-100px'
        }}
      />

      <div style={{}}>
        <Image
          width={350}
          height={700}
          alt={'Phone Screen'}
          src={'/images/phone-screen.png'}
        />
      </div>
    </div>
  );
}
