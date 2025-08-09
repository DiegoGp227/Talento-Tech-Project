CREATE DATABASE IF NOT EXISTS education;
USE education;

-- Tabla instituciones
CREATE TABLE Institutions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Tabla docentes
CREATE TABLE Teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (institution_id) REFERENCES Institutions(id) ON DELETE CASCADE
);

-- Tabla cursos
CREATE TABLE Courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    description TEXT,
    FOREIGN KEY (teacher_id) REFERENCES Teachers(id) ON DELETE CASCADE
);

-- Tabla estudiantes
CREATE TABLE Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institution_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    FOREIGN KEY (institution_id) REFERENCES Institutions(id) ON DELETE CASCADE
);

-- Tabla relación cursos-estudiantes (muchos a muchos)
CREATE TABLE Course_Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    student_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES Courses(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES Students(id) ON DELETE CASCADE,
    UNIQUE (course_id, student_id)
);

-- Tabla sesiones o clases
CREATE TABLE Sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    session_date DATE NOT NULL,
    FOREIGN KEY (course_id) REFERENCES Courses(id) ON DELETE CASCADE,
    UNIQUE (course_id, session_date)
);

-- Tabla notas y asistencia
CREATE TABLE Grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT NOT NULL,
    student_id INT NOT NULL,
    grade DECIMAL(2,1) CHECK (grade BETWEEN 0.0 AND 5.0),
    attendance BOOLEAN NOT NULL,
    FOREIGN KEY (session_id) REFERENCES Sessions(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES Students(id) ON DELETE CASCADE,
    UNIQUE (session_id, student_id)
);
