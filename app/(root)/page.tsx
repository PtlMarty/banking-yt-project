import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || "guest"}
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
      <RightSideBar
        user={loggedIn}
        transctions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.0 }]}
      />
    </section>
  );
};

export default Home;
