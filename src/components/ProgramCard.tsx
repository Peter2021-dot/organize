// utils/types.ts
export interface programsProps {
  title: string;
  description: string;
  image: string; // or StaticImageData if using static imports
}

import Image from "next/image";
import { programsProps } from "../utils/types";

const ProgramCard = ({ title, description, image }: programsProps) => (
  <div className="text-center">
    <Image
      src={image}
      alt={title}
      width={300}
      height={300}
      className="w-64 h-64 object-cover rounded-full mx-auto"
    />
    <div className="p-4 text-black">
      <h3 className="text-xl font-bold mb-2 ">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ProgramCard;
