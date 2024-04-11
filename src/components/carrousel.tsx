import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/commons/services";
import { ServiceCard } from "./service-card";
export function Carrousel() {
  return (
    <Carousel>
      <CarouselContent>
        {services.map((service) => {
          return (
            <CarouselItem key={service.id}>
              <ServiceCard {...service} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
