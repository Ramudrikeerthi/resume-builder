// src/pages/builder.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from '@/modules/builder/BuilderLayout';
import { ResumeProvider } from '@/context/ResumeContext';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resume: Builder</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume1-icon.png" />
      </Head>

      <ResumeProvider>
        <BuilderLayout />
      </ResumeProvider>
    </div>
  );
};

export default BuilderPage;
