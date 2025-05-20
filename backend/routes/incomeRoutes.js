const express = require("express");
const {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadIncomeExcel
} = require("../controllers/incomeController")
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/add-income",protect, addIncome);
router.get("/get-all-income", protect, getAllIncome);
router.get("/download-excel", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);




module.exports = router;


