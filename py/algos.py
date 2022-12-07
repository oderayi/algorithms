def min_coins(cents):
    if cents < 1:
        return 0
    coins = [25, 10, 5, 1]
    num_of_coins = 0
    for coin in coins:
        num_of_coins += cents // coin
        cents = cents % coin
        if cents == 0:
            break
    return num_of_coins

#print(min_coins(31))


def most_frequent(nums):
    """ Returns most frequent integer in a list of integers.
    """
    freqs = {}
    for num in nums:
        freqs[num] = freqs[num] + 1 if num in freqs else 1
    max_num = 0
    max_freq = 0
    for k, v in freqs.items():
        if v > max_freq:
            max_freq = v
            max_num = k
    return max_num

# print(most_frequent([1,1,2,3,3,3,4]))

def sum_of_pairs(nums, n):
    """ Returns pairs of integers adding up to a number.
    Given an array of integers and an integer n,
    print/return all the pairs of integers whose sum is n.

    Examples:
    {1, 2, 9, 12}, 10 => 1 9
    {1, 9, 1, 9}, 10 => 1 9 \n 1 9
    {1, 9, 1}, 10 => 1 9

    Each number can only be used in a pair once.
    """
    pairs = []
    for ki in range(len(nums)-1):
        for kj in range(len(nums)-1):
            if ki == kj:
                continue
            if nums[ki] + nums[kj] == n:
                pairs.append((nums[ki], nums[kj]))
                del nums[kj]
                break

    return pairs

#print(sum_of_pairs([1, 2, 9, 12], 10))

def find_non_repeat_num(nums):
    """ Returns the unrepeated number in a list of mostly repeated numbers.
    Given an array of integers, you may assume that every element appears twice exceppt one.
    (So len(a) >= 3)
    Using bit manipulation (xor)
    Return the element
    """
    n = 0
    for num in nums:
        n = num ^ n
    return n

print(find_non_repeat_num([1,1,3,3,4]))