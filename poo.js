"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = exports.Estudiante = exports.Usuario = void 0;
/**
 * Clase Usuario: con atributo, encapsulamiento, y comportamientos
 */
var Usuario = /** @class */ (function () {
    function Usuario(name) {
        this.name = name;
    }
    Object.defineProperty(Usuario.prototype, "propName", {
        get: function () {
            return this.name;
        },
        set: function (v) {
            this.name = v;
        },
        enumerable: false,
        configurable: true
    });
    Usuario.prototype.login = function () {
        console.log("".concat(this.name, " ha iniciado sesi\u00F3n"));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
/**
 * Clase Estudiante: Herencia simple y polimorfirmo
 */
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, carrera) {
        var _this = _super.call(this, nombre) || this;
        _this.carrera = carrera;
        return _this;
    }
    Estudiante.prototype.estudiar = function () {
        console.log("".concat(this.name, " estudia ").concat(this.carrera));
    };
    /**
     * Método polimórfico
     */
    Estudiante.prototype.login = function () {
        console.log("El/la estudiante ".concat(this.name, " ha iniciado sesi\u00F3n"));
    };
    return Estudiante;
}(Usuario));
exports.Estudiante = Estudiante;
/**
 * Clase Documento: Herencia múltiple con el uso de interfaces
 */
var Documento = /** @class */ (function () {
    function Documento(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Documento.prototype.imprimir = function () {
        console.log("imprimiendo el documento ".concat(this.nombre));
    };
    Documento.prototype.exportar = function (tipo) {
        console.log("exportando document ".concat(this.nombre, " a ").concat(tipo));
    };
    return Documento;
}());
exports.Documento = Documento;
