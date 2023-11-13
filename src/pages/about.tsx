import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

import AvatarImage from '../../public/assets/blog/authors/yumao.jpeg';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { PageTitle } from '../components/PageTitle';
import { Quote } from '../components/Quote';
import { Section } from '../components/Section';
import { AboutExtended } from '../data/lifeApi';

const seoTitle = `About`;
const seoDescription = `A few words about me.`;

export default function AboutMe() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AvatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Yumao.</PageTitle>
            <div className="mt-6 text-base">{AboutExtended}</div>
            <Section>
              <Section.Title as="h2"></Section.Title>
              <Section.Content>
                <div className="mt-8">
                  <Quote quote={`console.log('hello world')`} author={''} />
                </div>
              </Section.Content>
            </Section>
          </div>
        </div>
      </Container>
    </>
  );
}
