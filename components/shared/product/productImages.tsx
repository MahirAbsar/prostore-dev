"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        width={1000}
        height={1000}
        alt="Product Image"
        className="min-h-75 object-cover object-center"
      />
      <div className="flex gap-2">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "border cursor-pointer hover:border-orange-500",
                current === index && "border-orange-500",
              )}
            >
              <Image
                src={image}
                width={100}
                height={100}
                alt={`Product Image ${image}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
