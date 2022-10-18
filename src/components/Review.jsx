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
    <div className="review text-center pt-[16px] pb-[10px] bg-base-100 mb-4 rounded-md group">
      <div className="icons flex justify-center gap-2">{starsElement}</div>
      <p className="group-first:ml-2 font-bold text-primary-magenta text-[17px] mt-[10px]">{`Rated ${stars} Stars in ${from}`}</p>
    </div>
  );
}
