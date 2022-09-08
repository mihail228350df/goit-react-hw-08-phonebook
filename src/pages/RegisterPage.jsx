import { StyledForm, ErrorText } from '../components/Form/MyForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 8 characters long..')
    .required('Password is required'),
  name: Yup.string().required('Name is required'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(authOperations.register(values));
          resetForm();
        }}
      >
        <StyledForm autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" required />
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />
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