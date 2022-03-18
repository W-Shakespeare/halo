import axiosConfig from "./api.config";

export const getCardsList = () => axiosConfig.get();

export const updateCardsList = (cardsListItemId, cardsListItemData) =>
  axiosConfig.put(`/${cardsListItemId}`, cardsListItemData);
