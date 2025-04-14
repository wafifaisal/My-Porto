export type CardItem = {
  href?: string;
  title: string;
  image: string;
  width: number;
  gradient: {
    default: string;
    hover: string;
  };
  description: string;
};
