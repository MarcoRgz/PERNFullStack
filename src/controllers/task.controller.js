const pool = require('../db');

//GET ALL TASKS
const getAlltask = async (req, res) => {

    const result = await pool.query('SELECT * FROM task');
    
    try {
        res.json(result.rows)

    } catch (error) {
        res.json({ error: error.message })
    }
};

//GET 1 TASK
const getTask = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);

        !result.rows.length
            ?
            res.status(404).send('<h1>Task Not Found 😿</h1>')
            :
            res.json(result.rows[0])
    } catch (error) {
        next(error);
    }

};
//UPDATE TASK
const putTask = async (req, res, next) => {

    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const result = await pool.query(
            'UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *',
            [title, description, id]);

        if (result.rows.length === 0)
            return res.status(404).json(
                { message: "Task not found 🙀" })

        res.json(result.rows)
    } catch (error) {
        next(error)
    }
};

//ADD NEW TASK
const postTask = async (req, res, next) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [
            title,
            description
        ]);
        res.json(result.rows)
        console.log("added",result.rows)
    } catch (error) {
        next(error)
    }
};

//DELETE 1 TASK
const deleteTask = async (req, res, next) => {
    try {
        const id = req.params.sometask;
        const result = await pool.query('DELETE FROM task WHERE id = $1', [id]);

        !result.rows.length ?
            res.status(404).send('<h1>Task Not Found 😿</h2>')
            :
            res.sendStatus(204);

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAlltask,
    getTask,
    putTask,
    postTask,
    deleteTask
}