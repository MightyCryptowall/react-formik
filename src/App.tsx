
import { Container, Grid } from '@mui/material';
import './App.css';
import Form from './components/Form';

function App() {


 

  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid item sm={5}>
                <Form/>
          </Grid>
            
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
