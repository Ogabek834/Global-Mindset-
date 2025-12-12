import { useRouter } from 'next/router';

export default function PostPage() {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">Sample Post: {slug}</h1>
      <p className="text-gray-600 mb-6">Author · Date</p>
      <div className="prose">
        <p>This is a placeholder post. Real posts will be created via the CMS (TinaCMS) and support English and Uzbek translations.</p>
      </div>
    </article>
  );
}
