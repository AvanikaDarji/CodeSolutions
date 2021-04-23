function permutation(string, result = "") {
    if (string.length == 0) {
        console.log(result);
    }
    for (let i = 0; i < string.length; i++) {
        let rest = string.substring(0, i) + string.substring(i + 1);
        permutation(rest, result + string[i]);

    }
    //  return result;
}
permutation("aabb", " ");