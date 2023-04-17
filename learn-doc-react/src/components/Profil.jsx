function Profil({ name }) {
  //   const name = "Muhammad Rizki Syahputra";
  const saudara = "Tunggal:)";
  const umur = 17;
  const deskripsi = "Harapan Orang Tua";
  const today = new Date();

  //   formate Date
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(date);
  };
  return (
    <>
      <div className="flex justify-center  mx-auto mt-3">
        <div className="border-solid border-2 border-black w-[600px] h-[500px] text-center rounded">
          <h1 className="text-3xl my-4 font-bold">{name}</h1>
          <img
            className="mx-auto rounded-lg drop-shadow-md my-2"
            src={process.env.PUBLIC_URL + "/imges/me.jpg"}
            alt={name}
            width={200}
            height={200}
          />
          <ul>
            <li>
              <b>Saudara: </b>
              {saudara}
            </li>
            <li>
              <b>Umur: </b>
              {umur}
            </li>
            <li>
              <b>Deskripsi:</b> {deskripsi}
            </li>
            <li>
              <b>Hari Ini: </b>
              {formatDate(today)}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Profil;
