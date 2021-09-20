CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    email varchar(255)
);

INSERT INTO users (name, email) values ('Marlin', 'marlin@gmail.com');

INSERT INTO users (name, email) values ('Nemo', 'nemo@gmail.com');

INSERT INTO users (name, email) values ('Dory', 'dory@gmail.com');

-- const event1 = {
--         id: 1,
--         name: "Birthday",
--         date: "2021-09-01",
--         description: "A birthday party for my best friend",
--         category: "Celebration",
--       };

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    date date,
    description text,
    category varchar(255)
)

INSERT INTO events (name, date, description, category) values ('Birthday','2021-09-01', 'A birthday party for my best friend', 'Celebration');

 const event2 = {
        id: 2,
        name: "Graduation",
        date: "2021-08-01",
        description: "The class of 2021 graduates from East High",
        category: "Education",
      };

INSERT INTO events (name, date, description, category) values ('Graduation','2021-08-01', 'The class of 2021 graduates from East High', 'Education');
      
      const event3 = {
        id: 3,
        name: "JS Study Session",
        date: "2021-10-01",
        description: "A chance to practice Javascript interview questions",
        category: "Education",
      };
INSERT INTO events (name, date, description, category) values ('JS Study Session','2021-10-01', 'A chance to practice Javascript interview questions', 'Education');