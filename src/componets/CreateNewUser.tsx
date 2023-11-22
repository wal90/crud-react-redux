import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUsersActions";

export function CreateNewUSer () {
    const { addUser } = useUserActions()
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)
    const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
        event.preventDefault()
        setResult(null)
       const form = event.target
       const formData = new FormData(form) // formData ---> sacar los datos de un formulario
       
       const name = formData.get('name') as string
       const email = formData.get('email') as string
       const github = formData.get('github') as string 

       addUser({ name, email, github})
    }
    return (
        <Card style={{ marginTop: '16ox' }}>
            <Title>Create New User </Title>

            <form onSubmit={handleSubmit} className="">
                <TextInput
                name="name"
                placeholder='Aquí el nombre'
                />
                <TextInput
                name="email"
                placeholder='Aquí el email'
                />
                <TextInput
                name="github"
                placeholder='Aquí el usuario de GitHub'
                />

                <div>
                    <Button
                    type="submit"
                    style={{ marginTop: '16px'}}>
                        Crear usuario
                    </Button>
                </div>

            </form>
        </Card>
    )
}