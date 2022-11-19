import Dashboard from "../components/Dashboard";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Dashboard />
    </Layout>
  )
}