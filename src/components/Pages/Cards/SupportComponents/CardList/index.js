import { compose } from "redux";
import { withCardListModalForm } from "../../../../../hoc/withEditeContact";
import { CardList } from "./CardList";

export default (props) => {
  return <CardList {...props} />;
};

// export default compose(withCardListModalForm)(CardListContainer);
