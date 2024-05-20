import Link from "next/link";
import BankInfo from "./BankInfo";
import { BankTabItem } from "./BankTabItem";
import TransactionsTable from "./TransactionsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const RecentTransactions = ({
  transactions = [],
  accounts,
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className="recent-transaction">
      <header className="flex items-center justify-between">
        <h2 className="recente-transactions-label">Recent Teansactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          view all
        </Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-tansactions-tablist">
          {accounts?.map((account) => (
            <TabsTrigger value={account.id} key={account.appwriteItemId}>
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account: Account) => (
          <TabsContent
            value={account.appwriteItemId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              appwriteItemId={appwriteItemId}
              type="full"
            />
            <TransactionsTable transactions={transactions} />
          </TabsContent>
        ))}
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
