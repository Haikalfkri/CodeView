export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here

}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      dart: `List<int> twoSum(List<int> nums, int target) {
  final map = <int, int>{};

  for (var i = 0; i < nums.length; i++) {
    final need = target - nums[i];

    if (map.containsKey(need)) {
      return [map[need]!, i];
    }

    map[nums[i]] = i;
  }

  return [];
}

void main() {
  print(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
  print(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
  print(twoSum([3, 3], 6)); // Expected: [0, 1]
}`,
      php: `<?php

function twoSum(array $nums, int $target): array {
    $map = [];

    foreach ($nums as $i => $num) {
        $need = $target - $num;

        if (array_key_exists($need, $map)) {
            return [$map[$need], $i];
        }

        $map[$num] = $i;
    }

    return [];
}

echo json_encode(twoSum([2, 7, 11, 15], 9)) . "\\n";
echo json_encode(twoSum([3, 2, 4], 6)) . "\\n";
echo json_encode(twoSum([3, 3], 6));`,
      rust: `use std::collections::HashMap;

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<usize> {
    let mut map = HashMap::new();

    for (i, &num) in nums.iter().enumerate() {
        let need = target - num;

        if let Some(&index) = map.get(&need) {
            return vec![index, i];
        }

        map.insert(num, i);
    }

    vec![]
}

fn main() {
    println!("{:?}", two_sum(vec![2, 7, 11, 15], 9)); // Expected: [0, 1]
    println!("{:?}", two_sum(vec![3, 2, 4], 6)); // Expected: [1, 2]
    println!("{:?}", two_sum(vec![3, 3], 6)); // Expected: [0, 1]
}`,
      ruby: `def two_sum(nums, target)
  map = {}

  nums.each_with_index do |num, i|
    need = target - num

    return [map[need], i] if map.key?(need)

    map[num] = i
  end

  []
end

puts two_sum([2, 7, 11, 15], 9).inspect # Expected: [0, 1]
puts two_sum([3, 2, 4], 6).inspect # Expected: [1, 2]
puts two_sum([3, 3], 6).inspect # Expected: [0, 1]`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (map.has(need)) {
      return [map.get(need)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      dart: "[0, 1]\n[1, 2]\n[0, 1]",
      php: "[0,1]\n[1,2]\n[0,1]",
      rust: "[0, 1]\n[1, 2]\n[0, 1]",
      ruby: "[0, 1]\n[1, 2]\n[0, 1]",
      typescript: "[0,1]\n[1,2]\n[0,1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁵",
      "s[i] is a printable ascii character",
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here

}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here

    }

    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1));

        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2));
    }
}`,
      dart: `void reverseString(List<String> s) {
  int left = 0;
  int right = s.length - 1;

  while (left < right) {
    final temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}

void main() {
  final test1 = ['h', 'e', 'l', 'l', 'o'];
  reverseString(test1);
  print(test1);

  final test2 = ['H', 'a', 'n', 'n', 'a', 'h'];
  reverseString(test2);
  print(test2);
}`,
      php: `<?php

function reverseString(array &$s): void {
    $left = 0;
    $right = count($s) - 1;

    while ($left < $right) {
        $temp = $s[$left];
        $s[$left] = $s[$right];
        $s[$right] = $temp;

        $left++;
        $right--;
    }
}

$test1 = ["h", "e", "l", "l", "o"];
reverseString($test1);
echo json_encode($test1) . "\\n";

$test2 = ["H", "a", "n", "n", "a", "h"];
reverseString($test2);
echo json_encode($test2);`,
      rust: `fn reverse_string(s: &mut Vec<char>) {
    s.reverse();
}

fn main() {
    let mut test1 = "hello".chars().collect::<Vec<_>>();
    reverse_string(&mut test1);
    println!("{:?}", test1);

    let mut test2 = "Hannah".chars().collect::<Vec<_>>();
    reverse_string(&mut test2);
    println!("{:?}", test2);
}`,
      ruby: `def reverse_string(s)
  s.reverse!
end

test1 = %w[h e l l o]
reverse_string(test1)
p test1

test2 = %w[H a n n a h]
reverse_string(test2)
p test2`,
      typescript: `function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

const test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1);

const test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2);`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      dart: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      php: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      rust: "[\"o\", \"l\", \"l\", \"e\", \"h\"]\n[\"h\", \"a\", \"n\", \"n\", \"a\", \"H\"]",
      ruby: '["o", "l", "l", "e", "h"]\n["h", "a", "n", "n", "a", "H"]',
      typescript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here

}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome(" "))`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindrome("race a car"));
        System.out.println(isPalindrome(" "));
    }
}`,
      dart: `bool isPalindrome(String s) {
  final cleaned = s
      .toLowerCase()
      .replaceAll(RegExp(r'[^a-z0-9]'), '');

  return cleaned == cleaned.split('').reversed.join('');
}

