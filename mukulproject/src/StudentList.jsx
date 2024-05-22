import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(storedStudents);
    }, []);

    const handleDelete = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Student List</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b text-left">Name</th>
                            <th className="py-3 px-4 border-b text-left">Age</th>
                            <th className="py-3 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">{student.name}</td>
                                <td className="py-3 px-4 border-b">{student.age}</td>
                                <td className="py-3 px-4 border-b">
                                    <Link to={`edit/${student.id}`} className="mr-4 text-blue-600 hover:text-blue-800 font-semibold">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(student.id)}
                                        className="text-red-600 hover:text-red-800 font-semibold"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
