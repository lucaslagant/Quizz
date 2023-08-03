import { Container, Grid, Typography, Card, TextField, Button} from "@mui/material";
import React from "react";


export default function CreateQuiz(){
    return (
        <Container maxWidth="sm">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                    <Typography fontWeight="bold" component="h2" variant="h2" marginY={5}>Créer ton Quizz</Typography>
                </Grid>
                <Grid item>
                    <Card style={{ padding: 15}} variant="outlined">
                        <form action="">
                            <TextField fullWidth label="Générer un quizz" name="content"/>
                            <Button fullWidth  style={{marginTop: 20}} type="submit" variant="contained">Générer</Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}