#!/bin/bash

# variables
name="John"

# user input
read -p "Enter your favourite color and age: " color age

# variable assignment
name="$color"

# displaying variables
echo "Name: $name Color: $color Age: $age"

# conditional statement
if [ "$age" -lt 18 ]; then
  echo "You are a minor."
else
  echo "You are an adult."
fi

# loops
echo "Counting to 5:"
for i in {1..5}; do
	echo "$i"
done

# function
greet() {
  echo "Hello, $1 $2!"
}

greet "Alice" "Buga"

# file operation
filename="sample.txt"
touch $filename
echo "File '$filename' created."

if [ -e "$filename" ]; then
	echo "File exists."
else 
	echo "File does not exist."
fi

# command line arguments
echo "First argument: $1"
echo "Second argument: $2"

# exit status
ls /nonexisting-folder
echo "Exit status: $?"

# arrays
fruits=("Apple" "Orange" "Banana")
echo "Fruits: ${fruits[@]}"
echo "Second fruit: ${fruits[1]}"

# error handling
trap 'echo "Error occured"; exit 1' ERR

# end of script
echo "Script executed successfully."

