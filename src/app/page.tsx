
import Link from "next/link";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";
export default async function HomePage() {
  const images = await db.query?.images?.findMany();
  console.log(images,"images");
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
