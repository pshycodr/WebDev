# problem description:-
# Given an array A of size N, Groot wants you to pick 2 indices i and j such that
# 1. 1<=i, j<=N
# 2. A[i]%A[j] is maximum among all possible pairs of (i,j) .
# help groot in finding the maximum value of A[i]%A[j] for some i, j.

# problem constrains:-
# 1<= N <= 100000
# 0<= A[i] <= 100000

# input format:-
# first and only argument in an integer array A.

# output format:-
# return an integer denoting tge maximum value of A[i]%A[j] for any valid i,j.

# example input:-
# 		input 1-
#       A = [1,2,44,3]
#   	input 2-
#       A = [2,6,4]

# example output:-
#     output 1-
#          3
#     output 1-
#          4

def max_remainder(A):
    max_val = max(A)
    second_max_val = max(A)
    for num in A:
        if num > second_max_val and num < max_val:
            second_max_val = num
    
    return max_val % second_max_val

# Example usage:
A1 = [1, 2, 44, 3]
A2 = [2, 6, 4]
print(max_remainder(A1))  # Output: 3
print(max_remainder(A2))  # Output: 4



