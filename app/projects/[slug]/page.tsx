import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { rookmelderDiscoMeta } from '@/projects/rookmelder-disco';

// Dynamic imports for project components
const projectComponents: Record<string, any> = {
  'rookmelder-disco': dynamic(() => import('@/projects/rookmelder-disco')),
};

// Metadata map for projects
const projectMetaMap: Record<string, any> = {
  'rookmelder-disco': rookmelderDiscoMeta,
};

// Route params interface
interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for static export
export function generateStaticParams() {
  return Object.keys(projectMetaMap).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = projectMetaMap[params.slug];

  if (!meta) {
    notFound();
  }

  return {
    title: `${meta.title} | Rik de Wit Audio`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Rik de Wit Audio`,
      description: meta.description,
      images: meta.thumbnail ? [{ url: meta.thumbnail }] : [],
      url: `/projects/${params.slug}`,
    },
  };
}

// Default page component
export default async function ProjectPage({ params }: Props) {
  const Component = projectComponents[params.slug];
  const meta = projectMetaMap[params.slug];

  if (!Component || !meta) {
    notFound();
  }

  return <Component />;
}
