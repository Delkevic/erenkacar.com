import Image from "next/image";
import type { ScreenshotImage } from "@/types/screenshot";

type ScreenshotFigureProps = {
  image: ScreenshotImage;
  sizes: string;
  className?: string;
  eager?: boolean;
};

export function ScreenshotFigure({
  image,
  sizes,
  className,
  eager = false,
}: ScreenshotFigureProps) {
  const figureClassName = ["screenshot-figure", className]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={figureClassName}>
      <div className={`screenshot-frame screenshot-frame--${image.frame}`}>
        <Image
          className="screenshot-image"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
        />
      </div>
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
