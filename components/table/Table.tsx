"use client";

// ** Import Material
import { Card, Typography } from "@material-tailwind/react";

type Props = {
  children: React.ReactNode;
  tableHead: string[];
};

export default function Table(props: Props) {
  const { children, tableHead } = props;

  return (
    <Card className="w-full">
      <table className="w-full text-left min-w-max ring-gray-100">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-gray-200 py-7 px-4"
              >
                <Typography
                  variant="small"
                  className="font-semibold text-[15px] text-gray-800 leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Card>
  );
}
