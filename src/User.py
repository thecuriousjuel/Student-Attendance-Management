"This file will contain all the functions that are common between Teacher and Student"


class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def login(self):
        if self.email == email and self.password == password:
            return True
        else:
            return False

    def change_password(self, old_password, new_password):
        if self.password == old_password:
            self.password = new_password
            return True
        else:
            return False