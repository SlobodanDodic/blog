const FormInput = (props) => {
  const { show, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <input {...inputProps} onChange={onChange} type={show ? props.type : 'text'} className='inputs' title={errorMessage} />
  );
};

export default FormInput;