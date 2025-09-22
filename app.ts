import { Usuario, Estudiante, Exportable, Imprimible, Documento } from './poo';

const usuario1 = new Usuario("Diana");
usuario1.login();
usuario1.propName = "Pepe";
console.log(`Se ha modificado nombre a ${usuario1.propName}`)
const alumno1 = new Estudiante("María", "Analista de Sistemas");
alumno1.login();
alumno1.estudiar();

const doc = new Documento("doc.txt", "texto"); // doc imprimible y exportable
doc.imprimir();
doc.exportar("pdf");

const imp : Imprimible = new Documento("doc.xls", "planilla"); // doc solo imprimible
imp.imprimir();

const exp : Exportable = new Documento("texto.doc", "doc"); // doc solo exportable
exp.exportar("png");