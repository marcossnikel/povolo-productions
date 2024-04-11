import Image from "next/image";

type ServiceCardProps = {
  title: string;
  image_url: string;
  description: string;
};

export function ServiceCard({
  title,
  image_url,
  description,
}: ServiceCardProps) {
  return (
    <div>
      <span>{title}</span>
      <Image src={image_url} width={300} height={300} alt="" />
      <p>{description}</p>
    </div>
  );
}
