import LoginModal from "../Auth/LoginModal";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import useDisclose from "@/helper/useDisclose";

const Layout = ({ children }) => {
  const {
    isOpen: isSidebarOpen,
    open: openSidebar,
    close: closeSidebar,
  } = useDisclose(true);
  const {
    isOpen: isLoginOpen,
    open: openLogin,
    close: closeLogin,
  } = useDisclose(false);

  return (
    <>
      <Appbar openSidebar={openSidebar} openLogin={openLogin} />
      <div
        className={`flex transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main className="container p-4">{children}</main>
        <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
      </div>
    </>
  );
};

export default Layout;
