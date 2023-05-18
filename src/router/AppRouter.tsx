/** @format */

import { Route, Routes } from "react-router-dom";
import Main from "../routes/Main/Main";



const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' index element={<Main/>} />
    </Routes>
  );
};
export default AppRouter;
