import React from "react";
import { promises as fs } from "fs";
import DropDown from "../components/DropDown";

const GetData = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/assets/menu.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <>
      {data.map((item) => {
        const { submenu } = item;
        return <DropDown key={item.id} item={item} submenu={submenu} />;
      })}
    </>
  );
};

export default GetData;
