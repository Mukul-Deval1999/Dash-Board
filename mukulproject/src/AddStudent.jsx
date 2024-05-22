import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
        const newStudent = { id: Date.now(), name, age };
        storedStudents.push(newStudent);
        localStorage.setItem("students", JSON.stringify(storedStudents));
        navigate("/dashboard");
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Add Student</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Age</label>
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
