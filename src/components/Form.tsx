import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import TextBox from "./TextBox";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  
  return (
    <Card style={{ marginTop: "5em" }}>
      <Formik
        initialValues={{firstName: "", lastName: "", email: ""}}
        validationSchema= {Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 character or less")
            .required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
        })}
        onSubmit= {(values, {setSubmitting}) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >


     {formik => ( <form onSubmit={formik.handleSubmit}>
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

          <TextBox label="First Name" name="firstName" type="text"/>
          <TextBox label="Last Name" name="lastName" type="text"/>
          <TextBox label="Email" name="email" type="email"/>
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit" size="small">
            Submit
          </Button>
        </CardActions>
      </form>)}
      </Formik>
    </Card>
  );
};

export default Form;
