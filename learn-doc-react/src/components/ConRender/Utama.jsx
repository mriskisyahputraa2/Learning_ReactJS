import ItemList from "./ItemList";

function Utama() {
  return (
    <>
      <section className="border-2 border-solid border-black w-[300px] mt-4 p-3 rounded mb-4 bg-slate-600 float-right absolute right-[25rem] top-0">
        <h1 className="text-2xl font-bold text-center mb-2 text-white">
          Conditional Rendering
        </h1>
        <ul className="list-disc text-left ml-3">
          <li><ItemList name='Kelapa' status={true} /></li>
          <li><ItemList name='Sawit' status={true} /></li>
          <li><ItemList name='Kacang Hijau' status={false} /></li>
        </ul>
      </section>
    </>
  );
}
export default Utama

// return null; // jika tidak ingin mengambalikan apa-apa gunakan null