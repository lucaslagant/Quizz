import React from "react";
import { Container, Grid, Typography, Card, TextField, Button} from "@mui/material";


export default function CreateQuiz(){

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const content = formData.get('content');

        const response = await fetch( '/quizzes', {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
        });

        const json = await response.json();

    }

    return (
        <Container maxWidth="sm">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                    <Typography fontWeight="bold" component="h2" variant="h2" marginY={5}>Créer ton Quizz</Typography>
                </Grid>
                <Grid item>
                    <Card style={{ padding: 15}} variant="outlined">
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth label="Générer un quizz" name="content"/>
                            <Button fullWidth  style={{marginTop: 20}} type="submit" variant="contained">Générer</Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}