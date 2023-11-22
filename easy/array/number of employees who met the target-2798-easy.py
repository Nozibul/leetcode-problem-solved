def number_of_employees_who_met_target(hours, target):
    return sum(1 for cur_hours in hours if cur_hours >= target)

result = number_of_employees_who_met_target([0, 1, 2, 3, 4], 2)
print(result)  // Output: 3
