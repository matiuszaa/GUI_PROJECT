import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";

export const Dashboard = ({login, setLogin}) => {
  const navigate = useNavigate();

  useEffect(() => {
    let t = localStorage.getItem('login')
    if (t) {
      setLogin(t);
    } else {
      navigate('/login');
    }
  }, [])

  const logout = () => {
    setLogin('');
    localStorage.clear();
    navigate('/login');
  }

  return (
    <div className="Dashboard">
      <DashboardLayout logout={logout} className="DashboardLayout" />
    </div>
  )
}