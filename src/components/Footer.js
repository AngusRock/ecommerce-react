import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer(){
    return (        
        <footer className="bg-dark text-center text-white mt-4">  
            <div className="container p-4 pb-0">    
                <section className="mb-4">      
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">fc</a>     
                    <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button">tc</a>
                </section>    
            </div>  
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Coffee Site    
            </div>
        </footer>
    )
}