import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
const cards = data.map((d, index)=>{
  // console.log(d,"dd")
return(
  <Card
  key={index}
  {...d}
  // img={d.coverImg}
  // rating={d.stats.rating}
  // reviewCount={d.stats.reviewCount}
  // location={d.location}
  // title={d.title}
  // price={d.price}
  // openSpots={d.openSpots}
/>
)
})

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </>
  );
}

export default App;
