import '../styles/Error.css';

function Error({ error }) {
  return (
    <p className={`error-text ${error ? 'show-error' : 'hide-error'}`}>
      {error}
    </p>
  );
}
export default Error;
