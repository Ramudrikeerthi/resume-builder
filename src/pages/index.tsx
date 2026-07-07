import Head from 'next/head';
import BuilderLayout from '@/modules/builder/BuilderLayout';
import { ResumeProvider } from '@/context/ResumeContext';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Resume Builder</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <ResumeProvider>
        <BuilderLayout />
      </ResumeProvider>
    </div>
  );
}
