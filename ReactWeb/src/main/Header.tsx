import { useNavigate } from "react-router-dom";


type Args = {
  subtitle: string;
};

const Header = ({ subtitle }: Args) => {
  const nav = useNavigate();
  return (
    <header className="row mb-4">
      <div className="topnav">
        <a className="active" onClick={() => nav("/")}>Home</a>
        <a href="MapBasedAPIs">Map based APIs</a>
        <a href="About">About</a>
        <a className="logout" href="">Logout</a>
      </div>
    </header>
  );
};

export default Header;
