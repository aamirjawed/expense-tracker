const express = require("express");

const {
    addExpense,
    getAllExpense,
    deleteExpense,
    downloadExpenseExcel
} = require("../controllers/expenseController")
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/add-expense",protect, addExpense);
router.get("/get-all-expense", protect, getAllExpense);
router.get("/download-expense-excel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);

module.exports = router;

