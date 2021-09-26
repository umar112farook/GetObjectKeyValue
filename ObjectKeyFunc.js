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
var obj = {"x": { "y": { "z": "a" }}};
var key = 'x.y.z'

//Call the function to see the output.
console.log(getObjectKeys(obj, key));
