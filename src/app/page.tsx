import { url } from "inspector";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ebaf1de1-2f72-4427-aa16-62cea90550e0-spo4bu.jpg",
  "https://utfs.io/f/1338d21d-1fc3-4184-a972-8c1cfa0497ec-k00a1n.O.G.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))



export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
