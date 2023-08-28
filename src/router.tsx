import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFound from "./components/pages/catch-page";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App></App>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
