import Avatar from '../../components/avatar';
import Date from '../../components/date';
import CoverImage from '../../components/cover-image';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@components/Header';

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
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