void main() {
  print(isPalindrome("A man, a plan, a canal: Panama"));
  print(isPalindrome("race a car"));
  print(isPalindrome(" "));
}`,
      php: `<?php

function isPalindrome(string $s): bool {
    $s = strtolower(preg_replace('/[^a-z0-9]/i', '', $s));
    return $s === strrev($s);
}

echo isPalindrome("A man, a plan, a canal: Panama") ? "true\\n" : "false\\n";
echo isPalindrome("race a car") ? "true\\n" : "false\\n";
echo isPalindrome(" ") ? "true" : "false";`,
      rust: `fn is_palindrome(s: &str) -> bool {
    let cleaned: String = s
        .chars()
        .filter(|c| c.is_ascii_alphanumeric())
        .flat_map(|c| c.to_lowercase())
        .collect();

    cleaned.chars().eq(cleaned.chars().rev())
}

fn main() {
    println!("{}", is_palindrome("A man, a plan, a canal: Panama"));
    println!("{}", is_palindrome("race a car"));
    println!("{}", is_palindrome(" "));
}`,
      ruby: `def is_palindrome(s)
  cleaned = s.downcase.gsub(/[^a-z0-9]/, "")
  cleaned == cleaned.reverse
end

puts is_palindrome("A man, a plan, a canal: Panama")
puts is_palindrome("race a car")
puts is_palindrome(" ")`,
      typescript: `function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      dart: "true\nfalse\ntrue",
      php: "true\nfalse\ntrue",
      rust: "true\nfalse\ntrue",
      ruby: "true\nfalse\ntrue",
      typescript: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here

}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([1]))
print(maxSubArray([5,4,-1,7,8]))`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(maxSubArray(new int[]{1}));
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
      dart: `int maxSubArray(List<int> nums) {
  var current = nums[0];
  var best = nums[0];

  for (var i = 1; i < nums.length; i++) {
    current = current > 0 ? current + nums[i] : nums[i];
    if (current > best) {
      best = current;
    }
  }

  return best;
}

void main() {
  print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
  print(maxSubArray([1]));
  print(maxSubArray([5,4,-1,7,8]));
}`,
      php: `<?php

function maxSubArray(array $nums): int {
    $current = $nums[0];
    $best = $nums[0];

    for ($i = 1; $i < count($nums); $i++) {
        $current = max($nums[$i], $current + $nums[$i]);
        $best = max($best, $current);
    }

    return $best;
}

echo maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) . "\\n";
echo maxSubArray([1]) . "\\n";
echo maxSubArray([5,4,-1,7,8]);`,
      rust: `fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut current = nums[0];
    let mut best = nums[0];

    for &x in &nums[1..] {
        current = x.max(current + x);
        best = best.max(current);
    }

    best
}

fn main() {
    println!("{}", max_sub_array(vec![-2,1,-3,4,-1,2,1,-5,4]));
    println!("{}", max_sub_array(vec![1]));
    println!("{}", max_sub_array(vec![5,4,-1,7,8]));
}`,
      ruby: `def max_sub_array(nums)
  current = nums[0]
  best = nums[0]

  nums[1..].each do |x|
    current = [x, current + x].max
    best = [best, current].max
  end

  best
end

puts max_sub_array([-2,1,-3,4,-1,2,1,-5,4])
puts max_sub_array([1])
puts max_sub_array([5,4,-1,7,8])`,
      typescript: `function maxSubArray(nums: number[]): number {
  let current = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }

  return best;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      dart: "6\n1\n23",
      php: "6\n1\n23",
      rust: "6\n1\n23",
      ruby: "6\n1\n23",
      typescript: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: [
      "n == height.length",
      "2 ≤ n ≤ 10⁵",
      "0 ≤ height[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here

}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));`,
      python: `def maxArea(height):
    # Write your solution here
    pass

