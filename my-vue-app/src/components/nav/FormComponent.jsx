import React,{useState} from "react";

function FromComponent () {
    // menginput logika pada data form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmint = (e) =>{
        console.log(
            "Form Submited:", {name,email,message}
        );

        alert(`Terimakasih, ${name}! Pesan telah dikirim`);

    };

    return(
        <div>
            <h2>kolom Curhat</h2>
            <form onSubmit={handleSubmint} className="form">
                <div className="form--content">
                    <div>
                        <div>
                            <label htmlFor="nama" className="form label">Nama :</label>
                            <input className="form input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="email" className="form label">Email :</label>
                            <input className="form input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="message" className="form label">Curhatan :</label>
                            <textarea  name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required>
                                isi dengan apa yang ada di pikiran anda</textarea>
                        </div>
                    </div>
                   
                </div>

                <button className="form button" type="submit">Submit</button>
                <img className="form--img" src="../../../img/pngwing.png" alt="gambar" />
                    
                
            </form>
        </div>
    )
}

export default FromComponent;