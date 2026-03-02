import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../public/Login";
import Error401 from "../error/Error401";
import Error403 from "../error/Error403";

export default function PublicRouter({ setSession }) {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setSession={setSession} />} />
            <Route path="/register/users" element={<Navigate to="/" />} />
            <Route path="/home" element={<Error403 />} />
            <Route path="/users" element={<Navigate to="/home" />} />
            <Route path="/auth/*" element={<Error401 />} />
        </Routes>
    );
}