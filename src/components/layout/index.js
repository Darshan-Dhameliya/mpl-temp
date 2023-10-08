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
import LiveChat from "./LiveChat";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import TabNavigator from "./TabNavigator";

const Layout = ({ children }) => {
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
  const isSidebarOpen = width >= 1024;

  return (
    <>
      <Appbar
        openLogin={openLogin}
        openNotification={openNotification}
        openRegsiter={openRegsiter}
      />
      <TabNavigator />
      {isSidebarOpen && <Sidebar />}
      <div
        className={`flex transition-all  duration-300 ${
          isSidebarOpen ? "ml-64" : "pb-16"
        }`}
      >
        <div className="w-full">
          <main
            className="lap:px-16 py-16"
            style={{
              background:
                " linear-gradient(180deg, #1C1F26 0%, #11141B 46.55%, #13161F 100%)",
            }}
          >
            {children}
          </main>
          <Footer />
        </div>
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
