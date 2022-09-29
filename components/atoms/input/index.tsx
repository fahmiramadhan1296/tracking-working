import { TInputModel } from "./input";
import { CustomTextfield } from "./styled";


const Input: React.FC<TInputModel> = (props) => {  
  return <CustomTextfield {...props} />;
};

export default Input;