const server = Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url)

        if(url.pathname == '/'){
            return new Response("hello world")
        }
        if(url.pathname === '/about'){
            return new Response("this is about me")
        }
        if(url.pathname === '/feed'){
            throw new Error('could not reach feed')
            
        }
        return new Response("404!")
    },
    error(error){
        return new Response(`<pre> ${error} \n ${error.stack}</pre>`,{
            headers:{
                'Content-Type':'text/html'
            }
        })
    }
})

console.log(`listening to port http://localhost:${server.port}`)