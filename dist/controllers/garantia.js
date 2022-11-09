"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.udpateGarantia = exports.postGarantia = exports.deleteGarantia = exports.getGarantia = exports.getGarantias = void 0;
const garantia_1 = __importDefault(require("../models/garantia"));
const getGarantias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listGarantias = yield garantia_1.default.findAll();
    res.json(listGarantias);
});
exports.getGarantias = getGarantias;
const getGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const garantia = yield garantia_1.default.findByPk(id);
    if (garantia) {
        res.json(garantia);
    }
    else {
        res.status(404).json({
            msg: `No existe una garantia con el id ${id}`
        });
    }
});
exports.getGarantia = getGarantia;
const deleteGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const garantia = yield garantia_1.default.findByPk(id);
    if (garantia) {
        yield garantia.destroy();
        res.json({
            msg: 'La garantía fue eliminada con éxito'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe una garantia con el id ${id}`
        });
    }
});
exports.deleteGarantia = deleteGarantia;
const postGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield garantia_1.default.create(body);
        res.json({
            msg: `Garantia fue creada con éxito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, datos inválidos`
        });
    }
});
exports.postGarantia = postGarantia;
const udpateGarantia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const garantia = yield garantia_1.default.findByPk(id);
        if (garantia) {
            yield garantia.update(body);
            res.json({
                msg: `El producto fue actualizado con éxito`
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una garantia con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, datos inválidos`
        });
    }
});
exports.udpateGarantia = udpateGarantia;
