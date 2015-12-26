switch(asdf) {
with [a,b, ...c]: 1
with {a,b,c:d}: 2
// TODO: Need to fix up context so regexp is allowed here
//with /asdf/: 3
with Blah(a,b): 4
with qwer.XXX(a): 5
with ["asdf",5,,1.0,b, ...c]: 6
with null: 7
// TODO: guards.
//with Something(a,b) if (b > 2): 4
with a: 8
with {a="asdf"}: 9
with false: 10
default: 11
}

// And as an expression
let x = switch(asdf) {
with [a,b, ...c]: 1
with {a,b,c:d}: 2
// TODO: Need to fix up context so regexp is allowed here
//with /asdf/: 3
with Blah(a,b): 4
with qwer.XXX(a): 5
with ["asdf",5,,1.0,b, ...c]: 6
with null: 7
// TODO: guards.
//with Something(a,b) if (b > 2): 4
with a: 8
with {a="asdf"}: 9
with false: 10
default: 11
}
