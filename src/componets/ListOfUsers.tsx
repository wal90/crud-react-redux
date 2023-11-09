import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    
  } from "@tremor/react";

  const users: {
    id: string;
    name: string;
    email: string;
    github: string
  }[] = [
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
  
  export default function ListOfUsers() {
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Acciones</TableHeaderCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell style={{ display: "flex", alignItems: "center"}}>
                  <img 
                    style={{ width: "32px", height: "32px", borderRadius: "50%", marginRight: "8px"}}
                    src={`https://unavatar.io/github/${item.github}`}
                    alt={item.name}/>
                  {item.name}
                  </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                 <button>Editar</button>
                 <button>Eliminar</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }