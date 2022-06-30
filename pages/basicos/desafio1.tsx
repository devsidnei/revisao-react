export default function desafio1() {
  const gerarList = (qdtItems) => Array.from({ length: qdtItems }, (k, v) => v);

  return (
    <ul>
      {gerarList(10).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
