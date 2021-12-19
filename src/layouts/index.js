import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function(props) {
  console.log("layout")
  return (
    <>
      <Header />
      { props.children }
      <Footer />
    </>
  );
}

