import SiteWrapper from "../components/site-wrapper.tsx";
import Card from "../components/card.tsx";
import CardContainer from "../components/card-container.tsx";

export default function Home() {
  return (
    <SiteWrapper>
      <p className="mt-3 text-2xl">Get started by searching for a brewery </p>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </SiteWrapper>
  );
}
