import Image from "next/image";
import PetsGallery from "../components/petsGallery/PetsGallery";
import Footer from "../components/footer/footer";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import AdoptaHeader from "../components/AdoptaHeader/AdoptaHeader";

const Adopta: React.FC = () => {
  return (
    <main className="flex-col justify-center items-center text-center">
      <AdoptaHeader />
      <section className="bg-secondary-content">
        <PetsGallery />
      </section>
      <ContactInfo />
      <Footer />
    </main>
  );
};

export default Adopta;
