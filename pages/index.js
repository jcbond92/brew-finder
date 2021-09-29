import SiteWrapper from "@/components/site-wrapper.tsx";
import SearchBar from "@/components/search-bar.tsx";

export default function Home() {
  return (
    <SiteWrapper>
      <p className="mt-3 text-2xl">Get started by searching for a brewery </p>
      <SearchBar />
    </SiteWrapper>
  );
}
