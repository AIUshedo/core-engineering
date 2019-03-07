# array = [1,2,3]
# word = ["one","two","three"]
# reverse_words = word.map do |word|
#   word.reverse
# end
numbers = [1, 4, 5, 2, 3, 1, 2, 4]
# sum = numbers.reduce 0 do |total, number|
#   total + number
#
# end
# puts sum

sum = numbers.inject 0, :+
puts sum
