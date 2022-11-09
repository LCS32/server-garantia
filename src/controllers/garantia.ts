import { Request, Response } from "express"
import Garantia from "../models/garantia"

export const getGarantias = async (req: Request, res: Response) => {

    const listGarantias = await Garantia.findAll()


    res.json(listGarantias)
}

export const getGarantia = async (req: Request, res: Response) => {

    const { id } = req.params
    const garantia = await Garantia.findByPk(id);

    if (garantia) {
        res.json(garantia)
    } else {
        res.status(404).json({
            msg: `No existe una garantia con el id ${id}`
        })
    }
}

export const deleteGarantia = async (req: Request, res: Response) => {

    const { id } = req.params
    const garantia = await Garantia.findByPk(id);

    if (garantia) {
        await garantia.destroy();
        res.json({
            msg: 'La garantía fue eliminada con éxito'

        })
    } else {
        res.status(404).json({
            msg: `No existe una garantia con el id ${id}`
        })
    }
}

export const postGarantia = async (req: Request, res: Response) => {

    const { body } = req;

    try {
        await Garantia.create(body);

        res.json({
            msg: `Garantia fue creada con éxito`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, datos inválidos`
        })
    }


}

export const udpateGarantia = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    try {

        const garantia = await Garantia.findByPk(id);

        if (garantia) {
            await garantia.update(body);
            res.json({
                msg: `El producto fue actualizado con éxito`
            })
        } else {
            res.status(404).json({
                msg: `No existe una garantia con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, datos inválidos`
        })
    }


}


