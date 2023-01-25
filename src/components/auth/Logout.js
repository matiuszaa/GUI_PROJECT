import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Logout = ({setLogin}) => {
    const navigate = useNavigate();
    const [ln, i18n] = useTranslation();
    
    const logout = () => {
        setLogin('');
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="logout" onClick={logout}>{ln('logout')}</div>
    )
}

export default Logout;