print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(maxArea(new int[]{1,1}));
    }
}`,
      dart: `int maxArea(List<int> height) {
  var left = 0;
  var right = height.length - 1;
  var best = 0;

  while (left < right) {
    final area = (right - left) *
        (height[left] < height[right] ? height[left] : height[right]);

    if (area > best) {
      best = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return best;
}

void main() {
  print(maxArea([1,8,6,2,5,4,8,3,7]));
  print(maxArea([1,1]));
}`,
      php: `<?php

function maxArea(array $height): int {
    $left = 0;
    $right = count($height) - 1;
    $best = 0;

    while ($left < $right) {
        $area = ($right - $left) * min($height[$left], $height[$right]);
        $best = max($best, $area);

        if ($height[$left] < $height[$right]) {
            $left++;
        } else {
            $right--;
        }
    }

    return $best;
}

echo maxArea([1,8,6,2,5,4,8,3,7]) . "\\n";
echo maxArea([1,1]);`,
      rust: `fn max_area(height: Vec<i32>) -> i32 {
    let mut left = 0usize;
    let mut right = height.len() - 1;
    let mut best = 0;

    while left < right {
        let area = (right - left) as i32 * height[left].min(height[right]);
        best = best.max(area);

        if height[left] < height[right] {
            left += 1;
        } else {
            right -= 1;
        }
    }

    best
}

fn main() {
    println!("{}", max_area(vec![1,8,6,2,5,4,8,3,7]));
    println!("{}", max_area(vec![1,1]));
}`,
      ruby: `def max_area(height)
  left = 0
  right = height.length - 1
  best = 0

  while left < right
    best = [best, (right - left) * [height[left], height[right]].min].max

    if height[left] < height[right]
      left += 1
    else
      right -= 1
    end
  end

  best
end

puts max_area([1,8,6,2,5,4,8,3,7])
puts max_area([1,1])`,
      typescript: `function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    best = Math.max(
      best,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return best;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      dart: "49\n1",
      php: "49\n1",
      rust: "49\n1",
      ruby: "49\n1",
      typescript: "49\n1",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [
        "You should determine whether any duplicate values exist.",
        "The order of the elements does not matter.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The value 1 appears more than once.",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "Every value appears exactly once.",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
        explanation: "Multiple values appear more than once.",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here

}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));
    }
}`,
      dart: `bool containsDuplicate(List<int> nums) {
  final seen = <int>{};

  for (final num in nums) {
    if (!seen.add(num)) {
      return true;
    }
  }

  return false;
}

void main() {
  print(containsDuplicate([1,2,3,1]));
  print(containsDuplicate([1,2,3,4]));
  print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
}`,
      php: `<?php

function containsDuplicate(array $nums): bool {
    return count($nums) !== count(array_unique($nums));
}

echo containsDuplicate([1,2,3,1]) ? "true\\n" : "false\\n";
echo containsDuplicate([1,2,3,4]) ? "true\\n" : "false\\n";
echo containsDuplicate([1,1,1,3,3,4,3,2,4,2]) ? "true" : "false";`,
      rust: `use std::collections::HashSet;

fn contains_duplicate(nums: Vec<i32>) -> bool {
    let mut seen = HashSet::new();

    for num in nums {
        if !seen.insert(num) {
            return true;
        }
    }

    false
}

fn main() {
    println!("{}", contains_duplicate(vec![1,2,3,1]));
    println!("{}", contains_duplicate(vec![1,2,3,4]));
    println!("{}", contains_duplicate(vec![1,1,1,3,3,4,3,2,4,2]));
}`,
      ruby: `def contains_duplicate(nums)
  nums.uniq.length != nums.length
end

