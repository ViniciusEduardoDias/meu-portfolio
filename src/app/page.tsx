import {
  Header,
  Container,
  Apresentation,
  About,
  Footer,
  Projects,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Apresentation />
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}
