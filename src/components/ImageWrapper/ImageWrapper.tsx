import React, { useState } from "react";
import Image from "next/image";

const ImageWrapper = ({ title, image }: IImageWrapper) => {
  "uploads/2021-04-01/skillbox.png";
  const [src, setSrc] = useState(image);

  return (
    <Image
      width={70}
      height={70}
      alt={title}
      src={process.env.NEXT_PUBLIC_DOMAIN + src}
      onError={() => setSrc("/uploads/2021-04-01/skillbox.png")}
    />
  );
};

export default ImageWrapper;

interface IImageWrapper {
  title: string;
  image: string;
}