puts contains_duplicate([1,2,3,1])
puts contains_duplicate([1,2,3,4])
puts contains_duplicate([1,1,1,3,3,4,3,2,4,2])`,
      typescript: `function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      dart: "true\nfalse\ntrue",
      php: "true\nfalse\ntrue",
      rust: "true\nfalse\ntrue",
      ruby: "true\nfalse\ntrue",
      typescript: "true\nfalse\ntrue",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search for target in nums. If target exists, return its index. Otherwise, return -1.",
      notes: [
        "The array is sorted in ascending order.",
        "You should solve the problem using binary search.",
      ],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "The value 9 is located at index 4.",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "The value 2 does not exist in the array.",
      },
      {
        input: "nums = [5], target = 5",
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ ≤ nums[i], target ≤ 10⁴",
      "All integers in nums are unique",
      "nums is sorted in ascending order",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
console.log(search([5], 5));`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([-1,0,3,5,9,12], 9))
print(search([-1,0,3,5,9,12], 2))
print(search([5], 5))`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here

        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));
        System.out.println(search(new int[]{5}, 5));
    }
}`,
      dart: `int search(List<int> nums, int target) {
  var left = 0;
  var right = nums.length - 1;

  while (left <= right) {
    final mid = (left + right) ~/ 2;

    if (nums[mid] == target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

void main() {
  print(search([-1,0,3,5,9,12], 9));
  print(search([-1,0,3,5,9,12], 2));
  print(search([5], 5));
}`,
      php: `<?php

function search(array $nums, int $target): int {
    $left = 0;
    $right = count($nums) - 1;

    while ($left <= $right) {
        $mid = intdiv($left + $right, 2);

        if ($nums[$mid] === $target) {
            return $mid;
        }

        if ($nums[$mid] < $target) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }

    return -1;
}

echo search([-1,0,3,5,9,12], 9) . "\\n";
echo search([-1,0,3,5,9,12], 2) . "\\n";
echo search([5], 5);`,
      rust: `fn search(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0i32;
    let mut right = nums.len() as i32 - 1;

    while left <= right {
        let mid = (left + right) / 2;

        if nums[mid as usize] == target {
            return mid;
        }

        if nums[mid as usize] < target {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    -1
}

fn main() {
    println!("{}", search(vec![-1,0,3,5,9,12], 9));
    println!("{}", search(vec![-1,0,3,5,9,12], 2));
    println!("{}", search(vec![5], 5));
}`,
      ruby: `def search(nums, target)
  left = 0
  right = nums.length - 1

  while left <= right
    mid = (left + right) / 2
    return mid if nums[mid] == target

    if nums[mid] < target
      left = mid + 1
    else
      right = mid - 1
    end
  end

  -1
end

puts search([-1,0,3,5,9,12], 9)
puts search([-1,0,3,5,9,12], 2)
puts search([5], 5)`,
      typescript: `function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
console.log(search([5], 5));`,
    },
    expectedOutput: {
      javascript: "4\n-1\n0",
      python: "4\n-1\n0",
      java: "4\n-1\n0",
      dart: "4\n-1\n0",
      php: "4\n-1\n0",
      rust: "4\n-1\n0",
      ruby: "4\n-1\n0",
      typescript: "4\n-1\n0",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An opening bracket must be closed by the same type of bracket.",
        "Opening brackets must be closed in the correct order.",
        "Every closing bracket must have a corresponding opening bracket.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
      {
        input: 's = "([)]"',
        output: "false",
      },
      {
        input: 's = "{[]}"',
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only: '()[]{}'",
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here

}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))
print(isValid("()[]{}"))
print(isValid("(]"))
print(isValid("([)]"))
print(isValid("{[]}"))`,
      java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([)]"));
        System.out.println(isValid("{[]}"));
    }
}`,
      dart: `bool isValid(String s) {
  final stack = <String>[];
  final pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (final char in s.split('')) {
    if ('([{'.contains(char)) {
      stack.add(char);
    } else {
      if (stack.isEmpty || stack.removeLast() != pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty;
}

void main() {
  for (final s in ['()', '()[]{}', '(]', '([)]', '{[]}']) {
    print(isValid(s));
  }
}`,
      php: `<?php

function isValid(string $s): bool {
    $stack = [];
    $pairs = [
        ')' => '(',
        ']' => '[',
        '}' => '{',
    ];

    for ($i = 0; $i < strlen($s); $i++) {
        $char = $s[$i];

        if (strpos('([{', $char) !== false) {
            $stack[] = $char;
        } else {
            if (empty($stack) || array_pop($stack) !== $pairs[$char]) {
                return false;
            }
        }
    }

    return empty($stack);
}

echo isValid("()") ? "true\\n" : "false\\n";
echo isValid("()[]{}") ? "true\\n" : "false\\n";
echo isValid("(]") ? "true\\n" : "false\\n";
echo isValid("([)]") ? "true\\n" : "false\\n";
echo isValid("{[]}") ? "true" : "false";`,
      rust: `fn is_valid(s: &str) -> bool {
    let mut stack = Vec::new();

    for c in s.chars() {
        match c {
            '(' | '[' | '{' => stack.push(c),
            ')' => if stack.pop() != Some('(') { return false; },
            ']' => if stack.pop() != Some('[') { return false; },
            '}' => if stack.pop() != Some('{') { return false; },
            _ => {}
        }
    }

    stack.is_empty()
}

fn main() {
    for s in ["()", "()[]{}", "(]", "([)]", "{[]}"] {
        println!("{}", is_valid(s));
    }
}`,
      ruby: `def is_valid(s)
  stack = []
  pairs = {
    ")" => "(",
    "]" => "[",
    "}" => "{"
  }

  s.each_char do |char|
    if "([{".include?(char)
      stack << char
    elsif stack.pop != pairs[char]
      return false
    end
  end

  stack.empty?
end

puts is_valid("()")
puts is_valid("()[]{}")
puts is_valid("(]")
puts is_valid("([)]")
puts is_valid("{[]}")`,
      typescript: `function isValid(s: string): boolean {
  const stack: string[] = [];

  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if ("([{".includes(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse\nfalse\ntrue",
      python: "True\nTrue\nFalse\nFalse\nTrue",
      java: "true\ntrue\nfalse\nfalse\ntrue",
      dart: "true\ntrue\nfalse\nfalse\ntrue",
      php: "true\ntrue\nfalse\nfalse\ntrue",
      rust: "true\ntrue\nfalse\nfalse\ntrue",
      ruby: "true\ntrue\nfalse\nfalse\ntrue",
      typescript: "true\ntrue\nfalse\nfalse\ntrue",
    },
  },

  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: [
        "Return the maximum profit you can achieve from this transaction.",
        "If you cannot achieve any profit, return 0.",
        "You may only complete one transaction.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 at price 1 and sell on day 5 at price 6.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "There is no profitable transaction.",
      },
      {
        input: "prices = [2,4,1]",
        output: "2",
        explanation: "Buy at price 2 and sell at price 4.",
      },
    ],
    constraints: [
      "1 ≤ prices.length ≤ 10⁵",
      "0 ≤ prices[i] ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here

}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))
print(maxProfit([2,4,1]))`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
        System.out.println(maxProfit(new int[]{2,4,1}));
    }
}`,
      dart: `int maxProfit(List<int> prices) {
  var minPrice = prices[0];
  var best = 0;

  for (final price in prices) {
    minPrice = price < minPrice ? price : minPrice;
    final profit = price - minPrice;

    if (profit > best) {
      best = profit;
    }
  }

  return best;
}

void main() {
  print(maxProfit([7,1,5,3,6,4]));
  print(maxProfit([7,6,4,3,1]));
  print(maxProfit([2,4,1]));
}`,
      php: `<?php

function maxProfit(array $prices): int {
    $minPrice = $prices[0];
    $best = 0;

    foreach ($prices as $price) {
        $minPrice = min($minPrice, $price);
        $best = max($best, $price - $minPrice);
    }

    return $best;
}

echo maxProfit([7,1,5,3,6,4]) . "\\n";
echo maxProfit([7,6,4,3,1]) . "\\n";
echo maxProfit([2,4,1]);`,
      rust: `fn max_profit(prices: Vec<i32>) -> i32 {
    let mut min_price = prices[0];
    let mut best = 0;

    for price in prices {
        min_price = min_price.min(price);
        best = best.max(price - min_price);
    }

    best
}

fn main() {
    println!("{}", max_profit(vec![7,1,5,3,6,4]));
    println!("{}", max_profit(vec![7,6,4,3,1]));
    println!("{}", max_profit(vec![2,4,1]));
}`,
      ruby: `def max_profit(prices)
  min_price = prices[0]
  best = 0

  prices.each do |price|
    min_price = [min_price, price].min
    best = [best, price - min_price].max
  end

  best
end

puts max_profit([7,1,5,3,6,4])
puts max_profit([7,6,4,3,1])
puts max_profit([2,4,1])`,
      typescript: `function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let best = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    best = Math.max(best, price - minPrice);
  }

  return best;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));`,
    },
    expectedOutput: {
      javascript: "5\n0\n2",
      python: "5\n0\n2",
      java: "5\n0\n2",
      dart: "5\n0\n2",
      php: "5\n0\n2",
      rust: "5\n0\n2",
      ruby: "5\n0\n2",
      typescript: "5\n0\n2",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix / Suffix",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must solve the problem without using division.",
        "The solution should run in O(n) time.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
      {
        input: "nums = [2,3]",
        output: "[3,2]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
      "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer",
    ],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here

}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([2,3]));`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))
print(productExceptSelf([-1,1,0,-3,3]))
print(productExceptSelf([2,3]))`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3})));
    }
}`,
      dart: `List<int> productExceptSelf(List<int> nums) {
  final result = List<int>.filled(nums.length, 1);

  var prefix = 1;

  for (var i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  var suffix = 1;

  for (var i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

void main() {
  print(productExceptSelf([1,2,3,4]));
  print(productExceptSelf([-1,1,0,-3,3]));
  print(productExceptSelf([2,3]));
}`,
      php: `<?php

function productExceptSelf(array $nums): array {
    $n = count($nums);
    $result = array_fill(0, $n, 1);

    $prefix = 1;

    for ($i = 0; $i < $n; $i++) {
        $result[$i] = $prefix;
        $prefix *= $nums[$i];
    }

    $suffix = 1;

    for ($i = $n - 1; $i >= 0; $i--) {
        $result[$i] *= $suffix;
        $suffix *= $nums[$i];
    }

    return $result;
}

echo json_encode(productExceptSelf([1,2,3,4])) . "\\n";
echo json_encode(productExceptSelf([-1,1,0,-3,3])) . "\\n";
echo json_encode(productExceptSelf([2,3]));`,
      rust: `fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut result = vec![1; n];

    let mut prefix = 1;
    for i in 0..n {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let mut suffix = 1;
    for i in (0..n).rev() {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    result
}

fn main() {
    println!("{:?}", product_except_self(vec![1,2,3,4]));
    println!("{:?}", product_except_self(vec![-1,1,0,-3,3]));
    println!("{:?}", product_except_self(vec![2,3]));
}`,
      ruby: `def product_except_self(nums)
  result = Array.new(nums.length, 1)

  prefix = 1
  nums.each_index do |i|
    result[i] = prefix
    prefix *= nums[i]
  end

  suffix = 1
  (nums.length - 1).downto(0) do |i|
    result[i] *= suffix
    suffix *= nums[i]
  end

  result
end

p product_except_self([1,2,3,4])
p product_except_self([-1,1,0,-3,3])
p product_except_self([2,3])`,
      typescript: `function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([2,3]));`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]\n[3,2]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
      dart: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
      php: "[24,12,8,6]\n[0,0,9,0,0]\n[3,2]",
      rust: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
      ruby: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[3, 2]",
      typescript: "[24,12,8,6]\n[0,0,9,0,0]\n[3,2]",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window • Hash Table",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "A substring is a contiguous sequence of characters within the string.",
        "The substring must contain no repeated characters.",
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with a length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with a length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with a length of 3.',
      },
      {
        input: 's = ""',
        output: "0",
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbb"))
print(lengthOfLongestSubstring("pwwkew"))
print(lengthOfLongestSubstring(""))`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(lengthOfLongestSubstring("bbbbb"));
        System.out.println(lengthOfLongestSubstring("pwwkew"));
        System.out.println(lengthOfLongestSubstring(""));
    }
}`,
      dart: `int lengthOfLongestSubstring(String s) {
  final map = <String, int>{};
  var left = 0;
  var best = 0;

  for (var right = 0; right < s.length; right++) {
    final char = s[right];

    if (map.containsKey(char) && map[char]! >= left) {
      left = map[char]! + 1;
    }

    map[char] = right;
    final length = right - left + 1;

    if (length > best) {
      best = length;
    }
  }

  return best;
}

void main() {
  print(lengthOfLongestSubstring("abcabcbb"));
  print(lengthOfLongestSubstring("bbbbb"));
  print(lengthOfLongestSubstring("pwwkew"));
  print(lengthOfLongestSubstring(""));
}`,
      php: `<?php

function lengthOfLongestSubstring(string $s): int {
    $map = [];
    $left = 0;
    $best = 0;

    for ($right = 0; $right < strlen($s); $right++) {
        $char = $s[$right];

        if (isset($map[$char]) && $map[$char] >= $left) {
            $left = $map[$char] + 1;
        }

        $map[$char] = $right;
        $best = max($best, $right - $left + 1);
    }

    return $best;
}

echo lengthOfLongestSubstring("abcabcbb") . "\\n";
echo lengthOfLongestSubstring("bbbbb") . "\\n";
echo lengthOfLongestSubstring("pwwkew") . "\\n";
echo lengthOfLongestSubstring("");`,
      rust: `use std::collections::HashMap;

fn length_of_longest_substring(s: &str) -> usize {
    let mut map = HashMap::new();
    let mut left = 0;
    let mut best = 0;

    for (right, ch) in s.chars().enumerate() {
        if let Some(&index) = map.get(&ch) {
            if index >= left {
                left = index + 1;
            }
        }

        map.insert(ch, right);
        best = best.max(right - left + 1);
    }

    best
}

fn main() {
    println!("{}", length_of_longest_substring("abcabcbb"));
    println!("{}", length_of_longest_substring("bbbbb"));
    println!("{}", length_of_longest_substring("pwwkew"));
    println!("{}", length_of_longest_substring(""));
}`,
      ruby: `def length_of_longest_substring(s)
  map = {}
  left = 0
  best = 0

  s.chars.each_with_index do |char, right|
    if map.key?(char)
      left = [left, map[char] + 1].max
    end

    map[char] = right
    best = [best, right - left + 1].max
  end

  best
end

puts length_of_longest_substring("abcabcbb")
puts length_of_longest_substring("bbbbb")
puts length_of_longest_substring("pwwkew")
puts length_of_longest_substring("")`,
      typescript: `function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (map.has(char) && map.get(char)! >= left) {
      left = map.get(char)! + 1;
    }

    map.set(char, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));`,
    },
    expectedOutput: {
      javascript: "3\n1\n3\n0",
      python: "3\n1\n3\n0",
      java: "3\n1\n3\n0",
      dart: "3\n1\n3\n0",
      php: "3\n1\n3\n0",
      rust: "3\n1\n3\n0",
      ruby: "3\n1\n3\n0",
      typescript: "3\n1\n3\n0",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting • Intervals",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [
        "Intervals that touch or overlap should be merged.",
        "The returned intervals should be sorted by their starting position.",
      ],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "[1,3] and [2,6] overlap, so they are merged into [1,6].",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
        explanation: "The intervals overlap at position 4.",
      },
      {
        input: "intervals = [[1,2],[3,4],[5,6]]",
        output: "[[1,2],[3,4],[5,6]]",
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length == 2",
      "0 ≤ starti ≤ endi ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here

}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,2],[3,4],[5,6]]));`,
      python: `def merge(intervals):
    # Write your solution here
    pass

print(merge([[1,3],[2,6],[8,10],[15,18]]))
print(merge([[1,4],[4,5]]))
print(merge([[1,2],[3,4],[5,6]]))`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here

        return new int[0][0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(
            merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})
        ));

        System.out.println(Arrays.deepToString(
            merge(new int[][]{{1,4},{4,5}})
        ));

        System.out.println(Arrays.deepToString(
            merge(new int[][]{{1,2},{3,4},{5,6}})
        ));
    }
}`,
      dart: `List<List<int>> merge(List<List<int>> intervals) {
  intervals.sort((a, b) => a[0].compareTo(b[0]));

  final result = <List<int>>[];

  for (final interval in intervals) {
    if (result.isEmpty || interval[0] > result.last[1]) {
      result.add([interval[0], interval[1]]);
    } else {
      result.last[1] =
          result.last[1] > interval[1] ? result.last[1] : interval[1];
    }
  }

  return result;
}

