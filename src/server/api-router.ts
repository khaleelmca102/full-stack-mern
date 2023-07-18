import express from "express"
import cors from "cors";

const router = express.Router();
router.use(cors());

import testData from "../test-data.json";

router.get("/contests", (req, res) => {
    res.send({contests: testData});
});

export default router;