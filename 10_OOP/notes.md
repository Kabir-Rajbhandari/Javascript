# JavaScript and classes

JavaScript does have classes. This feature was introduced with the ECAMScript 2015 specification (ES6). However, it's important to note that JavaScript primarily a "prototype-based language", and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words, it provides a more familier syntax for developers coming from class-based languages such as Java or C++, but under the hood it works somewhat differently.

## OOP (Object Oriented Programming)

=> programming paradigm: is a fundamental style, model or way of thinking about how to structure and design computer programs.


## Object

=> Collection of properties and methods


## Why use OOP ?


## parts of OOP

Object Literal (literally)
- Constructor function
- Prototypes / proto
- Classes
- Instances (new, this) - keyword


## 4 pillars of OOPs

- Abstraction
    
    => only shows the necessary stuff otherwise hide the un-necessary stuff i.e. a remote with various switch/buttons suppose, clicked volume up or down buttons it basically increase the volume ++ or -- as the actual work behind the scene is not necessary to know. 
    It's a technique of providing only the essential details to the user by hiding the un-necessary or irrelevant details of an entity. It helps in reducing the operational complexity at the user-end.

- Encapsulation

    => to maintain security and integrity, as the binding of data in a single class. It's a technique of restricting a user from directly modifying the data members or variables of a class in order to maintain the integrity of the data.
    can achieve the encapsulation with the help of access modifier (public, private, protected, default)

- Inheritance

    => Inherit ---> Inherited Traits
 // i.e. when a child inherits the qualities/properties from it's parent. similarly one class inherit the another class methods/properties whereas the methods seem to be similar for both classes.. child - parent (is a relation) i.e. car (class) is a vehicle (class).
 It's a technique of acquiring the properties of another class having features in common. It's also known as a child-parent relationship, where a child inherits the properties of its parent. It allows us to increase the reusability and reduce the duplication of code.

- Polymorphism

=> poly: multiple and morph: forms
If a same name method is exist in classes but it is either different in datatypes and parameters. It is a feature that allows to perform an action in multiple or different ways.

In shorts: 
The four pillars of OOP are:
1. Encapsulation
Keeping data and the methods that work on it together, while controlling access to that data.

2. Abstraction
Hiding unnecessary implementation details and exposing only what someone needs to use.

3. Inheritance
Creating a new class from an existing class to reuse or extend its properties and methods.

4. Polymorphism
Allowing the same method or interface to behave differently depending on the object using it.