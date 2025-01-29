import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
  product,
  translate,
  isActive,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  isActive: boolean;
  className: string;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={`group/product h-96 w-[30rem] relative flex-shrink-0 transition-transform duration-500 ${
        isActive
          ? "scale-110 shadow-lg px-[6.5px] py-[4px] rounded-xl"
          : "scale-90"
      }`}
    >
      <Link
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="500"
          width="500"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
