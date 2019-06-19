import {connect} from "react-redux";
import makeRegistration from "../../makers/makeForm";
import {signupUser} from "../../../actions";

const Registration = makeRegistration("handleSignup");

function mapStateToProps(
    {
        registration: {
            registering,
            error
        }
    }
) {
    return {
        registering,
        error
    };
}

export default connect(
        mapStateToProps,
        {signupUser}
)(Registration)
