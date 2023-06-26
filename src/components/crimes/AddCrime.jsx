"use client";
import { useState } from "react";
import axios from "axios";

const AddCrime = () => {
  const [nameCrime, setNameCrime] = useState("");
  const [typeCrime, setTypeCrime] = useState("");
  const [location, setLocation] = useState("");
  const [incidentDate, setIncedentDate] = useState("");
  const [modal, setModal] = useState(false);

  async function handleSubmit() {
    const token = localStorage.getItem("token");
    await axios.post(
      `http://localhost:8080/api/crimes`,
      {
        name_crime: nameCrime,
        type_crime: typeCrime,
        location: location,
        incident_date: incidentDate,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-primary text-white" onClick={handleChange}>
        Add New
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal text-white text-center ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Data Kejahataan</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold text-sm">Kejahaatan</label>
              <input
                type="text"
                value={nameCrime}
                onChange={(e) => setNameCrime(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Kejahataan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-sm">Tipe Kejahaatan</label>
              <input
                type="text"
                value={typeCrime}
                onChange={(e) => setTypeCrime(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Tipe Kejahataan"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-sm">Lokasi</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Lokasi"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-sm">Waktu</label>
              <input
                type="date"
                value={incidentDate}
                onChange={(e) => setIncedentDate(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Waktu"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>

              <button className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCrime;
