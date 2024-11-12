import sqlite3

def initdb():
    link = sqlite3.connect("Kenshin_Zone.db")
    cursor = link.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users
    (ID INTEGER PRIMARY KEY, user TEXT, password TEXT)''')

if __name__ == "main":
    initdb()