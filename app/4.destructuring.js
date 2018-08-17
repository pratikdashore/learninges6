function foo() {
    return [1, 2, 3, 4];
}

var [
    a,
    b,
    c = 10,
    ...args
] = foo();

// it is array destructuring. if number of elements are more or less they are ignored or set as undefined based on number of return elements. 

// nested array destructuring 

var p, q, r, s, t, v, w;

[p, q, r, s, [t, , v], w] = [1, 2, 3, 4, [5, 6, 7], 8];

//it just works based on position. 


/////
//Object destructuring 


function fooObj() {
    return { fName: 'Praik', lName: 'Dashore', age: 20 };
}

var {
    //propertyName From source : target variable propety
    fName: firstName,
    lName: lastName,
    age: age = 20
} = fooObj();

/////

//one of use case for object destructuring and restructuring


// old way

var defaults = {
    method: 'POST',
    callback: function (res) { console.log(res); },
    headers: {
        "content-type": "text/plain"
    },
    data: {}
}

var config = {
    url: "http://google.api/users",
    method: "get",
    callback: function (res) { },
    headers: {
        secure: "true"
    }
}

// this is used mostly when we create some component or functions which has defaults values, but caller or end user can give his own values, and that should get merged to final object.

// we do mostly with any kind of lib but now we are going to do it with destructuring

{
    // block so that nothing get polluted

    let {
        url,
        method = "POST",
        callback = function (res) { console.log(res); },
        headers: {
            "content-type": contentType = "text/plain",
            secure
        } = {},
        data
    } = config;

    // es6 feature if you have same property name as you are getting value from variable you do not need propertyname : value, you can just write the variable name.

    config = {
        url,
        method,
        callback,
        headers: {
            "content-type": contentType,
            secure
        },
        data
    }
}

function printAll([a, b, c]) {
    console.log(a, b, c);
}

printAll([10, 12, 13]);
