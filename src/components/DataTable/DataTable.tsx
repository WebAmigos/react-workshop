import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Table,
  Checkbox,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "../../ui";

const people = [
  {
    id: "1",
    firstName: "Jan",
    lastName: "Kowalski",
  },
  {
    id: "2",
    firstName: "Alina",
    lastName: "Malina",
  },
  {
    id: "3",
    firstName: "Janusz",
    lastName: "Kapuściński",
  },
];

export const DataTable = () => {
  // below line will run rerender 🔄
  // const [selectedOption, setSelectedOption] = useState<string | number>(0);
  // below line will not run rerender ❌
  const [data, setData] = useState<typeof people>([]);
  const selectedValue = useRef<string | number>(0);

  useEffect(() => {
    // it's just simulate fetching data after component mount
    setData(people);
  }, []);

  const handleChange = useCallback((value: string | number) => {
    if (typeof value === "string") {
      console.log("I'm string");
      // below line will run rerender 🔄
      // setSelectedOption(parseInt(value, 10));
      selectedValue.current = parseInt(value, 10);
    } else {
      console.log("I'm number");
      // below line will run rerender 🔄
      // setSelectedOption(value);
      selectedValue.current = value;
    }

    console.log("value: ", value);
  }, []);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((elem) => (
            <TableRow key={elem.id}>
              <TableCell>
                <Checkbox
                  value={elem.id}
                  label="Check me"
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>{elem.firstName}</TableCell>
              <TableCell>{elem.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
