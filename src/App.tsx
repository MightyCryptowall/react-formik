
import { Formik } from 'formik';
import './App.css';

function App() {


  const handleSubmit = (values: any) => {};

  return (
    <div className="App">
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {() => {
          return null;
        }}  
      </Formik>      
    </div>
  );
}

export default App;
