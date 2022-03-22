import apiConfig from "./api.config";

export const getCardsList = () => apiConfig.get();

export const updateCardsList = (cardsListItemId, cardsListItemData) =>
  apiConfig.put({ url: `/${cardsListItemId}`, data: cardsListItemData });
