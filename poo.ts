/**
 * Clase Usuario: con atributo, encapsulamiento, y comportamientos
 */
export class Usuario {
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
export class Estudiante extends Usuario {
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
export interface Imprimible {
    imprimir(): void;
}

/**
 * Interface Exportable: Características para herencia múltiple
 */
export interface Exportable {
    tipo: string;
    exportar(tipo: string): void;
}

/**
 * Clase Documento: Herencia múltiple con el uso de interfaces
 */
export class Documento implements Imprimible, Exportable{
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

