class SalaryCalculator:
    def __init__(self, ppa):
        self.ppa = ppa
        self.monthly_salary = self.ppa/12
        self.pro_tx = 200
        self.basic_da = self.monthly_salary * 50 / 100
        self.hra = self.monthly_salary * 10 / 100
        self.conveyance = 1600
        self.pf = self.monthly_salary * 12 / 100
        self.esic = self.monthly_salary * 0.75 / 100
        self.net_salary = self.monthly_salary - self.hra - self.pf - self.esic - self.pro_tx - self.conveyance
        print(self.ppa, self.monthly_salary, self.pro_tx, self.basic_da, self.hra, self.conveyance, self.pf, self.esic, self.net_salary)

salaryCal = SalaryCalculator(200000)