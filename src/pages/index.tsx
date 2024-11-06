
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      {/* <h1>Educational Platform</h1> */}
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Education Website - Learning for All"
        text="Education for all."
        buttonClass="show"
        buttonText="Plan"
        url="/about"
      />
      <Information />
    </>
  );
}
