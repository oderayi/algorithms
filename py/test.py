def max_earnings(earnings_per_fight):
  num_fights = len(earnings_per_fight)
  if num_fights == 0:
    return 0
  if num_fights == 1:
    return max(0, earnings_per_fight[0])

  dp = [0] * num_fights
  dp[0] = earnings_per_fight[0]
  # dp[1] = earnings_per_fight[1]


  for i in range(1,num_fights):
    dp[i] = max(earnings_per_fight[i] + dp[i-1], dp[i])
  
  print(dp)
  
  return max(0,dp[num_fights-1])


def _max_earnings(arr):
    incl = 0
    excl = 0
    new_excl = 0
    
    for i in arr:
        
        # Current max including i
        incl = excl + i
        excl = new_excl

        # Current max excluding i (No ternary in
        # Python)
        new_excl = excl if excl>incl else incl
     
    # return max of incl and excl
    return max(0,(excl if excl>incl else incl))
	
	
	
print(max_earnings([1,2,5,2]))
print(max_earnings([6,2,5,8,0,1]))

print('===================================')
	
print(_max_earnings([1,2,5,2]))
print(_max_earnings([6,2,5,8,0,1]))