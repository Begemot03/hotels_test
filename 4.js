function tableMultiplier(n) {
    let s = "";
    for(let i = 0; i <= n; i++) {
        s = i == 0 ? "  " : i + " ";

        for(let j = 1; j <= n; j++) {
            s += Math.max(i, 1) * j + " ";
        }
        console.log(s + "\n");
        s = "";
    }
}

tableMultiplier(5);