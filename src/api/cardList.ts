import { ListItemObj } from "../redux/cardList/types";
import apiConfig from "./api.config";

export const getCardsList = (): Promise<Array<ListItemObj>> => apiConfig.get();

export const updateCardsList = (
  cardsListItemId: number | undefined,
  cardsListItemData: ListItemObj
): Promise<void> =>
  apiConfig.put({ url: `/${cardsListItemId}`, data: cardsListItemData });
