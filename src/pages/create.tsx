import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyCurrentProjects, MyPastProjects } from '../data/lifeApi';

const seoTitle = 'Create';
const seoDescription = "Things I've made trying to put my dent in the universe.";

export default function Create() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/create`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
        title=""
        intro="A list of projects I've worked on, I'm working on and I will work on."
      >
        <h2 className="text-2xl font-bold tracking-tight">Now</h2>
        <p className="mt-2 text-base">Projects I currently work on.</p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyCurrentProjects.map((project, idx) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>

        <h2 className="mt-24 text-2xl font-bold tracking-tight">Past</h2>
        <p className="mt-2 text-base">Projects I worked on.</p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyPastProjects.map((project, idx) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ProjectCard key={project.title} project={project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
