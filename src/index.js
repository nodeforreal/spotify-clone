import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoaderView from './components/ColumnTwo/ReportingViews/LoaderView'

import "./index.css";
import "./styles/responsive/ColumnCounts.css";
const App = React.lazy(() => import("./layout/AppLayout"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoaderView />}>
        <Routes>
          <Route exact path="/*" element={<App />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
