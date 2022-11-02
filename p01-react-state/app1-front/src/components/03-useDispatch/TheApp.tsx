import { Provider } from "react-redux";
import store from "./dux/store";
import { TheComponent } from "./TheComponent";
import "./TheApp.scss";
const TheApp = () => {
  return (
    <div className="TheApp">
      <Provider store={store}>
        <TheComponent />
      </Provider>
    </div>
  );
};

export default TheApp;
