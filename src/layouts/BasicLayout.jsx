import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function Layout(props) {
  console.log(props)
  return (
    <>
      <Header />
      { props.children }
      <Footer />
    </>
  );
}
