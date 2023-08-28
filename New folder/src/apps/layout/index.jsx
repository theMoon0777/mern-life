import "./index.css";
import Header from "./components/lifer_header";
import Sider from "./components/sider";
import Sidebar from "./components/sidebar";

export { Header };

export const CommonLayout = ({ children }) => {
  return (
    <div className="site-body">
      <Sidebar />
      <div className="site-content">
          <Header />
          <div className="site-content-container lx-1">
            {children}
          </div>
      </div>
    </div>
  );
};

export const PrivateLayout = ({ children }) => (
  <CommonLayout>
    <div className="h-100-p">{children}</div>
  </CommonLayout>
);

export const PublicLayout = ({ children }) => (
  <>
    <Header />
    <div >{children}</div>
  </>
);
