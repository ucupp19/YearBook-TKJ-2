import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import TeacherSection from "@/components/TeacherSection";
import GallerySection from "@/components/GallerySection";
import StudentSection from "@/components/StudentSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <HomeSection />
        <TeacherSection />
        <GallerySection />
        <StudentSection />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
