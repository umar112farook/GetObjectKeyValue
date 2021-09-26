function getObjectKeys(object, key) {
    // if you want another split key you can change this.
    const keys = key.split('.');
    let obj = object;
    for (let ikey of keys) {
        for (let [objKey, value] of Object.entries(obj)) {
            if(!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}

// Set the values of obj and key below
var obj = {"a1": { "b1": { "c1": "d1" }}};
var key = 'a1.b1.c1'

//Call the function to see the output.
console.log(getObjectKeys(obj, key));