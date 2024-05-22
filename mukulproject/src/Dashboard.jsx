import { Link, Route, Routes } from "react-router-dom";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <header className="bg-blue-600 text-white p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Dashboard</h2>
                        <Link
                            to="add-student"
                            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                        >
                            Add Student
                        </Link>
                    </div>
                </header>
                <main className="p-6">
                    <Routes>
                        <Route path="/" element={<StudentList />} />
                        <Route path="add-student" element={<AddStudent />} />
                        <Route path="edit/:id" element={<EditStudent />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
