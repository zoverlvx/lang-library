import {connect} from "react-redux";
import makeLogin from "../../makers/makeForm";
import {loginUser} from "../../../actions"

const Login = makeLogin("handleLogin");

function mapStateToProps(
        {
            registration: {
                loggingIn,
                error
            }
        }
) {
    return {
        loggingIn,
        error
    }
}

export default connect(mapStateToProps, {loginUser})(Login);
