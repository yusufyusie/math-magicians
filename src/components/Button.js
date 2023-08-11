import './styles.css';

function Button() {
  return (
    <div className="operations subgrid">

      {/* division btn */}
      <button type="button">
        {' '}
        ÷
      </button>

      {/* multiplication btn */}
      <button type="button">
        {' '}
        x
      </button>

      {/* minus btn */}
      <button type="button">
        {' '}
        -
        {' '}
      </button>

      {/* add button */}
      <button type="button">
        +
      </button>

      {/* "=" btn */}
      <button
        type="button"
      >
        =
      </button>
    </div>
  );
}
export default Button;
