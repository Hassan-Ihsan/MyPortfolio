import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../src/styles/contact.module.css'; 
import axios from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().min(3,"minimum 3 character").required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};


  const Contact = () => {
    const handleSubmit = async (values, { resetForm }) => {
      try {
        const res= await axios.post("https://formspree.io/f/xwkgowel", values);
        console.log(res)
        toast.success('Submitted successfully!');
        resetForm();
      
       }
        catch (error) {
         toast.error('Failed to submit.Please try again later.');
       }
    };
    // , { position: toast.POSITION.TOP_RIGHT }
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div className={styles.heading}style={{textAlign:"center",paddingBottom:"5rem ", color:"aqua"}}><h1 >Contact <span style={{color:"white"}}>Me</span></h1></div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form >
            <div className={styles.group}>
              <label htmlFor="name">Name :</label>
              <Field type="text" id="name" name="name" placeholder="Enter Your Name" /><br />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div className={styles.group}>
              <label htmlFor="email">Email :</label>
              <Field type="email" id="email" name="email"placeholder="Enter Your Email" /><br />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div className={styles.group}>
              <label htmlFor="message">Message :</label>
              <Field as="textarea" id="message" name="message" placeholder="Enter Your Message"/><br />
              <ErrorMessage name="message" component="div" className={styles.error} />
            </div>

            <button type="submit" className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Contact;
