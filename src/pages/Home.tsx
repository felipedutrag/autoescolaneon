import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import CNHStatus from '@/components/CNHStatus';
import Testimonials from '@/components/Testimonials';
import Infrastructure from '@/components/Infrastructure';
import GoogleMaps from '@/components/GoogleMaps';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <CNHStatus />
      <Testimonials />
      <Infrastructure />
      <GoogleMaps />
      <Footer />
    </div>
  )
}