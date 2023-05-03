import PropTypes from 'prop-types'; 
function Form ({formInputChildren,handleSubmit}){
    return (
        <form className="loginForm" onSubmit={handleSubmit} >
        {formInputChildren}
        <div className="formInput">
        <input  type='submit' value='Log In' />
        </div>
     </form>
     );
}
Form.propTypes={
    formInputChildren:PropTypes.array.isRequired,
    handleSubmit:PropTypes.func.isRequired,
}
export default Form;