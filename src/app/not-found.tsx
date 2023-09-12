import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-[10rem] mb-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-8 font-bold">404: Page not found</h1>
        <p>We couldn't find the requested resource. Please make sure that the path of the resource you are looking for is correct or return to the homepage.</p>
      </div>
    </div>
  );
}
