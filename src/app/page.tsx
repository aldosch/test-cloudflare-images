import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-96 m-4">
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="sm:p-6 flex flex-col gap-4 px-4 py-5">
          <h1 className="text-2xl font-bold">Test Cloudflare Images</h1>
          <p>
            Investigating potential bugs with Cloudflare Images and different
            Next.js versions
          </p>
          <Link
            className="hover:underline hover:text-purple-600 text-purple-500"
            href={"https://github.com/aldosch/test-cloudflare-images"}
            target="_blank"
          >
            Git repo
          </Link>
        </div>
      </div>
    </main>
  );
}
