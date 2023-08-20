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
            }else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
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
{({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             placeholder="johndoe@gmail.com"
             className="login-input"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <div className="login-input-feedback">{errors.email && touched.email && errors.email}</div>
           <input
             type="password"
             name="password"
             placeholder="Enter Password"
             className="login-input"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <div className="login-input-feedback">{errors.password && touched.password && errors.password && errors.password}</div>
           <button className="login-button" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}            
        </Formik>
    </div>
  )
}

export default Login;