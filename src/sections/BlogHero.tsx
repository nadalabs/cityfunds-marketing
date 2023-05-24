import Header from '@components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../../components/date';

export default function BlogHero({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <Header />
      <Image width={145} height={40} alt={title} src={coverImage} />
      <Link href={`/posts/${slug}`} className="hover:underline">
        {title}
      </Link>
      <Date dateString={date} />
    </section>
  );
}
