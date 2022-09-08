import { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import SuspendLoading from "src/components/SuspenseLoading";

import "./assets/scss/main.scss";
import App from "./App";

import store from "src/store";

const container = document.getElementById("root");
const root = createRoot(container!);

let persistor = persistStore(store);

root.render(
  // <StrictMode>
  <Suspense fallback={<SuspendLoading />}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router basename={`/`}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </Suspense>
  // </StrictMode>
);
