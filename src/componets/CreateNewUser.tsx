import { Button, Card, TextInput, Title } from "@tremor/react";
import { addUser } from "../hooks/useUsersActions"

export function CreateNewUSer () {

    const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
       const form = event.target
       const formData = new FormData(form)
       
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