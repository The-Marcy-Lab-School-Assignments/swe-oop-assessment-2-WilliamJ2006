# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded.

As a quick guide, check the following before submitting:

- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** refers to storing all your information inside of an **object** to protect and organize it. This concept is beneficial when programming because it allows you to keep information not only **private** and prevent vulnerable data from leaking outside of the object, but also keep all that information in one block.

```js
class School {
  #students = [];
  #capacity = 1000;
  #population;
  constructor(name, location, population) {
    this.name = name;
    this.location = location;
    this.#population = population;
  }

  checkFull() {
    if (this.#population === this.#capacity) {
      return true;
    } else if (this.#population < this.#capacity) {
      return false;
    }
  }
  
  addStudent(student) {
    if (this.#population >= this.#capacity) {
      return `Max capacity.`;
    }
    this.#students.push(student);
    return `Added ${student.name}`;
  }
}
```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

The **this** keyword is useful and important because it's used to refer to the **object/instance** it's a part of or inside the scope of. Through this, you can refer to **instance** and **object** properties while inside of a class.

In the example given, **this** refers to each instance when it's created. For example, this refers to the instance assigned to `counterA` when `counterA.increment()` is called, and so on for `counterB` or any other **variable** assigned to an instance.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism** in OOP is when you use the same **interface** in order to achieve a different result or form. It allows you in OOP to, through **inheritance**, (or even without) have outputs on different **instances/objects** using the same **method**/interface.

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `${this.name} made a noise!`;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barked!`;
  }
}
```

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

# Part A:

I would use **inheritance** to organize these **classes** by having the **superclass** be `Animal` with **properties** of `name`, `energy`, and `happiness` in the **constructor** **method**. `sleep` would also be a method of the superclass. Next, each type of animal, `Cat`, `Bird`, and `Dog`, will be **subclasses** and **extend** from `Animal`. This way, each subclass will inherit every property and method from the superclass. I would then create the unique methods of `hunt`, `chase`, and `fly` for each of the subclasses.

# Part B:

One advantage of using **inheritance** here instead of creating 3 completely separate **classes** is removing the need to reassign **properties** already in the **superclass**, replaced by the **super** in the **constructor** instead. Furthermore, the inheritance introduces **polymorphism** to our program and allows us to use the `sleep` **method** from our superclass on every **subclass**.
