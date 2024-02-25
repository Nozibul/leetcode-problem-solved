class Solution(object):
    def lengthOfLastWord(self, s):
         words = s.rstrip().split()
         if words: return len(words[-1])
         else: return 0 