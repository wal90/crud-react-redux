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
                 <button type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  }