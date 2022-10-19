import Footer from "./components/Footer";
import HeroText from "./components/HeroText";
import Review from "./components/Review";
import Testimony from "./components/Testimony";
import { reviews, testimonies } from "./data";

function App() {
  return (
    <>
      <main className="App">
        <div className="hero">
          <HeroText />

          <div className="reviews">
            {reviews.map((review, index) => {
              return (
                <Review
                  stars={review.stars}
                  from={review.from}
                  key={index}
                />
              );
            })}
          </div>
        </div>

        <div className="testimonies">
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
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
