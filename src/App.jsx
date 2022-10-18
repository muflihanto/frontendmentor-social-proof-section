import Footer from "./components/Footer";
import Header from "./components/Header";
import Review from "./components/Review";
// import Slider from "./components/Slider";
import Testimony from "./components/Testimony";
import { reviews, testimonies } from "./data";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="reviews mt-10 px-6">
        {reviews.map((review, index) => {
          return (
            <Review
              stars={review.stars}
              from={review.from}
              key={index}
            />
          );
        })}
      </section>

      <section className="testimonies pb-20 px-6 mt-[50px] text-base-100 mb-[3px]">
        {testimonies.map((testimony, index) => {
          return (
            <Testimony
              avatar={testimony.avatar}
              name={testimony.name}
              title={testimony.title}
              testimony={testimony.testimony}
              key={index}
            />
          );
        })}
      </section>

      <Footer />
      {/* <Slider imagePath={"/design/mobile-design.jpg"} /> */}
    </div>
  );
}

export default App;
