import express from 'express';
import * as stats from './stats_model.mjs';

const PORT = 8000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    let result = {}

    // uniform distribution data
    if (req.body.distribution === 'uniform') {
        stats.uniformDist(req.body.params, req.body.multiplicity)
            .then(data => {
                result.data = data;
                res.send(result);
            })
            .catch(error => {
                res.status(500).json(error.message);
            });
    }

    // normal distribution data
    if (req.body.distribution === 'normal') {
        stats.normalDist(req.body.params, req.body.multiplicity)
            .then(data => {
                result.data = data;
                res.send(result);
            })
            .catch(error => {
                res.status(500).json(error.message);
            });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});