import { Button, Card, TextInput, Title } from "@tremor/react";

export function CreateNewUSer () {
    return (
        <Card style={{ marginTop: '16ox' }}>
            <Title>Create New User </Title>

            <form className="">
                <TextInput
                placeholder='Aquí el nombre'
                />
                <TextInput
                placeholder='Aquí el email'
                />
                <TextInput
                placeholder='Aquí el usuario de GitHub'
                />

            </form>
        </Card>
    )
}