import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: '', age: '' });

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        const studentToEdit = storedStudents.find((student) => student.id === parseInt(id));
        if (studentToEdit) {
            setStudent(studentToEdit);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        const updatedStudents = storedStudents.map((stu) => (stu.id === parseInt(id) ? student : stu));
        localStorage.setItem('students', JSON.stringify(updatedStudents));
        navigate('/Dashboard');
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Edit Student</h3>
            <div>
                <label className="block mb-2">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </div>
            <div>
                <label className="block mb-2">Age:</label>
                <input
                    type="text"
                    name="age"
                    value={student.age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </div>
            <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded">
                Save
            </button>
        </div>
    );
};

export default EditStudent;
