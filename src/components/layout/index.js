import useWindowSize from "@/helper/useWindowSize";
import LoginModal from "../Auth/Login";
import Registerodal from "../Auth/Register";
import ResetPass from "../Auth/ResetPass";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import useDisclose from "@/helper/useDisclose";
import { useMemo } from "react";
import NotificationDrawer from "./NotificationDrawer";
import MyTabNavigator from "./TabNavigator";
import LiveChat from "./LiveChat";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

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
  const {
    isOpen: isRestPassOpen,
    open: openRestPass,
    close: closeRestPass,
  } = useDisclose(false);

  const {
    isOpen: isNotificationOpen,
    open: openNotification,
    close: closeNotification,
  } = useDisclose(false);

  const { width } = useWindowSize();
  useMemo(() => {
    if (width < 1024 && isSidebarOpen) closeSidebar();
    else if (width >= 1024 && !isSidebarOpen) openSidebar();
  }, [width]);

  return (
    <>
      <Appbar
        openSidebar={openSidebar}
        openLogin={openLogin}
        openNotification={openNotification}
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
        <MyTabNavigator />
        <NotificationDrawer
          isOpen={isNotificationOpen}
          onClose={closeNotification}
        />
        <LiveChat />
        <Deposit />
        <Withdraw />
        <LoginModal
          isOpen={isLoginOpen}
          onClose={closeLogin}
          openRegsiter={() => {
            closeRegsiter();
            openRegsiter();
          }}
          openRestPass={() => {
            closeRegsiter();
            openRestPass();
          }}
        />
        <Registerodal
          isOpen={isRegsiterOpen}
          openLogin={() => {
            closeRegsiter();
            openLogin();
          }}
          onClose={closeRegsiter}
        />
        <ResetPass
          isOpen={isRestPassOpen}
          onClose={closeRestPass}
          openRegsiter={() => {
            closeRegsiter();
            openRegsiter();
          }}
        />
      </div>
    </>
  );
};

export default Layout;
