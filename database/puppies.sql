CREATE TABLE Puppy (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO Puppy (name, breed, age, sex)
  VALUES ('Tyler', 'Retrieved', 3, 'M');