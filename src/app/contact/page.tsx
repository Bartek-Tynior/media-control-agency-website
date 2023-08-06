"use client";

import { InlineWidget } from "react-calendly";

const page = () => {
  return (
    <div className="min-h-screen pt-[6rem] gap-4 grid grid-cols-12 ">
      <div className="col-span-6">
        <h1 className="text-5xl mb-5 font-bold">Book your meeting</h1>
        <h2>Book a meeting with the founder and discuss yoor project and possible approaches!</h2>
      </div>
      <div className="col-span-6">
        <InlineWidget url="https://calendly.com/btynior" />
      </div>
    </div>
  );
};

export default page;
