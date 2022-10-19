export default function Review({ stars, from }) {
  let starsElement = [];

  for (let i = 0; i < stars; i++) {
    starsElement.push(
      <img
        src="./icon-star.svg"
        alt="stars"
        key={i}
      />
    );
  }

  return (
    <div className="review group">
      <div className="icons xl:group-first:mx-[calc(32/1440*100vw)] xl:group-last:ml-[calc(30/1440*100vw)]">{starsElement}</div>
      <p className="group-first:ml-2 xl:group-first:ml-0 xl:group-first:mb-[5px] xl:group-last:mt-[5px]">{`Rated ${stars} Stars in ${from}`}</p>
    </div>
  );
}
