import { CardListItem } from "../CardListItem/CardListItem";

export const CardList = ({ cardList }) => {
  return (
    <>
      {cardList.map((item, i) => {
        return <CardListItem {...item} key={i} />;
      })}
      )
    </>
  );
};
