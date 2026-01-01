function Calculator (a, b, c){
    if (Number.isNaN(a)|| Number.isNaN(c)) return "ошибка"
if (b=== "+"){
    return a+c}
if (b=== "-"){
    return a-c}
if (b=== "*"){
    return a*C}
    if (b=== "/") {
        if (c=== 0) return "ошибка"
        return a/c
    }
        
};