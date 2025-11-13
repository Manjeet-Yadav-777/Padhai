import { createContext, useContext, useState } from "react";

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);

  return (
    <TeacherContext.Provider value={{ teachers, setTeachers }}>
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacher = () => useContext(TeacherContext);
