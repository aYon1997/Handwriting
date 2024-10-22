
const eee = {}

Promise.then(res => {
    res.then(res2 => {
        eee = res2
    })
})

export default eee