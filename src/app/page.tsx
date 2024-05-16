import Link from "next/link";
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
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
