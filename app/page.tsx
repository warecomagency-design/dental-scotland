import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoTestimonials from "@/components/VideoTestimonials";
import WhyTurkey from "@/components/WhyTurkey";
import Process from "@/components/Process";
import PastMeetups from "@/components/PastMeetups";
import Testimonials from "@/components/Testimonials";
import MeetupSection from "@/components/MeetupSection";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoTestimonials />
        <WhyTurkey />
        <Process />
        <PastMeetups />
        <Testimonials />
        <MeetupSection />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
