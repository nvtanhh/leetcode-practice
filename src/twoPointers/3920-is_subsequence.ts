function isSubsequence(s: string, t: string): boolean {
    // for (let i = 0; i < t.length; i++) {
    //     if (!s.length) {
    //         return true;
    //     }

    //     if (s[0] == s[i]) {
    //         s = s.substring(1, s.length);
    //     }
    // }

    // return s.length == 0;


    let i = 0, j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
};