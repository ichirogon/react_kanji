import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./kanji.css";

const Kanji = () => {
  const [kanji, setKanji] = useState([]);
  const [_id, setId] = useState(null);
  const [kanjiForm, setKanjiForm] = useState({
    kanji: "",
    hiragana: "",
  });
  //Hooks buscar
  const getKanji = useCallback(async () => {
    try {
      const url = "http://localhost:3000/kanjis";
      //   await axios.post(url, {
      //     kanji: this.kanji,
      //     hiragana: this.hiragana,
      //   });

      const { data } = await axios.get(url);
      setKanji(data);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  useEffect(() => {
    getKanji();
  }, [getKanji]);

  let submitHandler = async (event) => {
    event.preventDefault();
    if (kanjiForm.kanji && kanjiForm.hiragana) {
      try {
        if (_id) {
          await axios.put(`http://localhost:3000/kanjis/${_id}`, kanjiForm);
          setId(null);
        } else {
          await axios.post("http://localhost:3000/kanjis", kanjiForm);
        }
        setKanjiForm({
          kanji: "",
          hiragana: "",
        });
        getKanji();
      } catch (err) {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err);
        }
      }
    }
  };

  const inputHandler = (event) => {
    const updatedInputs = {
      ...kanjiForm,
      [event.target.name]: event.target.value,
    };

    setKanjiForm(updatedInputs);
  };

  const deleteHandler = async (_id) => {
    if (_id) {
      try {
        await axios.delete(`http://localhost:3000/kanjis/${_id}`);
        getKanji();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateHandler = async (_id) => {
    if (_id) {
      try {
        const { data } = await axios.get(`http://localhost:3000/kanjis/${_id}`);
        setId(_id);
        setKanjiForm(data);
      } catch (err) {
        console.log(err.response);
      }
    }
  };

  return (
    <div className="main & greet">
      <div className="wellcome">
        <h1 className="blue">Welcome to &nbsp;</h1>
        <h1 className="green">KanjiTime</h1>´
      </div>
      <div className="violeta-mod">
        <form className="">
          <label />
          Kanji &nbsp;
          <input
            type="text"
            name="kanji"
            value={kanjiForm.kanji}
            onChange={inputHandler}
          />
          <br />
          <label />
          Hiragana &nbsp;
          <input
            type="text"
            name="hiragana"
            value={kanjiForm.hiragana}
            onChange={inputHandler}
          />
          <br />
          <button className="create" onClick={submitHandler}>
            {_id ? "Update" : "Create"}
          </button>
        </form>
      </div>
      {/* <ul className="scroll && letter_kanjis_add">
        {kanji.map((kj, index) => (
          <li key={index}>
            {kj.kanji}- {kj.hiragana}
            <button onClick={() => deleteHandler(kj._id)}> Delete </button>
            <button onClick={() => updateHandler(kj._id)}> Update </button>
            <br />
          </li>
        ))}
      </ul> */}
      <div className="scroll && letter_kanjis_add">
        <table className="scroll && letter_kanjis_add">
          <thead>
            <tr>
              <th>Kanji</th>
              <th>Hiragana</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {kanji.map((kj, index) => {
              return (
                <tr key={index}>
                  <td>{kj.kanji}</td>
                  <td>{kj.hiragana}</td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => deleteHandler(kj._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="update"
                      onClick={() => updateHandler(kj._id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kanji;
