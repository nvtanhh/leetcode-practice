/**
 * Determines if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * @param s - The first string to compare.
 * @param t - The second string to compare.
 * @returns A boolean indicating whether the two strings are anagrams.
 */
function isAnagram(s: string, t: string): boolean {
    // Edge case
    if (s.length !== t.length) return false;

    const map = new Map<string, number>();

    for (const char of s) {
        map.set(char, (map.get(char) ?? 0) + 1)
    }

    for (const char of t) {
        if (!map.has(char) || map.get(char) === 0) return false;
        map.set(char, map.get(char)! - 1);
    }

    for (const count of map.values()) {
        if (count !== 0) return false
    }

    return true;
}


export function testIsAnagram() {
    // Test cases
    const testCases = [
        { s: "anagram", t: "nagaram", expected: true },
        { s: "rat", t: "car", expected: false },
        { s: "listen", t: "silent", expected: true },
        { s: "a", t: "a", expected: true },
        { s: "a", t: "b", expected: false },
        { s: "", t: "", expected: true },
        { s: "abc", t: "cba", expected: true },
        { s: "abc", t: "abcd", expected: false }
    ];

    testCases.forEach(({ s, t, expected }, index) => {
        const result = isAnagram(s, t);
        console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
    });

    console.log("All test cases passed!");
}