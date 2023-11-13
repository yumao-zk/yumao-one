import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Resume } from '../components/Resume';
import { NotePreview } from '../components/notes/NotePreview';
import { About, Name } from '../data/lifeApi';
import { Note, notesApi } from '../lib/notesApi';

const seoTitle = 'Yumao';
const seoDescription =
  'I am a front-end developer, focusing on Javascript / Graphics, and the new techs.';

type Props = {
  latestNotes: Note[];
};

export default function Home({ latestNotes }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="mt-6 max-w-2xl text-base">{About}</p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {latestNotes.map((blogPost) => (
              <NotePreview key={blogPost.slug} note={blogPost} dense />
            ))}
          </div>
          <div className="lg:ml-auto space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

const NEWEST_POSTS_TO_DISPLAY = 5;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const latestNotes = await notesApi.getNotes('desc', NEWEST_POSTS_TO_DISPLAY);

  return {
    props: { latestNotes },
    revalidate: 10,
  };
};
