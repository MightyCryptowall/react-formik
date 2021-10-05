import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Formik, useFormik } from "formik";

interface FormProps {}
const MySpecialField: React.FC<any> = ({ field }) => {
  return <input {...field} className="border-2" />;
};

const validate = (values: any) => {
  const errors: { firstName?: string; lastName?: string; email?: string } = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form: React.FC<FormProps> = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card style={{ marginTop: "5em" }}>
      <form onSubmit={formik.handleSubmit}>
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

          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            variant="standard"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            style={{ paddingBottom: "1rem" }}
            error={
              formik.errors.firstName && formik.touched.firstName ? true : false
            }
            helperText={
              formik.errors.lastName && formik.touched.lastName
                ? formik.errors.firstName
                : ""
            }
            onBlur={formik.handleBlur}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="standard"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            style={{ paddingBottom: "1rem" }}
            error={
              formik.errors.lastName && formik.touched.lastName ? true : false
            }
            helperText={
              formik.errors.lastName && formik.touched.lastName
                ? formik.errors.lastName
                : ""
            }
            onBlur={formik.handleBlur}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ paddingBottom: "1rem" }}
            error={formik.errors.email && formik.touched.email ? true : false}
            helperText={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""
            }
            onBlur={formik.handleBlur}
          />
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button variant="contained" type="submit" size="small">
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Form;
