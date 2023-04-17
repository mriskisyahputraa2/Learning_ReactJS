function Item({ name, isPacking }) {
  if (isPacking) {
    return <li>{name} ✔ (true)</li>;
  }
  return <li>{name} (false)</li>;
  // return null; // jika tidak ingin mengambalikan apa-apa gunakan null
}

export default function Example() {
  return (
    <>
      <section className="border-2 border-solid border-black w-[400px] mt-4 p-3 rounded mb-4">
        <h1 className="text-2xl font-bold text-center mb-2 ">
          Conditional Rendering
        </h1>
        <ul className="list-disc text-left ml-3">
          <li>
            <Item isPacking={true} name="Space suit" />
          </li>
          <li>
            <Item isPacking={true} name="Helmet with a golden leaf" />
          </li>
          <li>
            <Item isPacking={false} name="Photo of Tam" />
          </li>
        </ul>
      </section>
    </>
  );
}
