import React from 'react';
import StudentCard from './studentcard'; 

function App() {
  const students = [
    {
      id: '124325',
      name: 'minh',
      image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fconcept3d.com%2Fwp-content%2Fuploads%2F2023%2F08%2FStudent-with-more-access-to-academic-resources-due-to-efforts-to-boost-student-retention-and-persistence.jpg&tbnid=HLzluJOsJPFPWM&vet=12ahUKEwjX25aFh6ODAxUodPUHHUYTA18QMygFegQIARB3..i&imgrefurl=https%3A%2F%2Fconcept3d.com%2Fblog%2Fhigher-ed%2F6-modern-strategies-boost-student-retention-and-persistence%2F&docid=2wknPaEz57O7tM&w=1262&h=830&q=student&ved=2ahUKEwjX25aFh6ODAxUodPUHHUYTA18QMygFegQIARB3',
      email: 'bi066109@gmail.com@example.com',
    },
  ];

  return (
    <div className="App">
      <h1>List of Students</h1>
      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            image={student.image}
            email={student.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
