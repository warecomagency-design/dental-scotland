import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoTestimonials from "@/components/VideoTestimonials";
import WhyTurkey from "@/components/WhyTurkey";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import MeetupSection from "@/components/MeetupSection";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoTestimonials />
        <WhyTurkey />
        <Process />
        <Testimonials />
        <MeetupSection />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
