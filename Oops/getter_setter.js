//getter and setter
// Getter (get): Jab hume kisi property ka value lena hai, 
// to hum uske liye function define karte hain jo value return kare — but bina function jaisa call kiye.

// Setter (set): Jab hume kisi property ka value set/update karna hai, 
// to hum function define karte hain jo value assign kare — again, bina function jaisa call kiye.

class Person {
  constructor(name) {
    this._name = name;  // "_" conventionally used for private/internal variable
  }

  get name() {
    return this._name.toUpperCase();  // Customize return
  }

  set name(newName) {
    this._name = newName.trim();  // Customize set logic
  }
}

const p = new Person("Amit");
console.log(p.name);      // 🔹 Uses getter → Output: "AMIT"

p.name = "  Rahul  ";     // 🔹 Uses setter (whitespace removed)
console.log(p.name);      // Output: "RAHUL"
