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
      name: "Peter Doe",
      email: "1,00",
      github: "1,200,000",
    },
    {
      id: "2",
      name: "Lena Whitehouse",
      email: "1,000,000",
      github: "1,200,000",
    },
    {
      id: "3",
      name: "Phil Less",
      email: "1,000,000",
      github: "1,200,000",
    },
    {
      id: "4",
      name: "John Camper",
      email: "1,000,000",
      github: "1,200,000",
    },
    {
      id: "5",
      name: "Max Balmoore",
      email: "1,000,000",
      github: "1,200,000",
    },
    {
      id: "6",
      name: "Peter Moore",
      email: "1,000,000",
      github: "1,200,000",
   
    },
    {
      id: "7",
      name: "Joe Sachs",
      email: "1,000,000",
      github: "1,200,000",
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