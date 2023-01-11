import "./AppHeader.css"
import i18n from './../trans/i18n';

function handleLanguageChange(event) {
    i18n.changeLanguage(event.target.value);
  }

export function AppHeader() {
    return(
        <div className="AppHeader">
            <div>
                <a>Dashboard</a>
            </div>
        <div>
        <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="pl">Polish</option>
        </select>
        </div>
        </div>
    )
}