void main() {
  print(merge([[1,3],[2,6],[8,10],[15,18]]));
  print(merge([[1,4],[4,5]]));
  print(merge([[1,2],[3,4],[5,6]]));
}`,
      php: `<?php

function merge(array $intervals): array {
    usort($intervals, fn($a, $b) => $a[0] <=> $b[0]);

    $result = [];

    foreach ($intervals as $interval) {
        if (
            empty($result) ||
            $interval[0] > $result[count($result) - 1][1]
        ) {
            $result[] = [$interval[0], $interval[1]];
        } else {
            $last = count($result) - 1;
            $result[$last][1] = max($result[$last][1], $interval[1]);
        }
    }

    return $result;
}

echo json_encode(merge([[1,3],[2,6],[8,10],[15,18]])) . "\\n";
echo json_encode(merge([[1,4],[4,5]])) . "\\n";
echo json_encode(merge([[1,2],[3,4],[5,6]]));`,
      rust: `fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    intervals.sort_by_key(|x| x[0]);

    let mut result: Vec<Vec<i32>> = Vec::new();

    for interval in intervals {
        if result.is_empty() || interval[0] > result.last().unwrap()[1] {
            result.push(interval);
        } else {
            let last = result.len() - 1;
            result[last][1] = result[last][1].max(interval[1]);
        }
    }

    result
}

