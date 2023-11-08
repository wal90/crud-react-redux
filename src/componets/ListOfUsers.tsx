import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    BadgeDelta
  } from "@tremor/react";

  const users: {
    id: string;
    name: string;
    email: string;
    github: string
  }[] = []
  
  const salesPeople = [
    {
      id:"1",
      name: "Walter Martinez",
      email: "walteromartinez90@gmail.com",
      github: "wal90",
    },
    {
      id: "2",
      name: "Lena Whitehouse",
      email: "lena_whitehouse@gmail.com",
      github: "lenaWhite",
    },
    {
      id: "3",
      name: "Phil Less",
      email: "philless@gmail.com",
      github: "pilless07",
    },
    {
      id: "4",
      name: "John Camper",
      email: "johncamper0007@gmail.com",
      github: "john0007",
    },
    {
      id: "5",
      name: "Max Balmoore",
      email: "maxbalmoore01@gmail.com",
      github: "maxBalmoore",
    },
    {
      id: "6",
      name: "Peter Moore",
      email: "petermoore@gmail.com",
      github: "petermoore",
   
    },
    {
      id: "7",
      name: "Joe Sachs",
      email: "joesachs20@gmail.com",
      github: "joesachs20",
    },
  ];
  
  export default function Example() {
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell className="text-right">Leads</TableHeaderCell>
              <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
              <TableHeaderCell className="text-right">Quota ($)</TableHeaderCell>
              <TableHeaderCell className="text-right">Variance</TableHeaderCell>
              <TableHeaderCell className="text-right">Region</TableHeaderCell>
              <TableHeaderCell className="text-right">Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salesPeople.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.leads}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell className="text-right">{item.quota}</TableCell>
                <TableCell className="text-right">{item.variance}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">
                  <BadgeDelta deltaType={item.deltaType} size="xs">
                    {item.delta}
                  </BadgeDelta>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }