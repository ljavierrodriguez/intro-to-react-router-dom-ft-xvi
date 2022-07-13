

const ComponentA = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

const ComponentB = () => {
    return (
        <h1>Component B</h1>
    )
}


const BlogCard = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

const BlogCardHeader = (props) => {
    return (
        <div className="card-header">
            {props.children}
        </div>
    )
}

const App = () => {

    return (
        <>
            <h1>Hola Mundo</h1>
            <ComponentA>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <BlogCard>
                                <BlogCardHeader>
                                    <h1 className="card-title">
                                        Example Card
                                    </h1>
                                </BlogCardHeader>
                            </BlogCard>
                        </div>
                        <div class="col">
                            Column
                        </div>
                        <div class="col">
                            Column
                        </div>
                    </div>
                </div>
            </ComponentA>
        </>
    )
}

export default App;