fn main() {
    println!("{:?}", merge(vec![
        vec![1,3], vec![2,6], vec![8,10], vec![15,18]
    ]));

    println!("{:?}", merge(vec![
        vec![1,4], vec![4,5]
    ]));

    println!("{:?}", merge(vec![
        vec![1,2], vec![3,4], vec![5,6]
    ]));
}`,
      ruby: `def merge(intervals)
  intervals.sort_by!(&:first)

  result = []

  intervals.each do |interval|
    if result.empty? || interval[0] > result[-1][1]
      result << interval.dup
    else
      result[-1][1] = [result[-1][1], interval[1]].max
    end
  end

  result
end

p merge([[1,3],[2,6],[8,10],[15,18]])
p merge([[1,4],[4,5]])
p merge([[1,2],[3,4],[5,6]])`,
      typescript: `function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];

  for (const interval of intervals) {
    if (
      result.length === 0 ||
      interval[0] > result[result.length - 1][1]
    ) {
      result.push([...interval]);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }

  return result;
}

console.log(JSON.stringify(merge([[1,3],[2,6],[8,10],[15,18]])));
console.log(JSON.stringify(merge([[1,4],[4,5]])));
console.log(JSON.stringify(merge([[1,2],[3,4],[5,6]])));`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]\n[[1,2],[3,4],[5,6]]",
      python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 2], [3, 4], [5, 6]]",
      java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 2], [3, 4], [5, 6]]",
      dart: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 2], [3, 4], [5, 6]]",
      php: "[[1,6],[8,10],[15,18]]\n[[1,5]]\n[[1,2],[3,4],[5,6]]",
      rust: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 2], [3, 4], [5, 6]]",
      ruby: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]\n[[1, 2], [3, 4], [5, 6]]",
      typescript: "[[1,6],[8,10],[15,18]]\n[[1,5]]\n[[1,2],[3,4],[5,6]]",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Hard",
    category: "Array • Backtracking • DFS",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
      notes: [
        "The word can be constructed from letters of sequentially adjacent cells.",
        "Adjacent cells are horizontally or vertically neighboring.",
        "The same cell may not be used more than once in the same word.",
      ],
    },
    examples: [
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: "true",
      },
      {
        input:
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: "false",
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 6",
      "1 ≤ word.length ≤ 15",
      "board and word consist of only lowercase and uppercase English letters",
    ],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here

}

console.log(exist(
  [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
  "ABCCED"
));

console.log(exist(
  [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
  "SEE"
));

console.log(exist(
  [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
  "ABCB"
));`,
      python: `def exist(board, word):
    # Write your solution here
    pass

print(exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCCED"
))

print(exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "SEE"
))

print(exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
    "ABCB"
))`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };

        System.out.println(exist(board, "ABCCED"));
        System.out.println(exist(board, "SEE"));
        System.out.println(exist(board, "ABCB"));
    }
}`,
      dart: `bool exist(List<List<String>> board, String word) {
  final rows = board.length;
  final cols = board[0].length;

  bool dfs(int row, int col, int index) {
    if (index == word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] != word[index]
    ) {
      return false;
    }

    final temp = board[row][col];
    board[row][col] = '#';

    final found =
        dfs(row + 1, col, index + 1) ||
        dfs(row - 1, col, index + 1) ||
        dfs(row, col + 1, index + 1) ||
        dfs(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  }

  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}

