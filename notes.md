you cannot directly access variables, methods, function from one module to another module through require

modules protect their variables and function from leaking
to overcome this you need to do module.exports = {}  //wrap it in object
there are 2 methods to view it in another module 
1. obj. (method)
2. destructuring obj { , }