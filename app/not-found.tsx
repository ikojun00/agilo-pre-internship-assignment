import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="my-10 h-full grid max-w-sm m-auto p-8 sm:max-w-6xl sm:grid-cols-2 sm:gap-8 lg:gap-x-20">
      <div className="flex flex-col justify-end">
        <h1 className="text-4xl font-black lg:text-5xl">404</h1>
        <h3 className="text-2xl font-black lg:text-3xl">Page Not Found</h3>
      </div>
      <Image
        src="/not-found.svg"
        width={600}
        height={600}
        alt="not found picture"
        className="w-full max-w-md m-auto sm:max-w-xl sm:row-start-1 sm:col-start-1 sm:row-end-3 sm:col-end-2"
      />

      <div className="grid gap-8 place-content-baseline sm:max-w-sm">
        <p>
          Sorry, the page you are looking for cannot be found. Please go back to
          homepage!
        </p>
        <Link
          href="/"
          className="flex justify-center p-4 rounded-md text-white bg-green-600 text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-green-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
