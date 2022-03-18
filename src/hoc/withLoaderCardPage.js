import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader/Loader";
import { WrapperLoader } from "../components/Pages/Cards/StyledCards";

export const WithLoaderCardPage = (Component) => {
  const LoaderContainer = ({ ...props }) => {
    const { isLoading } = useSelector((state) => state.cardList);
    return (
      <>
        {isLoading && (
          <WrapperLoader>
            <Loader />
          </WrapperLoader>
        )}
        {!isLoading && <Component {...props} />}
      </>
    );
  };
  return LoaderContainer;
};
