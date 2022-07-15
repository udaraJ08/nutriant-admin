import '../../assets/navigation.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutListen} from "../../views/Login/actions";

const TopNavigation = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logoutListen(navigate))
    }

    return <div className='navigation bg-primary d-flex justify-content-end'>
        <button
            onClick={logoutUser}
            className='btn btn-danger'>LOGOUT</button>
    </div>
}

export default TopNavigation
