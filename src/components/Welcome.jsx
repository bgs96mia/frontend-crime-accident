import axios from "axios";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    const data = await axios.get(`http://localhost:8080/api/users/current`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    const users = data.data.data.name;
    setName(users);
  };

  return (
    <div className=" mt-4 justify-center text-4x text-white">
      <div className="mx-6">
        <h1 className="text-3xl font-bold">
          Selamat datang {name} di Dashboard Website Data Kejahatan dan
          Kecelakaan!
        </h1>
        <h5 className="mt-4 text-2xl">
          Kami dengan bangga mempersembahkan platform yang dirancang khusus
          untuk menyediakan informasi terkini tentang data kejahatan dan
          kecelakaan. Tujuan kami adalah memberikan akses yang mudah dan
          transparan terhadap data yang relevan, sehingga Anda dapat memahami
          dan menjelajahi tren, pola, dan statistik terkait kejahatan dan
          kecelakaan.
        </h5>
        <h5 className="mt-4 text-2xl">
          Melalui website ini, Anda dapat menjelajahi berbagai jenis kejahatan,
          termasuk kejahatan jalanan, perampokan, pencurian, dan banyak lagi.
          Kami juga menyediakan informasi terkait kecelakaan lalu lintas,
          insiden di jalan, dan data kecelakaan lainnya yang dapat membantu Anda
          dalam memahami faktor-faktor yang berkontribusi terhadap kecelakaan
          dan mengambil tindakan pencegahan yang tepat.
        </h5>
        <h5 className="mt-4 text-2xl">
          Kami mengumpulkan data dari berbagai sumber yang dapat diandalkan dan
          kami terus memperbarui informasi tersebut agar tetap akurat dan
          berdaya guna. Kami berharap bahwa melalui akses mudah ke data ini,
          masyarakat dapat meningkatkan kesadaran akan masalah kejahatan dan
          kecelakaan serta berkontribusi dalam menciptakan lingkungan yang lebih
          aman dan lebih baik bagi semua.
        </h5>
      </div>
    </div>
  );
};

export default Welcome;
