function isSubsequence(s: string, t: string): boolean {
    const arr = s.split('');

    for (let i = 0; i < t.length; i++) {
        if (!s.length) {
            return true;
        }

        if (s[0] == s[i]) {
            s = s.substring(1, s.length);
        }
    }

    return s.length == 0;
};