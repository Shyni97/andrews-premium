import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageLayout({ children, title, subtitle, breadcrumb }: PageLayoutProps) {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      {/* Page Hero Banner */}
      <div
        className="relative pt-16 min-h-[260px] flex items-center justify-center bg-[#111111] overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#235c38] text-xs font-bold tracking-[0.3em] uppercase mb-3">{breadcrumb}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{title}</h1>
          {subtitle && <p className="text-white/60 text-base max-w-xl mx-auto">{subtitle}</p>}
        </div>
      </div>
      {/* Page Content */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
