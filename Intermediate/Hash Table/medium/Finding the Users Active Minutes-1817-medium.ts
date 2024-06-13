function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const userMinutes = new Map<number, Set<number>>();

  for (const [userId, minute] of logs) {
    if (!userMinutes.has(userId)) {
      userMinutes.set(userId, new Set());
    }
    userMinutes.get(userId).add(minute);
  }

  const countUsers = new Array(k).fill(0);

  for (const minutes of userMinutes.values()) {
    countUsers[minutes.size - 1]++;
  }

  return countUsers;
}

console.log(findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]], 5)); // [0,2,0,0,0]