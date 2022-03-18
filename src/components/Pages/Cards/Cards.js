import CardList from "./SupportComponents/CardList";
import {
  Button,
  StyledCards,
  WrapperCardList,
  WrapperButton,
} from "./StyledCards.jsx";
import { Modal } from "../../Modal/Modal";
import { ModalCardListForm } from "./SupportComponents/ModalCardListForm/ModalCardListForm";
import { compose } from "redux";
import { WithLoaderCardPage } from "../../../hoc/withLoaderCardPage";
import PropTypes from "prop-types";
import { CardListItem } from "./SupportComponents/CardListItem/CardListItem";

const Cards = ({
  cardList,
  isShowModalWithForm,
  onCloseModalWithForm,
  selectedCard,
  onBuyCheapest,
  ...props
}) => {
  return (
    <>
      {isShowModalWithForm && (
        <Modal>
          <ModalCardListForm
            selectedCard={selectedCard}
            onCloseModalWithForm={onCloseModalWithForm}
          />
        </Modal>
      )}
      {cardList && (
        <StyledCards>
          {cardList && (
            <WrapperCardList>
              <CardList cardList={cardList} {...props} />
            </WrapperCardList>
          )}
          <WrapperButton>
            <Button buyCheapest onClick={onBuyCheapest}>
              Buy cheapest
            </Button>
          </WrapperButton>
        </StyledCards>
      )}
    </>
  );
};

Cards.propTypes = {
  cardList: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.oneOf([null]),
  ]),
  isShowModalWithForm: PropTypes.bool,
  onCloseModalWithForm: PropTypes.func,
  selectedCard: PropTypes.object,
  onBuyCheapest: PropTypes.func,
};

Cards.defaultProps = {
  cardList: null,
  isShowModalWithForm: false,
  onCloseModalWithForm: () =>
    console.log("Forgot to add a function onCloseModalWithForm"),
  selectedCard: { category: "category", name: "name", price: "price" },
  onBuyCheapest: () => console.log("Forgot to add a function onBuyCheapest"),
};

export default compose(WithLoaderCardPage)(Cards);
