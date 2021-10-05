import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 character or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
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
