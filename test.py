import mysql.connector 
connection = mysql.connector.connect(
    host = "localhost",
    username = "root",
    password = "",
    database="medical_service"
)
cursor = connection.cursor()
cursor.execute("SELECT * FROM doctors")

results = cursor.fetchall()
for row in results:
    print(row)
# def add_patients(connection):
#     cursor = connection.cursor()
#     patients = [
#         ("gay beo", "2020-01-01", "Nam", "Ha Noi", "123456789", "beo@example.com"),
#         ("Beo gay", "1990-05-15", "Nu", "Ha Noi", "987654321", "beogay@example.com"),
#         ("ngu dan", "1985-09-30", "Nam", "HCM", "111222333", "ngu@example.com")
#     ]
#     for patient in patients:
#         cursor.execute("INSERT INTO patients (full_name, date_of_birth, gender, address, phone_number, email) VALUES (%s, %s, %s, %s, %s, %s)", patient)
#     connection.commit()
# def add_doctors(connection):
#     cursor = connection.cursor()
#     doctors = [
#         ("Nguyen Si", "moc tim", "123456789", "nguyensi@example.com", 10),
#         ("Tran Binh", "moc ruot", "987654321", "tranbinh@example.com", 5),
#         ("Pham Mai", "moc mau", "555666777", "phammai@example.com", 8),
#         ("Le Hoa", "moc nao", "333444555", "lehoa@example.com", 12),
#         ("Vu Lam", "moc dau", "444555666", "vulam@example.com", 7)
#     ]
#     for doctor in doctors:
#         cursor.execute("INSERT INTO doctors (full_name, specialization, phone_number, email, years_of_experience) VALUES (%s, %s, %s, %s, %s)", doctor)
#     connection.commit()

def add_appointments(connection):
    cursor = connection.cursor()
    appointments = [
        (1, 1, "2024-1-09 10:00:00", "die"),
        (2, 2, "2024-10-30 11:00:00", "die"),
        (3, 3, "2024-11-02 14:00:00", "die")
    ]
    for appointment in appointments:
        cursor.execute("INSERT INTO appointments (patient_id, doctor_id, appointment_date, reason) VALUES (%s, %s, %s, %s)", appointment)
    connection.commit()
# add_patients(connection)
# add_doctors(connection)        
add_appointments(connection)
