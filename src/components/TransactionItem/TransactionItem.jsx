import css from './TransactionItem.module.css'
export default function TransactionItem({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
  );
}
