import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = {
    firsName: "John",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firsName || "guest"}
            subtext="to your online banking"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
