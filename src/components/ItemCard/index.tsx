"use client";

import Image, { StaticImageData } from "next/image";
import React, { MouseEvent } from "react";

const READ_MORE = "Read More";

const ItemCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    console.log(event.target);
    event.preventDefault();
  };

  return (
    <div className="flex-grow basis-0 max-w-96">
      <Image
        src={image}
        alt={title}
        className="border-b-4 border-red-800 mb-3 md:mb-6"
      />
      <h4 className="text-xl mb-2 md:mb-4">{title}</h4>
      <p className="mb-4 md:mb-8 text-slate-300 font-light">{description}</p>
      <a
        href="#"
        className="uppercase pb-2 border-b-2 border-red-800 inline-block"
        onClick={(e) => handleClick(e)}
      >
        {READ_MORE}
      </a>
    </div>
  );
};

export default ItemCard;
