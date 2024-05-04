import Link from "next/link";

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || "John Doe"}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
