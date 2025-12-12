import Link from 'next/link';
import InstagramEmbed from '../components/InstagramEmbed';
import PodcastPlayer from '../components/PodcastPlayer';

export default function Home() {
  // Placeholder data; CMS will populate real items
  const sampleReel = 'https://www.instagram.com/reel/REEL_ID/';
  const samplePodcastSrc = 'https://anchor.fm/s/your-anchor-podcast/episode.mp3';

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Reels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InstagramEmbed url={sampleReel} />
          <InstagramEmbed url={sampleReel} />
          <InstagramEmbed url={sampleReel} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Podcast</h2>
        <PodcastPlayer src={samplePodcastSrc} title="Sample Episode — Global Mindset" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <ul>
          <li>
            <Link href="/posts/example-post">An analysis of geopolitical trends</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Weekly Report</h2>
        <p>Short summary of the week's developments in international relations, economics and geopolitics.</p>
      </section>
    </div>
  );
}
