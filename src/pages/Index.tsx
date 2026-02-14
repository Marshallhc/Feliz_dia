import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import StickyReveal from "@/components/StickyReveal";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";

const Index = () => {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />

        <StorySection
          image={story1}
          imageAlt="hermosaaaaaa"
          caption="— Story"
          title="24 de Noviembre del 2025"
          body="No ha pasado muchoo desde que supimos que nos gustamos mutuamente, nos congeneamos tan bien que parece que fué hace años, desde entonces ya habíamos tenido miles de recuerdos, parecíamos amigos de toda la vida, y me gustaste, desde ahí no me imaginaba otra mujer a mi lado mas que vos, mejor dicho, qué pivilegio acompañarte."
        />

        <StorySection
          image={story2}
          imageAlt="que bella que esss"
          caption="— Recorrido"
          title="Perdón y Gracias"
          body="Buenos y malos recuerdos.. gracias por ser vos en cada uno. Altos y bajos, gracias por estar en cada uno. Este es un regalito de una de las cosas que mejor hago para vos. Charlas, salidas, risas, enojos, encuentros, tiempos, miradas, detalles, no, sí, abrazos, caminatas, atención, todo y más, fué hecho con amor, porque sin esperar algo a cambio me diste mucho más de lo que crees, y no suelo pensar mucho en una persona pero estás en mi mente todos los días mujer, que el Señor siempre te mande un abrazo de mi parte, y el beso me lo guardo jajaja, te amo mujer, bastante, extraño siempre esos abrazos espontáneos..."
          reverse
        />

        <StickyReveal />

        <Gallery />

        <Footer />
      </main>
    </SmoothScroll>
  );
};

export default Index;


