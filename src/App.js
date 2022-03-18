import { compose } from "redux";
import Cards from "./components/Pages/Cards";
import { WithErrorBoundary } from "./hoc/withErrorBoundary";
const App = () => {
  // let testErrorBounder = new Error('testErrorBounder');
  // testErrorBounder();
  return (
    <>
      <Cards />
    </>
  );
};

export default compose(WithErrorBoundary)(App);
