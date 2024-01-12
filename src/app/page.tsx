import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 m-4">
      <div className="max-w-96 overflow-hidden bg-white rounded-lg shadow">
        <div className="sm:p-6 flex flex-col gap-4 px-4 py-5">
          <h1 className="text-2xl font-bold">Test Cloudflare Images</h1>
          <p>
            Investigating potential bugs with Cloudflare Images and different
            Next.js versions
          </p>
          <code>Next.js 14.0.4</code>
          <Link
            className="hover:underline hover:text-purple-600 text-purple-500"
            href={"https://github.com/aldosch/test-cloudflare-images"}
            target="_blank"
          >
            Git repo
          </Link>
        </div>
      </div>
      <Image
        src={
          "https://imagedelivery.net/vBXP_A7zoCgNUriwfbwmKQ/1e7cecd5-8b92-4282-cf43-342fbcf0b700/public"
        }
        alt={"Photo by Nicholas Doherty via Unsplash"}
        width={1366}
        height={768}
        className="rounded-lg shadow"
      />
    </main>
  );
}
