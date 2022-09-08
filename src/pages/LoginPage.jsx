import { StyledForm, ErrorText } from '../components/Form/MyForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(authOperations.logIn(values));
          resetForm();
        }}
      >
        <StyledForm autoComplete="off">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" required />
          <ErrorMessage
            name="email"
            render={message => <ErrorText>{message}</ErrorText>}
          />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" required />
          <ErrorMessage
            name="password"
            render={message => <ErrorText>{message}</ErrorText>}
          />

          <button type="submit">LogIn</button>
        </StyledForm>
      </Formik>
    </div>
  );
}