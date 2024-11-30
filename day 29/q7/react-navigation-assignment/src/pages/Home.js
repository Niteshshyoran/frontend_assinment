import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

export default Home;
