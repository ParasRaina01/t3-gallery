
import Link from "next/link";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";
const mockUrls = [
  "https://utfs.io/f/c95feef6-62a6-425e-8718-b8c0d08402b1-o5qo3k.jpeg",
  "https://utfs.io/f/c95feef6-62a6-425e-8718-b8c0d08402b1-o5qo3k.jpeg",
  "https://utfs.io/f/c95feef6-62a6-425e-8718-b8c0d08402b1-o5qo3k.jpeg",
  "https://utfs.io/f/c95feef6-62a6-425e-8718-b8c0d08402b1-o5qo3k.jpeg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))
export default async function HomePage() {
  const posts = await db.query.image.findMany();
  console.log(posts,"posts");
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ... mockImages, ...mockImages].map((image,index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
