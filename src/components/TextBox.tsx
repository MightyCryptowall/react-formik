import { TextField } from "@mui/material";
import { useField, FieldHookConfig } from "formik";


interface OtherProps {
    label: string
}

function TextBox({label, ...props}:OtherProps & FieldHookConfig<string>) {

    const [field, meta] = useField(props);
    return ( 
        <>

          <TextField
            label={label}
            variant="standard"
            type="text"
            {...field}
            style={{ paddingBottom: "1rem" }}
            error={
              meta.error && meta.touched ? true : false
            }
            helperText={
              meta.error && meta.touched
                ? meta.error
                : ""
            }
          
          />
        </>
    );
}

export default TextBox;