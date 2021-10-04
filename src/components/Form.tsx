
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Field, Formik } from 'formik';

interface FormProps {
    
}
 
const Form: React.FC<FormProps> = () => {

    const handleSubmit = (values: any) => {};

    return ( 
        <Formik initialValues={{}} onSubmit={handleSubmit} >
        <Card style={{marginTop: "5em"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://picsum.photos/300/200"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Formik
            </Typography>
          
                <Field name="firstName"/>
            
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Formik> 
     );
}
 
export default Form;