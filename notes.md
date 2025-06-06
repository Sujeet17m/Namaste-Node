you cannot directly access variables, methods, function from one module to another module through require

modules protect their variables and function from leaking
to overcome this you need to do module.exports = {}  //wrap it in object