import { Formik } from "formik";

const Login = () => {
  return (
    <div className="login-form">
        <h1>Login</h1>
        <Formik
        initialValues={{email:'',password:''}}
        validate={values => {
            const errors = {};
            if(!values.email){
                errors.email = 'Required';
            }
            else if 
            ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if(!values.password){
                errors.password = 'Required';
              }
              if(values.password.length < 8){
                errors.password = 'password length should be more than 8 chars';
              }
              return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values,null,2));
                setSubmitting(false);
            },400);
        }}  
        >
{ formik => (
         <form onSubmit={formik.handleSubmit}>
           <input
             id="email"
             type="email"
             name="email"
             placeholder="johndoe@gmail.com"
             className="login-input"
            {...formik.getFieldProps('email')}
           />
           {formik.touched.email && formik.errors.email ? (
             <div className="error">{formik.errors.email}</div> ) : null }
           <input
             id="password"
             type="password"
             name="password"
             placeholder="Enter Password"
             className="login-input"
            {...formik.getFieldProps('password')}
           />
            {formik.touched.password && formik.errors.password ? (
             <div className="error">{formik.errors.password}</div> ) : null }
          <button className="login-button" type="submit" disabled={formik.isSubmitting}>
             Submit
           </button>
         </form>
       )}            
        </Formik>
    </div>
  )
}

export default Login;