import sqlite3

def initdb():
    link = sqlite3.connect("Kenshin_Zone.db")
    cursor = link.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users
    (IDuser INTEGER PRIMARY KEY, email TEXT not NULL, user TEXT not NULL, password TEXT not NULL, gender TEXT not NULL, body_weight FLOAT not NULL, time INTEGER not NULL, XP INTEGER not NULL)''')
    cursor.execute('''CREATE TABLE IF NOT EXISTS workouts
                   (IDworkout INTEGER PRIMARY KEY, name TEXT not NULL, IDUSER INTEGER not NULL, FOREIGN KEY (IDUSER) REFERENCES users (IDuser) )''')
    cursor.execute('''CREATE TABLE IF NOT EXISTS exercises
                   (IDexercise INTEGER PRIMARY KEY, name TEXT not NULL, muscular_group TEXT not NULL)''')    
    cursor.execute('''CREATE TABLE IF NOT EXISTS progressions
                (date DATE, weight FLOAT not NULL, reps INTEGER not NULL, sets INTEGER not NULL)''')    
    


if __name__ == "main":
    initdb()

