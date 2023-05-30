import { PrimaryText } from '@elements/Typography';

interface BannerProps {
  primaryText: string;
}

export default function Banner({ primaryText }: BannerProps) {
  return (
    <div>
      <PrimaryText>
        Limited Time Investor Perk: Invest $1,000 & get $100
      </PrimaryText>
    </div>
  );
}
