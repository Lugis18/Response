import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../auth/Home";
import Error401 from "../error/Error401";
import Error403 from "../error/Error403";
import Response201 from "../res/Response201";


export default function AuthRouter({ setSession }) {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Error401 />} />
            <Route path="/auth/*" element={<Response201 />} />
            <Route path="*" element={<Error403 />} />
        </Routes>
    );
}