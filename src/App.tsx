import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import ParticleBackground from "./components/ParticleBackground";
import Index from "./pages/Index";
import Streaming from "./pages/Streaming";
import Internet from "./pages/Internet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsConditions from "./pages/TermsConditions";
import AdvertisingPolicy from "./pages/AdvertisingPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen bg-background overflow-hidden">
          <ParticleBackground />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="/internet" element={<Internet />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/advertising" element={<AdvertisingPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <FloatingCallButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
