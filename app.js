"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var poo_1 = require("./poo");
var usuario1 = new poo_1.Usuario("Diana");
usuario1.login();
usuario1.propName = "Pepe";
console.log("Se ha modificado nombre a ".concat(usuario1.propName));
var alumno1 = new poo_1.Estudiante("María", "Analista de Sistemas");
alumno1.login();
alumno1.estudiar();
var doc = new poo_1.Documento("doc.txt", "texto"); // doc imprimible y exportable
doc.imprimir();
doc.exportar("pdf");
var imp = new poo_1.Documento("doc.xls", "planilla"); // doc solo imprimible
imp.imprimir();
var exp = new poo_1.Documento("texto.doc", "doc"); // doc solo exportable
exp.exportar("png");
