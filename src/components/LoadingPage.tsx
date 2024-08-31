"use client";

import Loading from "@/app/loading";

function LoadingPage() {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col">
      <div className="pb-4">
        <h1>Loading...</h1>
      </div>
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    </div>
  );
}

export default LoadingPage;
