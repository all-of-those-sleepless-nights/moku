import { Outlet } from "react-router-dom";
import PublicHeader from "../headers/public-header";

function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <PublicHeader />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default PublicLayout;