void main() {
  final board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ];

  print(exist(board.map((row) => [...row]).toList(), "ABCCED"));
  print(exist(board.map((row) => [...row]).toList(), "SEE"));
  print(exist(board.map((row) => [...row]).toList(), "ABCB"));
}`,
      php: `<?php

function exist(array $board, string $word): bool {
    $rows = count($board);
    $cols = count($board[0]);

    $dfs = function($row, $col, $index) use (&$board, $word, $rows, $cols, &$dfs) {
        if ($index === strlen($word)) {
            return true;
        }

        if (
            $row < 0 ||
            $row >= $rows ||
            $col < 0 ||
            $col >= $cols ||
            $board[$row][$col] !== $word[$index]
        ) {
            return false;
        }

        $temp = $board[$row][$col];
        $board[$row][$col] = '#';

        $found =
            $dfs($row + 1, $col, $index + 1) ||
            $dfs($row - 1, $col, $index + 1) ||
            $dfs($row, $col + 1, $index + 1) ||
            $dfs($row, $col - 1, $index + 1);

        $board[$row][$col] = $temp;

        return $found;
    };

    for ($row = 0; $row < $rows; $row++) {
        for ($col = 0; $col < $cols; $col++) {
            if ($dfs($row, $col, 0)) {
                return true;
            }
        }
    }

    return false;
}

