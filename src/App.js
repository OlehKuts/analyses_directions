import { useState, useMemo } from "react";
import "./styles.css";
import {
  msDiagonosis,
  lorDiagonosis,
  doctors,
  townList,
  analyses,
  examinationTemplate
} from "./formData";
import { AnalyseItem } from "./components/AnalyseItem";

export const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [diagnosisList, setDiagnosisList] = useState(lorDiagonosis);
  const [patient, setPatient] = useState({
    name: "",
    birthDate: "",
    doctor: "",
    diagnosis: "",
    residence: "",
    directionNumber: "",
  });
  const [residence, setResidence] = useState("");
  const [currentExaminationName, setCurrentExaminationName] = useState("");
  const [ownExaminations, setOwnExaminations] = useState([...analyses].filter(item => !item.dentistryOnly));
  
  const deleteAnalyse = (analyseId) => {
    setOwnExaminations(ownExaminations.filter(item => item.id !== analyseId))
  }
  const analyseNames = useMemo( () => {
    return ownExaminations.map(item => {return {name: item.shortName, id: item.id}})
  }, [ownExaminations])
  console.log(ownExaminations);
  return (
    <div className="App">
      <>
        {/* {showForm && <div className="heading">Заповніть форму</div>} */}
        {showForm && (
          <div className="dateForm">
            <div className="formLine">
              <button
                onClick={() => {setDiagnosisList(lorDiagonosis)
                  setOwnExaminations(analyses.filter(item => !item.dentistryOnly))
                }}
                id={diagnosisList === lorDiagonosis ? "activeBtn" : ""}
              >
                ЛОР
              </button>
              <button
                onClick={() => {setDiagnosisList(msDiagonosis)
                  setOwnExaminations(analyses)
                }}
                id={diagnosisList === msDiagonosis ? "activeBtn" : ""}
              >
                ЩЛХ
              </button>
            </div>{" "}
            <div id="specialLine">
              <input
                value={patient.name}
                onChange={(e) =>
                  setPatient({ ...patient, name: e.target.value })
                }
                condition={
                  patient.name.length > 10 && patient.name.includes(" ")
                }
                placeholder="Пацієнт..."
                className="longInput"
              />
            </div>
            <div className="formLine">
              {" "}
              <input
                type="text"
                placeholder="Дата народження..."
                value={patient.birthDate}
                onChange={(e) =>
                  setPatient({ ...patient, birthDate: e.target.value })
                }
              />
              <select
                value={patient.doctor}
                onChange={(e) =>
                  setPatient({ ...patient, doctor: e.target.value })
                }
              >
                {doctors.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="formLine">
              <label>Патологія</label>
              <select
                className="mediumSelect"
                value={patient.diagnosis}
                onChange={(e) =>
                  setPatient({ ...patient, diagnosis: e.target.value })
                }
              >
                {diagnosisList.map((item, idx) => (
                  <option value={item} key={idx}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {" "}
              <input
                className="longInput"
                type="text"
                value={patient.directionNumber}
                onChange={(e) =>
                  setPatient({ ...patient, directionNumber: e.target.value })
                }
                placeholder="№ електронного направлення..."
              />
            </div>
            <div>
              {/* <div className="centered">Для жителя міста</div> */}
              <div className="formLine">
                <select
                className="longSelect"
                  value={residence}
                  onChange={(e) =>
                    setResidence(e.target.value)
                  }
                >
                  {townList.map((item, idx) => {
                    return (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                 {/* <select
                  value={residenceFeatures.street}
                  onChange={(e) =>
                    setResidenceFeatures({
                      ...residenceFeatures,
                      street: e.target.value,
                    })
                  }
                >
                  {currentStreets.map((item, idx) => {
                    return (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>  */}
              </div>
              <div className="formLine">
                {/* <select
                  value={residenceFeatures.building}
                  onChange={(e) =>
                    setResidenceFeatures({
                      ...residenceFeatures,
                      building: e.target.value,
                    })
                  }
                >
                  {buildingNumbers.map((item, idx) => {
                    return (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select> */}
                {/* <select
                  id="lettersSelect"
                  value={residenceFeatures.letter}
                  onChange={(e) =>
                    setResidenceFeatures({
                      ...residenceFeatures,
                      letter: e.target.value,
                    })
                  }
                >
                  {letters.map((item, idx) => {
                    return (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    );
                  })}
                </select> */}
                {/* <select
                  value={residenceFeatures.flat}
                  onChange={(e) =>
                    setResidenceFeatures({
                      ...residenceFeatures,
                      flat: e.target.value,
                    })
                  }
                >
                  {flatNumbers.map((item, idx) => {
                    return (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select> */}
              </div>
            </div>
            <div>
              {/* <div className="centered">Для сільського мешканця</div> */}
              {/* <select
                value={residenceFeatures.district}
                onChange={(e) =>
                  setResidenceFeatures({
                    ...residenceFeatures,
                    district: e.target.value,
                  })
                }
              >
                {districtList.map((item, idx) => {
                  return (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <input
                value={residenceFeatures.adress}
                onChange={(e) =>
                  setResidenceFeatures({
                    ...residenceFeatures,
                    adress: e.target.value,
                  })
                }
                placeholder="назва села або СМТ..."
              /> */}
            </div>
            <div>
              <input
                className="longInput"
                value={residence}
                onChange={(e) =>
                  setResidence(e.target.value)
                }
                placeholder="введіть адресу..."
              />
            </div>
            <div className="smallAnalyseBlock">
                {analyseNames.map(item => <div key={item.id} className="smallAnalyse"
                onClick={() => deleteAnalyse(item.id)}>
                  {item.name}
                </div>)}
            </div>
            <div className="centered">Додати власне обстеження</div>
            <div className="ownExaminations">
              <input
                value={currentExaminationName}
                onChange={(e) => setCurrentExaminationName(e.target.value)}
                placeholder="назва обстеження..."
              />
              <button
                disabled={ownExaminations.length > 7 || !currentExaminationName.length ? true : false}
                onClick={() => {
                  setOwnExaminations((prev) => {
                    if (!currentExaminationName.length) return;
                    return [
                      ...prev,
                      { ...examinationTemplate, name: currentExaminationName, shortName: `${currentExaminationName.slice(0,8)}...`, id: Math.random()},
                    ];
                  });
                  setCurrentExaminationName("");
                  alert("Додано в перелік обстежень");
                }}
              >
                Додати
              </button>
            </div>
            <div>
              <hr />
              <button
                onClick={() => {
                  if (
                    patient.name === "" ||
                    patient.doctor === "" ||
                    patient.birthDate === "" ||
                    patient.diagnosis === ""
                  ) {
                    alert("Заповніть пусті поля!");
                    return;
                  }
                  setPatient({
                    ...patient,
                    residence: residence
                  });
                  setShowForm(false);
                  setShowControls(true);
                }}
              >
                Підтвердити
              </button>
            </div>
          </div>
        )}
        {!showForm && (
          <div className="mainBlock">
            {ownExaminations.map((analyse) => (
              <AnalyseItem
                key={analyse.name}
                patient={patient}
                analyse={analyse}
              />
            ))}
          </div>
        )}

        {showControls && (
          <div className="controls">
            <button onClick={() => setShowControls(false)}>
              Готово до друку
            </button>
            <button onClick={() => {
              setShowForm(true)
              setShowControls(false)}}>Виправити форму</button>
          </div>
        )}
      </>
    </div>
  );
};
