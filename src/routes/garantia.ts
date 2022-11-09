import { Router } from "express";
import { deleteGarantia, getGarantia, getGarantias, postGarantia, udpateGarantia } from "../controllers/garantia";

const router = Router();


router.get('/', getGarantias);
router.get('/:id', getGarantia);
router.delete('/:id', deleteGarantia);
router.post('/', postGarantia);
router.put('/:id', udpateGarantia);


export default router;