$board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];

foreach (['ABCCED', 'SEE', 'ABCB'] as $word) {
    echo exist($board, $word) ? "true\\n" : "false\\n";
}`,
      rust: `fn exist(mut board: Vec<Vec<char>>, word: &[char]) -> bool {
    fn dfs(
        board: &mut Vec<Vec<char>>,
        word: &[char],
        row: i32,
        col: i32,
        index: usize,
    ) -> bool {
        if index == word.len() {
            return true;
        }

        if row < 0 ||
           col < 0 ||
           row as usize >= board.len() ||
           col as usize >= board[0].len() ||
           board[row as usize][col as usize] != word[index] {
            return false;
        }

        let temp = board[row as usize][col as usize];
        board[row as usize][col as usize] = '#';

        let found =
            dfs(board, word, row + 1, col, index + 1) ||
            dfs(board, word, row - 1, col, index + 1) ||
            dfs(board, word, row, col + 1, index + 1) ||
            dfs(board, word, row, col - 1, index + 1);

        board[row as usize][col as usize] = temp;

        found
    }

    for row in 0..board.len() {
        for col in 0..board[0].len() {
            if dfs(&mut board, word, row as i32, col as i32, 0) {
                return true;
            }
        }
    }

    false
}

fn main() {
    let board = vec![
        vec!['A','B','C','E'],
        vec!['S','F','C','S'],
        vec!['A','D','E','E']
    ];

    for word in ["ABCCED", "SEE", "ABCB"] {
        let chars = word.chars().collect::<Vec<_>>();
        println!("{}", exist(board.clone(), &chars));
    }
}`,
      ruby: `def exist(board, word)
  rows = board.length
  cols = board[0].length

  dfs = lambda do |row, col, index|
    return true if index == word.length

    return false if
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] != word[index]

    temp = board[row][col]
    board[row][col] = "#"

    found =
      dfs.call(row + 1, col, index + 1) ||
      dfs.call(row - 1, col, index + 1) ||
      dfs.call(row, col + 1, index + 1) ||
      dfs.call(row, col - 1, index + 1)

    board[row][col] = temp

    found
  end

  (0...rows).each do |row|
    (0...cols).each do |col|
      return true if dfs.call(row, col, 0)
    end
  end

  false
end

board = [
  %w[A B C E],
  %w[S F C S],
  %w[A D E E]
]

["ABCCED", "SEE", "ABCB"].each do |word|
  puts exist(Marshal.load(Marshal.dump(board)), word)
end`,
      typescript: `function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(row: number, col: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";

    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
}

const board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
];

console.log(exist(board.map(row => [...row]), "ABCCED"));
console.log(exist(board.map(row => [...row]), "SEE"));
console.log(exist(board.map(row => [...row]), "ABCB"));`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      dart: "true\ntrue\nfalse",
      php: "true\ntrue\nfalse",
      rust: "true\ntrue\nfalse",
      ruby: "true\ntrue\nfalse",
      typescript: "true\ntrue\nfalse",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  typescript: {
    name: "TypeScript",
    icon: "/typescript.png",
    monacoLang: "typescript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  dart: {
    name: "Dart",
    icon: "/dart.png",
    monacoLang: "dart",
  },
  php: {
    name: "PHP",
    icon: "/php.png",
    monacoLang: "php",
  },
  rust: {
    name: "Rust",
    icon: "/rust.png",
    monacoLang: "rust",
  },
  ruby: {
    name: "Ruby",
    icon: "/ruby.png",
    monacoLang: "ruby",
  },
};