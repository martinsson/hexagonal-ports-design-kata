# Hexagonal kata

## Instructions
Head to `src/challenges`

Choose the one that interests you or simply the first exercice.

Read the problem-statement for the challenge. You typically have some external provider 
or some persistence api. Your task is always to create an port that exemplifies the hexagonal architecture

In order to be an acceptable solution the interface has to be made up of internal data structures that borrow 
nothing from the dependency. It should also simplify the interface from the point of view of the client of the port. 
So to make it short: Design an interface (or more) that 

1. Contains only types that you own
2. Simplifies for the user of that interface

## Simplification
What is meant by simplifying? 

Basically by creating an abstraction, that hide or removes any complexity that is not essential for the business context at hand.
Examples:
* reducing the number of parameters as input or ouput
* more qualified parameters (a numerical string is replaced with int/long/double/bigdecimal, Money instead of a long, enum instead of a string... )
* reduces roundtrips, replaces a poll with a syncrhonous call
* enforces constraints
* Hides persistande details: ex relational model





