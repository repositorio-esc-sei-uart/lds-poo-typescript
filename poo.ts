/**
 * Clase Usuario: con atributo, encapsulamiento, y comportamientos
 */
class Usuario {
    protected name:string;
    
    constructor(name:string){
        this.name = name;
    }

    public set propName(v : string) {
        this.name = v;
    }

    public get propName() : string {
        return this.name;
    }
    
    public login(): void {
        console.log(`${this.name} ha iniciado sesión`);
    }
    
}

/**
 * Clase Estudiante: Herencia simple y polimorfirmo
 */
class Estudiante extends Usuario {
    private carrera: string;

    constructor(nombre: string, carrera: string) {
        super(nombre);
        this.carrera = carrera;
    } 

    estudiar():void {
        console.log(`${this.name} estudia ${this.carrera}`);
    }

    /**
     * Método polimórfico
     */
    override login(): void {
        console.log(`El/la estudiante ${this.name} ha iniciado sesión`);
    }
}

/**
 * Interface Imprimible: Características para herencia múltiple
 */
interface Imprimible {
    imprimir(): void;
}

/**
 * Interface Exportable: Características para herencia múltiple
 */
interface Exportable {
    tipo: string;
    exportar(tipo: string): void;
}

/**
 * Clase Documento: Herencia múltiple con el uso de interfaces
 */
class Documento implements Imprimible, Exportable{
    private nombre: string;
    tipo: string; // heredado de Exportable

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    imprimir(): void {
        console.log(`imprimiendo el documento ${this.nombre}`);
    }

    exportar(tipo: string): void {
        console.log(`exportando document ${this.nombre} a ${tipo}`);
    }
}

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