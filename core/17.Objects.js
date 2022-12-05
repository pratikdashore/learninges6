(function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.isAdult = function () {
    return this.age >= 18;
  };

  let pratik = new Person("Pratik Dashore", 30);

  function Student(name, age, rollNumber, klas) {
    Person.call(this, name, age);
    this.rollNumber = rollNumber;
    this.klas = klas;
  }

  Student.prototype = Object.create(Person.prototype);

  Student.prototype.isOverAged = function () {
    return this.age >= 21;
  };

  let harsh = new Student("Harsh", 15, 101, 10);
  /* for (let i in harsh) {
    console.log(i, harsh.hasOwnProperty(i));
    console.log(Object.getOwnPropertyDescriptor(harsh, i));
    console.log(Object.getPrototypeOf(harsh));
  } */

  // console.log(Object.prototype.toString.call(harsh));
  // console.log(Object.prototype.toString.call(pratik));
  // console.log(Object.keys(harsh));
  // console.table(Object.entries(harsh));
  // console.table(Object.getOwnPropertyDescriptors(harsh));
  // console.dir(Object.getPrototypeOf(harsh));
  /* let entries = new Map(Object.entries(pratik));
  let newPratik = Object.fromEntries(entries);
    for (let i in newPratik) {
      console.log(i, newPratik.hasOwnProperty(i));
    } */
  // console.log(Object.getOwnPropertyNames(harsh));

  Object.deepClone = function deepCloneObj(obj, onlyOwn, tar) {
    if (!obj) {
      return tar;
    }
    if (!tar) {
      tar = {};
    }
    if (obj) {
      for (let prop in obj) {
        if (!obj.hasOwnProperty || obj.hasOwnProperty(prop)) {
          const type = Object.prototype.toString.call(obj[prop]);
          switch (type) {
            case "[object Object]":
              tar[prop] = deepCloneObj(obj[prop], onlyOwn, {});
              break;
            case "[object Array]":
              tar[prop] = deepCloneObj(obj[prop], onlyOwn, []);
              break;
            case "[object Map]":
              tar[prop] = deepCloneObj(obj[prop], onlyOwn, new Map());
              break;
            case "[object Set]":
              tar[prop] = deepCloneObj(obj[prop], onlyOwn, new Set());
              break;
            default:
              tar[prop] = obj[prop];
              break;
          }
        }
      }
      if (!onlyOwn) {
        const proto = Object.getPrototypeOf(obj);
        if (proto) {
          const clonnedProto = deepCloneObj(proto);
          Object.setPrototypeOf(tar, clonnedProto);
        }
      }
    }
    return tar;
  };

  harsh.Marks = [10, 12, 12, 34];
  harsh.friends = [
    new Student("Rahul", 10, 12, 100),
    new Student("Mayur", 10, 12, 100),
  ];

  harsh.otherProps = {
    dob: new Date(),
    badHabits: null,
    smoking: undefined,
    mySet: new Set(["Pratik", "Harsh"]),
  };
  let newHarsh = Object.deepClone(harsh);
  harsh.friends[0].Marks = [10, 12, 12, 2];
  harsh.otherProps.dob = new Date();

  console.log(harsh);
  console.log(newHarsh);
   harsh.otherProps.mySet.add("Jain");
   
})();
