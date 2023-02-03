import "./MostPopularItems.scss";
import MostPopularItem from "../MostPopularItem/MostPopularItem";
import MostPopularData from "../../Data/MostPopularData";

const MostPopularItems = () => {
  const mostPopularItemsCards = MostPopularData.map((card) => (
    <MostPopularItem
      key={card.id}
      image={card.image}
      cardTitle={card.title}
      cardCategory={card.category}
      rate={card.rate}
      download={card.download}
    />
  ));

  return (
    <>
      <div className="most-popular-items container d-flex flex-wrap">
        {mostPopularItemsCards}
      </div>
    </>
  );
};

export default MostPopularItems;
