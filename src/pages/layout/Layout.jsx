import "./layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <div className="layoutContainer">
        <NavBar/>
        {children}
      </div>
    </>
  );
};

export default Layout;
