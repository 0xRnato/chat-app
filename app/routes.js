module.exports = (app) => {
    // Backend Routes =====================================
    app.get('/api/login', (req, res)=>{
        res.sendStatus(200);
    });
    app.get('/api/chat', (req, res)=>{
        res.sendStatus(200);
    });
    // Frontend Routes ====================================
    app.get('*', (req, res) => {
		res.sendFile('./public/index.html');
	});
};
