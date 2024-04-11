import { ServiceCard } from "@/components/service-card";
import { services } from "../commons/services";
import { Services } from "@/components/navigation-services";
import { feedbacks } from "../commons/feedback";
import { FeedbackCard } from "@/components/feedback-card";
import { Carrousel } from "@/components/carrousel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-20 scroll-smooth ">
      <div className="h-96 w-full bg-black">
        <h1 className="text-4xl text-blue-600 flex items-center justify-center">
          HERO IMAGE/ CHAMADA PRO CONSUMIDOR E BOTTAO DE CONTATO
        </h1>
      </div>
      <Carrousel />
      <section>
        <h1 className="text-4xl py-10 text-center">Nossos serviços</h1>
        <div className="grid grid-cols-3 items-center justify-center ">
          {services.map((service) => {
            return <ServiceCard key={service.id} {...service} />;
          })}
        </div>
      </section>
      <section id="depoimentos">
        <h1 className="text-4xl py-10 text-center">Depoimentos</h1>
        <div className="grid grid-cols-3 items-center justify-center">
          {feedbacks.map((service) => {
            return <FeedbackCard key={service.id} {...service} />;
          })}
        </div>
      </section>
  );
}
