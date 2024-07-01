import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <TransactionItem transaction={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
