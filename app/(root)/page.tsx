import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe.email.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "guest"}
            subtext="to your online banking"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1250.5}
          />
        </header>
        RECENT
      </div>
      <RightSideBar user={loggedIn} transctions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
