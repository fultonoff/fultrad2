import React from "react";
import Link from 'next/link'

function LaunchBtn() {
  return (
    <div className="relative group">
      <div className="hidden md:flex absolute bg-primary -inset-0.5 blur-lg group-hover:-inset-2 duration-300"></div>
      <Link
        href="/"
        className="gradOrange text-[14px] relative py-3 px-6 rounded-[12px] text-White font-semibold tracking-wide"
      >
        Launch App
      </Link>
    </div>
  );
}

export default LaunchBtn;
