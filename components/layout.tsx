import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-dark">
      <Head>
        <title>BrewFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
