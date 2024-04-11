import Image from "next/image";

type ServiceCardProps = {
  title: string;
  image_url: string;
  description: string;
};

export function FeedbackCard({
  title,
  image_url,
  description,
}: ServiceCardProps) {
  return (
    <div>
      <span>{title}</span>
      <Image src={image_url} width={250} height={250} alt="" />
      <p>{description}</p>
    </div>
  );
}
