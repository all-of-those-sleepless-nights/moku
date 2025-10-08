import { Outlet } from "react-router-dom";
import PublicHeader from "../headers/public-header";
import PublicFooter from "../footers/public-footer";

function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <PublicHeader />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
      <PublicFooter />
    </div>
  );
}

export default PublicLayout;
