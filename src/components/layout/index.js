import LoginModal from "../Auth/Login";
import Registerodal from "../Auth/Register";
import ResetPass from "../Auth/ResetPass";
import Appbar from "./Appbar";
import Footer from "./Footer";
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
  const {
    isOpen: isRegsiterOpen,
    open: openRegsiter,
    close: closeRegsiter,
  } = useDisclose(false);

  return (
    <>
      <Appbar
        openSidebar={openSidebar}
        openLogin={openLogin}
        openRegsiter={openRegsiter}
      />
      <div
        className={`flex transition-all  duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <div className="w-full">
          <main
            className="lg:px-16 py-16"
            style={{
              background:
                " linear-gradient(180deg, #1C1F26 0%, #11141B 46.55%, #13161F 100%)",
            }}
          >
            {children}
          </main>
          <Footer />
        </div>
        <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
        <Registerodal isOpen={isRegsiterOpen} onClose={closeRegsiter} />
        {/* <ResetPass isOpen={isLoginOpen} onClose={closeLogin} /> */}
      </div>
    </>
  );
};

export default Layout;
