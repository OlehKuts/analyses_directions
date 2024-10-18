import React from "react";
import "../styles.css";
import { Text } from "./Text";

export const AnalyseItem = ({ patient, analyse, ...props }) => {
  const {
    name,
    birthDate,
    residence,
    doctor,
    diagnosis,
    directionNumber
  } = patient;
  const date = new Date();
  const stringifiedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  return (
    <div className="analyseItem">
      <div className="centered">{analyse.name.toUpperCase()}</div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          П.І.Б
        </Text>
        {""}
        <Text>{name}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Дата народження
        </Text>
        {""}
        <Text>{birthDate}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Адреса
        </Text>
        {""}
        <Text>{residence}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Діагноз
        </Text>
        {""}
        <Text>{diagnosis}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          № електронного направлення
        </Text>
        {""}
        <Text fontWeight="bold">{directionNumber}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Лікар
        </Text>
        {""}
        <Text>{doctor}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          Дата
        </Text>
        {""}
        <Text>{stringifiedDate}</Text>
      </div>
      <div className="analyseLine">
        <Text fontWeight="bold" marginRight="10px" {...props}>
          {analyse.feature}
        </Text>
        {""}
        <Text></Text>
      </div>
    </div>
  );
};
