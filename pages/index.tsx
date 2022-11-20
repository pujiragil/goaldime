import Dashboard from "../components/Dashboard";
import Features from "../components/Features";
import MoreFeatures from "../components/Features/MoreFeatures";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import Price from "../components/Price";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <MoreFeatures />
      <Panel />
      <Price />
    </Layout>
  )
}