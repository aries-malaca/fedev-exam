"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Image, { StaticImageData } from "next/image";

export default function ClickableImage({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  const myRef = useRef<HTMLDivElement>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => setModalVisible(true);
  const handleClose = () => setModalVisible(false);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!myRef?.current?.contains(event.target as Node)) {
      setModalVisible(false);
    }
  };

  return (
    <>
      {modalVisible && (
        <div
          style={{ backgroundColor: "#ffffff89" }}
          className={`fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none`}
          tabIndex={-1}
          onClick={handleOverlayClick}
        >
          <div
            ref={myRef}
            className={`pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] transform-none opacity-100`}
          >
            <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
                <h5 className="text-xl font-medium leading-normal text-surface dark:text-white"></h5>
                <button
                  onClick={handleClose}
                  type="button"
                  className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  aria-label="Close"
                >
                  <span className="[&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="relative flex-auto p-4">
                <div className="b relative h-max w-full overflow-hidden rounded-lg">
                  <Image src={src} alt={alt} className="w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className="cursor-pointer"
        onClick={handleClick}
      />
    </>
  );
}
