import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ctxAuth } from "../../context/ctxAuth";

const Logout = () => {
    const navigate = useNavigate();
    const {authState, login, logout} = useContext(ctxAuth);
    const [ln, i18n] = useTranslation();

    return (
        <a className="logout" onClick={e => {
            e.preventDefault();
            logout();
            navigate('/');
        }}>{ln('logout')}</a>
    )
}

export default Logout;