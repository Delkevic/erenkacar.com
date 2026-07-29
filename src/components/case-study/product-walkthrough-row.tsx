import { ScreenshotFigure } from "@/components/ui/screenshot-figure";
import type { GuitarSenseImage } from "@/data/guitarsense-images";

type ProductWalkthroughRowProps = {
  heading: string;
  text: string;
  image: GuitarSenseImage;
  imagePosition: "left" | "right";
};

export function ProductWalkthroughRow({
  heading,
  text,
  image,
  imagePosition,
}: ProductWalkthroughRowProps) {
  return (
    <article
      className={`walkthrough-row walkthrough-row--image-${imagePosition}`}
    >
      <div className="walkthrough-row__copy">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <ScreenshotFigure
        image={image}
        className="walkthrough-row__figure"
        sizes="(max-width: 780px) calc(100vw - 1.5rem), 38rem"
      />
    </article>
  );
}
