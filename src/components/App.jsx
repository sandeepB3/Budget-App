import React from "react";
import { Container, Stack, Button } from 'react-bootstrap';
import Budgetbox from "./Budgetbox";

function App() {
    return(
    <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
            <h1 className="me-auto">Budgets</h1>
            <Button variant="primary">Add Budget</Button>
            <Button variant="outline-primary"> Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
        <Budgetbox name="College" gray amount={200} max={2000}/>
        </div>
    </Container>  
    );
}

export default App;