import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import Image from 'next/image';
import styles from '../styles/SignUp.module.css';

function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  // Redirect to /home if logged in
  const router = useRouter();
  if (user.token) {
    router.push('/home');
  }

  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To store any error message

  const handleSubmit = () => {
    fetch('http://localhost:3002/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          dispatch(login({ token: data.token, username, firstName }));
        } else {
          setError(data.error || 'Something went wrong!');
        }
      })
      .catch((err) => {
        console.error('Error during signup:', err);
        setError(`An error occurred: ${err.message}`);
      });
  };

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <h3 className={styles.title}>Create your Hackatweet account</h3>
      {error && <p className={styles.error}>{error}</p>} 
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        placeholder="Firstname"
      />
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Username"
      />
      <input
        type="password"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <button className={styles.button} onClick={() => handleSubmit()}>
        Sign up
      </button>
    </div>
  );
}

export default SignUp;
