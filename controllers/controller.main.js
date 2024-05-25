
const gets = {
    home: async (req, res) => {
        return res.render('layout', {
            title: 'EricCommerce',
            content: 'index',
        })
    },

}

module.exports = {
    gets
}