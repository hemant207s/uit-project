/*import React, { useState } from "react"; 
import "./App.css";
function CGPACalculator() { 
const subjects = ["UIT", "Python Programing", "Data Structures", "English II", 
"Maths II"]; 
const [grades, setGrades] = useState(Array(subjects.length).fill("")); 
const [cgpa, setCGPA] = useState(null);
const handleChange = (index, value) => { 
    const newGrades = [...grades];
    newGrades[index] = value; 
setGrades(newGrades); 
}; 
const calculateCGPA = () => { 
const gradePoints = { C: 5, B: 6, "B+": 7, A: 8, "A+": 9, O: 10 };
const totalPoints = grades.reduce((acc, grade) => acc + (gradePoints[grade] || 0), 0);
const calculatedCGPA = totalPoints / subjects.length; 
setCGPA(calculatedCGPA.toFixed(2)); 
}; 
return ( 
    <div className="container"> 
      <h2>CGPA Calculator</h2> 
      {subjects.map((subject, index) => (
       <div key={index} className="subject"> 
       <label>{subject}: </label> 
       <select value={grades[index]} onChange={(e) => handleChange(index, 
e.target.value)}> 
         <option value="">Select Grade</option> 
         <option value="O">O</option> 
         <option value="A+">A+</option> 
         <option value="A">A</option> 
         <option value="B+">B+</option> 
         <option value="B">B</option> 
         <option value="C">C</option> 
       </select> 
     </div> 
   ))} 
   <br /> 
   <button onClick={calculateCGPA}>Calculate CGPA</button> 
   {cgpa !== null && <h3>Your CGPA: {cgpa}</h3>} 
 </div> 
); 
} 
export default CGPACalculator;
/*import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
const UserList = () => { 
const [users, setUsers] = useState([]); 
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(null); 
useEffect(() => { 
// Fetch data from the API 
axios.get('https://jsonplaceholder.typicode.com/users') 
.then(response => { 
setUsers(response.data); 
setLoading(false); 
}) 
.catch(error => { 
setError(error); 
setLoading(false); 
}); 
}, []); 
if (loading) return <p>Loading...</p>; 
if (error) return <p>Error: {error.message}</p>; 
return ( 
<div> 
<h2>User List</h2> 
<ul> 
{users.map(user => ( 
<li key={user.id}>{user.name} ({user.email})</li> 
))} 
</ul> 
</div> 
); 
}; 
export default UserList; 
/*App.jsx 
import React from 'react'; 
import UserList from './UserList'; 
const App = () => { 
return ( 
<div className="App"> 
<h1>HTTP Request and Response Example</h1> 
<UserList /> 
</div> 
); 
}; 
export default App;*/
import React from 'react'; 
import UserList from './components/Home'; 
const App = () => { 
return ( 
<div className="App"> 
<h1></h1> 
<UserList /> 
</div> 
); 
}; 
export default App;