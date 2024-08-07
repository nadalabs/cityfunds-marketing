import { FlexWrapper } from '@elements/Containers';
import Image from 'next/image';
import { ReactNode } from 'react';
import Drawer from 'react-modern-drawer';

interface DefaultDrawerProps {
  showDrawer: boolean;
  onBack?: (() => void) | null;
  onClose?: () => void;
  content: ReactNode;
}

export default function DefaultDrawer({
  showDrawer,
  onBack,
  onClose,
  content,
}: DefaultDrawerProps) {
  return (
    <Drawer
      open={showDrawer}
      onClose={() => (onClose ? onClose : {})}
      direction="bottom"
      lockBackgroundScroll
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        height: 'inherit',
        borderTopRightRadius: '1.5rem',
        borderTopLeftRadius: '1.5rem',
        padding: '1.5rem',
        maxHeight: '95vh',
        overflowY: 'scroll',
      }}
    >
      <FlexWrapper
        style={{ justifyContent: onBack ? 'space-between' : 'flex-end' }}
      >
        {onBack && (
          <Image
            src="/icons/arrow-left.svg"
            alt="Menu"
            onClick={onBack}
            height={24}
            width={24}
          />
        )}
        {onClose && (
          <Image
            src="/icons/cancel.svg"
            alt="Menu"
            onClick={onClose}
            height={16}
            width={16}
          />
        )}
      </FlexWrapper>
      {content}
    </Drawer>
  );
}
