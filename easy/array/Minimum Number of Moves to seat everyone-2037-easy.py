def min_moves_to_seat(seats, students):
    total_moves = 0
    seats.sort()
    students.sort()

    for i in range(len(seats)):
        total_moves += abs(seats[i] - students[i])

    return total_moves

result = min_moves_to_seat([3, 1, 5], [2, 7, 4])
print(result)
