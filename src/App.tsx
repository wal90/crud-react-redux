import './App.css'
import { ListOfUsers } from './componets/ListOfUsers';
import { CreateNewUSer } from './componets/CreateNewUser';
import { Toaster } from 'sonner';

function App() {


  return (
    <>
   <ListOfUsers />
   <CreateNewUSer/>
   <Toaster richColors />
    </>
  )
}

export default App
