import Header from "@/components/Header";
import Layout from "@/components/Layout";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <Hero />
        <Features />
        <Articles />
        <Footer />
      </Layout>


    </div>
  );
}
