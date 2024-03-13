import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "PropertyPulse | Find the perfect property",
  description: "Find your dream property",
  keywords: "rental, find rentals, find properties, properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};
export default MainLayout;
